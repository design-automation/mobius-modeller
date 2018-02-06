import {Injectable, Input, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';

import {IFlowchart, Flowchart, FlowchartReader} from '../base-classes/flowchart/FlowchartModule';
import {IGraphNode, GraphNode} from '../base-classes/node/NodeModule';
import {ICodeGenerator, CodeFactory, IModule, ModuleUtils} from "../base-classes/code/CodeModule";
import {IPort} from "../base-classes/port/PortModule";
import {IProcedure} from "../base-classes/procedure/IProcedure";

import * as CircularJSON from 'circular-json';

import * as ModuleSet from "../../assets/modules/AllModules";

import {ConsoleService, EConsoleMessageType} from "./console.service";
import {LayoutService} from "./layout.service";

import {MOBIUS} from './mobius.constants';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {FileLoadDialogComponent} from '../ui-components/dialogs/file-load-dialog.component';

@Injectable()
export class FlowchartService {

  /*private _ffactory = new FlowchartFactory();
  private _fc = new FlowchartConverter();*/

  private _user: string = "AKM";
 
  private _origData: any;
  private _flowchart: IFlowchart;

  private code_generator: ICodeGenerator = CodeFactory.getCodeGenerator("js");
  private _moduleSet: IModule[];
  private _moduleMap: IModule[];

  private _selectedNode: number;
  private _selectedPort: number;

  private _selectedProcedure: IProcedure;

  private _savedNodes: IGraphNode[] = [];

  private check(){
    return this._flowchart != undefined;
  }

  constructor(private consoleService: ConsoleService, 
              private layoutService: LayoutService, 
              public dialog: MatDialog,) { 
      this.newFile();
      this.checkSavedNodes();
      //this.checkSavedFile();
      //this.autoSave(60*5);
  };

  autoSave(time_in_seconds: number): void{
    Observable.interval(1000 * time_in_seconds).subscribe(x => {
        // console.log("saving file");
        this.saveFile(true);
    });
  }

  getLastSaved(): Date{

      if(this._flowchart.getSavedTime()){
        return this._flowchart.getSavedTime()
      }
      else{
        let myStorage = window.localStorage;
        let property = MOBIUS.PROPERTY.FLOWCHART;
        let storageString = myStorage.getItem(property);

        if(storageString){
            let fc = CircularJSON.parse(storageString)["flowchart"]["_lastSaved"];
            return (new Date(fc));
        }
        
        return;
      }

  }

  checkSavedFile(): void{
      this.openFileLoadDialog();
  }

  openFileLoadDialog(): void{

    let myStorage = window.localStorage;
    let property = MOBIUS.PROPERTY.FLOWCHART;
    let storageString = myStorage.getItem(property);

    let message: string;
 
    if(storageString){
      let fc = CircularJSON.parse(storageString)["flowchart"]["_lastSaved"];

      message = "Hey there! We found a file saved on " + (new Date(fc)).toDateString() + " at " 
              + (new Date(fc)).toTimeString() + ". Would you like to reload?"
    }

    if(message){
      this.loadFile(storageString);
      /*if (confirm(message)) {
         this.loadFile(storageString);
      } else {
          this.newFile();
      }*/
    }
    else{
      this.consoleService.addMessage("Error loading file from memory", EConsoleMessageType.Error);
      this.layoutService.showConsole();
      this.newFile();
    }

    


        //let dialogRef = this.dialog.open(FileLoadDialogComponent, {
        //     height: '400px',
        //     width: '600px'
        // });

        // dialogRef.afterClosed().subscribe(result => {

        //     if(result == 'load'){
        //       console.log();
        //     }
        //     else if(result == 'new'){
        //       this.newFile()
        //     }
        //     else{
        //       this.newFile();
        //     }

        // });
  }

  checkSavedNodes(): void{ 

    this._savedNodes = [];
    
    let myStorage = window.localStorage;
    let property = MOBIUS.PROPERTY.NODE;
    let storageString = myStorage.getItem(property);
    let nodesStorage = CircularJSON.parse( storageString == null ? CircularJSON.stringify({n: []}) : storageString );

    let nodeData = nodesStorage.n; 

    for(let n=0; n < nodeData.length; n++){
        let n_data = nodeData[n];
        this._savedNodes.push(n_data);
    }

  }

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
  update(message?: string): void{
    this.sendMessage(message || "Updated");
  }

  
  readTextFile(file: string){
      
  }

  loadFile(fileString: string): void{

      let _this = this;
      let jsonData: {language: string, flowchart: JSON, modules: JSON};
      try{

        this.newFile();

        let data = CircularJSON.parse(fileString);

        // load the required modules
         /* _this.modules.loadModules(data["module"]); */

        // load the required code generator
        if (_this.code_generator.getLanguage() != data["language"] && data["language"] !== undefined){
          _this.code_generator = CodeFactory.getCodeGenerator(data["language"])
        }

        // read the flowchart
        _this._flowchart = FlowchartReader.readFlowchartFromData(data["flowchart"]);
        _this.update();

        this.consoleService.addMessage("File loaded successfully");
        this.layoutService.showConsole();
        
      }
      catch(err){
        this.newFile();
        this.consoleService.addMessage("Error loading file: " + err, EConsoleMessageType.Error);
        this.layoutService.showConsole();
      }

  }

  loadModules(modules: Object[]): void{

    this._moduleSet = [];
    this._moduleMap = [];
    let moduleSet = this._moduleSet;
    let moduleMap = this._moduleMap;

    /*let mod: IModule = { name: "gs-modeling", version: "0.1", author: "AKM"};
    for(let prop in ModuleSet){
      mod[prop] = ModuleSet[prop];
    }

    moduleSet.push(mod);
    moduleMap["gs-modeling"] = mod;

    */
    modules.map(function(mod){

        let name: string = ModuleUtils.getName(mod);
        let version: string = ModuleUtils.getVersion(mod);
        let author: string = ModuleUtils.getAuthor(mod);

        // select the required module from the global module set - that has all the functions
        let modClass = ModuleSet[name]; //ModuleUtils.getModuleFromSet(ModuleSet, name);
          if( ModuleUtils.isCompatible(mod, modClass) ){
              moduleSet.push(modClass);
              moduleMap[name] = modClass;
          }
          else{
              console.warn(name + " module not compatible. Please check version / author");
          }
    })

  }

  getModules(): IModule[]{
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
    this._selectedNode = undefined;
    this._selectedPort = undefined;
    this._selectedProcedure = undefined;
    this.update();

    this.loadModules(
                      [
                         //{_name: "Attrib", _version: 0.1, _author: "Patrick"},
                         {_name: "Calc", _version: 0.1, _author: "Patrick"},
                         {_name: "Circle", _version: 0.1, _author: "Patrick"},
                         {_name: "Group", _version: 0.1, _author: "Patrick"},
                         {_name: "Intersect", _version: 0.1, _author: "Patrick"},
                         {_name: "List", _version: 0.1, _author: "Patrick"},
                         {_name: "Math", _version: 0.1, _author: "Patrick"},
                         {_name: "Model", _version: 0.1, _author: "Patrick"},
                         {_name: "Obj", _version: 0.1, _author: "Patrick"},
                         {_name: "Plane", _version: 0.1, _author: "Patrick"},
                         {_name: "Pline", _version: 0.1, _author: "Patrick"},
                         {_name: "PMesh", _version: 0.1, _author: "Patrick"},
                         {_name: "Point", _version: 0.1, _author: "Patrick"},
                         //{_name: "Query", _version: 0.1, _author: "Patrick"},
                         //{_name: "Ray", _version: 0.1, _author: "Patrick"},
                         {_name: "Split", _version: 0.1, _author: "Patrick"},
                         {_name: "String", _version: 0.1, _author: "Patrick"},
                         //{_name: "Topo", _version: 0.1, _author: "Patrick"}
                      ]
                    );

    // print message to console
    this.consoleService.addMessage("New file created.");
    this.update();

    return this._flowchart;
  }

  //
  //  returns the flowchart
  //
  getFlowchart(): IFlowchart{
    //console.warn("Flowchart shouldnot be modified outside of this service");
    return this._flowchart; 
  }

  getNodes(): IGraphNode[]{
    return this._flowchart.getNodes();
  }

  getEdges(): any[]{
    return this._flowchart.getEdges();
  }

  getSavedNodes(): any{
    return this._savedNodes;
  }

  saveNode(node: IGraphNode|number): void{

    if( typeof node == "number"){
      node = this._flowchart.getNodeByIndex(node);
    }

    // todo: check if overwrite
    if( node.getType() !== undefined ){
      console.error("This node was already in the library and shouldn't have invoked this function.");
    }
    else{
      let message: string;

      let nav: any = navigator;
      let myStorage = window.localStorage;

      let property = MOBIUS.PROPERTY.NODE; 
      let storageString = myStorage.getItem(property);

      // initialize node storage by reading from localStorage or reading an empty array
      let nodesStorage = CircularJSON.parse(storageString == null ? CircularJSON.stringify({n: []}) : storageString);

      // array of nodes
      let nodes = nodesStorage.n;

      // check is another node exists with same name
      for(let i=0; i < nodes.length; i++){

          let node_in_lib: IGraphNode = nodes[i];
          if(node_in_lib["_name"] === node.getName()){
            message = "Node with this name already exists in the library. Either delete existing\
            node from the library or rename your node and try again.";
            this.consoleService.addMessage(message);
            this.layoutService.showConsole();
            return;
          }
      }

      // no node with common name was found
      try{
        nodesStorage.n.push(node);
        myStorage.setItem( property, CircularJSON.stringify(nodesStorage) );
        message = "Bravo! Node saved. Now you have " + (nodes.length) + " node(s) in the library!";
        node.saved();

        this.consoleService.addMessage(message);
        this.layoutService.showConsole();
        this.checkSavedNodes();
        this.update();
      }
      catch(ex){
        this.consoleService.addMessage("Oops. Something went wrong while saving this node.\
                                        Post the error message to the dev team on our Slack channel.", EConsoleMessageType.Error);
        this.consoleService.addMessage(ex, EConsoleMessageType.Error);
        this.layoutService.showConsole();
      }

    }

  }

  clearLibrary(): void{
    let nav: any = navigator;
    let myStorage = window.localStorage;

    let property = "MOBIUS_NODES";
    let storageString = myStorage.removeItem(property);

    // print message to console
    this.consoleService.addMessage("Node Library was cleared.");

    this.getNodes().map(function(node){
      node.removeType();
    })

    this.checkSavedNodes();
    this.update();
  }


  //
  //    add node
  //
  addNode(type?: number): void{
    
    let new_node: IGraphNode = undefined;
    let n_data = undefined; 

    if(type !== undefined){
      n_data = this._savedNodes[type];
      let default_node_name: string = n_data["_name"] + (this._flowchart.getNodes().length + 1);
      new_node = new GraphNode(default_node_name, n_data["_id"]);
      n_data["lib"] = true;
      new_node.update(n_data);
    }
    else{
      let default_node_name: string = "node" + (this._flowchart.getNodes().length + 1);
      new_node = new GraphNode(default_node_name, undefined);
      new_node.addInput(); 
      new_node.addOutput();
    }

    this._flowchart.addNode(new_node);

    this.selectNode(this._flowchart.getNodes().length - 1);

    // print message to console
    this.consoleService.addMessage("New Node was added");

  }

  addEdge(outputAddress: number[], inputAddress: number[]):  void{

      if(outputAddress[0] == inputAddress[0]){
        return;
      }

      // dont remove previous edges for outputs
      let output: IPort = this._flowchart.getNodeByIndex(outputAddress[0]).getOutputByIndex(outputAddress[1]);
      // if (output.isConnected()){
      //   this._flowchart.deleteEdges(this._flowchart.disconnectEdgesWithPortIndex(outputAddress[0], outputAddress[1], "output"));
      // }

      // remove previous edges for inputs
      let input = this._flowchart.getNodeByIndex(inputAddress[0]).getInputByIndex(inputAddress[1]);
      if (input.isConnected()){
        this._flowchart.deleteEdges(this._flowchart.disconnectEdgesWithPortIndex(inputAddress[0], inputAddress[1], "input"));
      }

      //
      this._flowchart.addEdge(outputAddress, inputAddress);
      input.setComputedValue({port: outputAddress});
      output.connect();
      input.connect();

      // print message to console
      this.consoleService.addMessage("New Edge was added");

      this.update();
  }

  addProcedure(prod: IProcedure): void{

      let node: IGraphNode = this.getSelectedNode();
      let selectedProcedure: IProcedure = this._selectedProcedure;

      this.checkProcedure(prod);

      if(selectedProcedure){
        if(selectedProcedure.hasChildren){
            selectedProcedure.addChild(prod);
        }
        else{

           if(selectedProcedure.getParent() && !selectedProcedure.getParent()["virtual"]){

               let parent: IProcedure = selectedProcedure.getParent();
               let index: number = 0;
               let allChildren: IProcedure[] = parent.getChildren();

               for(let i=0; i<allChildren.length; i++){
                   if(allChildren[i] === selectedProcedure){
                       index = i;
                       break;
                   }
               }

               parent.addChildAtPosition(prod, index + 1);

           }
           else{
               let parent: IGraphNode = node;
               let index: number = 0;
               let allChildren: IProcedure[] = node.getProcedure();

               for(let i=0; i<allChildren.length; i++){
                   if(allChildren[i] === selectedProcedure){
                       index = i;
                       break;
                   }
               }

               node.addProcedureAtPosition(prod, index + 1);
           }

        }
      }
      else{
        node.addProcedure(prod);
      }

      if(prod.getType() == "IfElse"){
          this.selectProcedure(prod.getChildren()[0]);
      }
      else{
        this.selectProcedure(prod);
      }

      this.update("procedure");
  }

  checkProcedure(prod: IProcedure): void{
      // validate procedure
      let codeString: string = prod.getCodeString(this.code_generator);
  }

  disconnectPort(type: string, portIndex: number, nodeIndex: number): void{
    this._flowchart.disconnectPort(type, portIndex, nodeIndex)
  }

  disconnectNode(nodeIndex: number): void{
    this._flowchart.disconnectNode(nodeIndex);
    this.update();
  }

  //
  //  update indices in edges on port deleted
  //
  deletePort(type: string, portIndex: number): void{
    this._flowchart.deletePort(type, portIndex, this._selectedNode);

    this.update();
  }

  deleteNode(node_index: number): void{

      this._selectedNode = undefined;
      this._selectedPort = undefined;
      this._selectedProcedure = undefined;

      //this.disconnectNode(node_index);
      this._flowchart.deleteNode(node_index);

      // print message to console
      this.consoleService.addMessage("Node was deleted");

      this.update();
  }


  deleteEdge(edgeIndex: number): void{
    this._flowchart.deleteEdge(edgeIndex);

    // print message to console
    this.consoleService.addMessage("Edge was deleted");
  }

  //
  //  select node
  //
  selectNode(nodeIndex: number, portIndex ?:number): void{
    this._selectedNode = nodeIndex;
    this._selectedPort = portIndex || 0;
    this._selectedProcedure = undefined;
    this.update();
  }

  selectProcedure(prod: IProcedure): void{
    this._selectedProcedure = prod;
  }

  getSelectedNode(): IGraphNode{

    if(this._selectedNode == undefined)
      return undefined;

    return this._flowchart.getNodeByIndex(this._selectedNode);
  }

  getSelectedNodeIndex(): number{
    return this._selectedNode;
  }

  getSelectedPort(): any{

    if(this._selectedNode == undefined){
      return undefined;
    }
    // todo: where is this used?
    return this.getSelectedNode().getOutputByIndex(this._selectedPort);
  }

  getSelectedPortIndex(): number{
    return this._selectedPort;
  }

  getSelectedProcedure(): IProcedure{
    return this._selectedProcedure;
  }

  //
  //  
  //
  isSelected(node: IGraphNode): boolean{
    if(this._selectedNode == undefined){
      return false; 
    }
    return this._flowchart.getNodeByIndex(this._selectedNode).getId() == node.getId();
  }
  //
  //
  //
  printConsole(consoleMessages: any[] /*[{name: string, value: any}]*/): void{
      if(consoleMessages.length > 0){
          let consoleHTML: string = "<div class='console-heading'>Printed Values</div>";

          for(let i=0; i < consoleMessages.length; i++){

               let variable_name: string = consoleMessages[i].name;
               let variable_value: string = consoleMessages[i].value; 

               if(Array.isArray(variable_value)){
                   variable_value = "[" + variable_value + "]";
               }

               if(typeof variable_value == 'string'){
                   variable_value = "\"" + variable_value + "\"";
               }

               consoleHTML += "<div class='console-line'>" +  "<span class='var-name'>Value of "  + variable_name + ": </span>" + 
                       "<span class='var-value'>"  + variable_value +  "</div>"
          }

          this.consoleService.addMessage(consoleHTML, EConsoleMessageType.Print);
      }
  }


  // 
  //  run this flowchart
  //
  execute(): any{

      let consoleMessages: any[] = [];
      function printFunction(varName: string, value: any){
        consoleMessages.push({name: varName, value: value});
      }

      try{
          this._flowchart.execute(this.code_generator, this._moduleMap, printFunction);
          this.printConsole(consoleMessages);
          this.consoleService.addMessage("Flowchart was executed.");

      }
      catch(ex){
        
        this.printConsole(consoleMessages);

        let errorMessage: string = "<div class='error'>" + ex + "</div>";
        this.consoleService.addMessage( errorMessage, EConsoleMessageType.Error );

        this.layoutService.showConsole();
      }

      this.update();
  }

  //
  // get execution code    
  //
  getCode(): string{
    return this.code_generator.getDisplayCode(this._flowchart);
  }

  saveFile(local?: boolean): void{
    let file = {};
    let fileString: string;

    if(local)
        this._flowchart.setSavedTime(new Date());

    file["language"] = "js";
    file["modules"] = [];
    file["flowchart"] = this._flowchart;

    fileString = CircularJSON.stringify(file);

    if(local == true){
      // add file string to local storage
      let myStorage = window.localStorage;
      let property = MOBIUS.PROPERTY.FLOWCHART;
      myStorage.setItem(property, fileString);

      this.consoleService.addMessage("Autosaved flowchart.");
    }
    else{
      this.downloadContent({
          type: 'text/plain;charset=utf-8',
          filename: 'Scene' + (new Date()).getTime() + ".mob",
          content: fileString
      });
      this.consoleService.addMessage("File saved successfully");
    }

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
