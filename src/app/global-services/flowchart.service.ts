import {Injectable, Input, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';

import {IFlowchart, Flowchart, FlowchartReader} from '../base-classes/flowchart/FlowchartModule';
import {IGraphNode, GraphNode} from '../base-classes/node/NodeModule';
import {ICodeGenerator, CodeFactory, Module} from "../base-classes/code/CodeModule";

import * as CircularJSON from 'circular-json';


import * as ModuleSet from "../../assets/modules/AllModules";

@Injectable()
export class FlowchartService {

  /*private _ffactory = new FlowchartFactory();
  private _fc = new FlowchartConverter();*/

  private _user: string = "AKM";
 
  private _origData: any;
  private _flowchart: IFlowchart;

  private code_generator: ICodeGenerator = CodeFactory.getCodeGenerator("js");
  private _moduleSet: Module[];

  private _selectedNode: number = 0;
  private _selectedPort: number = 0;

  private check(){
    return this._flowchart != undefined;
  }

  constructor() { this.newFile() };

  // 
  // message handling between components
  // 
  private subject = new Subject<any>();
  sendMessage(message: string) {
      this.subject.next({ text: message });
  }
 
  clearMessage() {
      this.subject.next();
  }

  getMessage(): Observable<any> {
      return this.subject.asObservable();
  }

  //
  //  message to all viewers that flowchart updated
  //
  update(): void{
    this.sendMessage("Updated");
  }

  
  readTextFile(file: string){
      
  }

  loadFile(fileString: string): void{

      let _this = this;
      let jsonData: {language: string, flowchart: JSON, modules: JSON};
      try{
        let data = CircularJSON.parse(fileString);

        // load the required modules
         /* _this.modules.loadModules(data["module"]); */

        // load the required code generator
        if (_this.code_generator.getLanguage() != data["language"] && data["language"] !== undefined){
          _this.code_generator = CodeFactory.getCodeGenerator(data["language"])
        }

        // read the flowchart
        _this._flowchart = FlowchartReader.readFlowchartFromData(data["flowchart"]);
        console.log(_this._flowchart);
        _this.update();
        
      }
      catch(err){
        alert("Error loading file");
      }

  }

  loadModules(modules: Object[]): void{

    this._moduleSet = [];
    let moduleSet = this._moduleSet;

    modules.map(function(module){
        let modClass = ModuleSet[module["name"]];
        if(modClass.version == module["version"] && modClass.author == module["author"]){
          moduleSet.push(new modClass());
        }
        else{
          throw Error("Module not compatible. Please check version / author");
        }
    })

  }

  getModules(): Module[]{
    return this._moduleSet;
  }

  //
  // gets the textual representation of the actual flowchart
  //
  getChartData(): string{
    return JSON.stringify(this._flowchart); //this._fc.flowchartToData(this._flowchart);
  }

  //
  //  check if flowchart is there
  //
  hasFlowchart(): boolean{
    return this._flowchart != undefined;
  }

  //
  //
  //
  newFile(): IFlowchart{
    this._flowchart = new Flowchart(this._user);
    this._selectedNode = 0;
    this._selectedPort = 0;
    this.update();

    this.loadModules([{name: "Math", version: 1, author: "AKM"}]);

    return this._flowchart;
  }

  //
  //  returns the flowchart
  //
  getFlowchart(): IFlowchart{
    console.warn("Flowchart shouldnot be modified outside of this service");
    return this._flowchart; 
  }

  getNodes(): IGraphNode[]{
    return this._flowchart.getNodes();
  }

  getEdges(): any[]{
    return this._flowchart.getEdges();
  }

  //
  //    add node
  //
  addNode(type ?: string): void{
    let default_node_name: string = "hello" + (this._flowchart.getNodes().length + 1);
    let node:IGraphNode = new GraphNode(default_node_name, type);
    this._flowchart.addNode(node);
    this.update();
  }

  addEdge(outputAddress: number[], inputAddress: number[]):  void{
    this._flowchart.addEdge(outputAddress, inputAddress);

    let output = this._flowchart.getNodeByIndex(outputAddress[0]).getOutputByIndex(outputAddress[1])
    output.connect();
    let input = this._flowchart.getNodeByIndex(inputAddress[0]).getInputByIndex(inputAddress[1])
    input.connect();

    input.setComputedValue({port: outputAddress});

    this._flowchart.getNodeByIndex(inputAddress[0]).getInputByIndex(inputAddress[1])
    this.update();
  }

  //
  //  select node
  //
  selectNode(nodeIndex: number): void{
    this._selectedNode = nodeIndex;
    this._selectedPort = undefined;
    this.update();
  }

  selectPort(outputportIndex: number):void{
    this._selectedPort = outputportIndex; 
    this.update();
  }

  getSelectedNode(): IGraphNode{
    return this._flowchart.getNodeByIndex(this._selectedNode);
  }

  getSelectedPort(): any{
    // todo: where is this used?
    return this.getSelectedNode().getOutputByIndex(this._selectedPort);
  }

  //
  //  
  //
  isSelected(node: IGraphNode): boolean{
    return this._flowchart.getNodeByIndex(this._selectedNode).getId() == node.getId();
  }


  // 
  //  run this flowchart
  //
  execute(): any{
      this._flowchart.execute(this.code_generator);
      this.update();
  }

  //
  // get execution code    
  //
  getCode(): string{
    return this.code_generator.getDisplayCode(this._flowchart);
  }

  saveFile(): void{
    let file = {};
    let fileString: string;

    file["language"] = "js";
    file["modules"] = [];
    file["flowchart"] = this._flowchart;

    fileString = CircularJSON.stringify(file);

    this.downloadContent({
        type: 'text/plain;charset=utf-8',
        filename: 'Scene' + (new Date()).getTime() + ".mob",
        content: fileString
    });
  }

  downloadContent(options) {
      if (!options || !options.content) {
          throw 'You have at least to provide content to download';
      }
      options.filename = options.filename || 'scene.mob';
      options.type = options.type || 'text/plain;charset=utf-8';
      options.bom = options.bom || decodeURIComponent('%ef%bb%bf');
   
      if (window.navigator.msSaveBlob) {
          var blob = new Blob([options.bom + options.content],
                   {type: options.type });
          window.navigator.msSaveBlob(blob, options.filename);
      }
      else {
          var link = document.createElement('a');
          var content = options.bom + options.content;
          var uriScheme = ['data:', options.type, ','].join('');
          link.href = uriScheme + content;
          link.download = options.filename;
          //FF requires the link in actual DOM
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
      }
  }
 

}
