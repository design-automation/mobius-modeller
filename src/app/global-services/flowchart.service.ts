import { Injectable, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { IFlowchart } from '../base-classes/flowchart/FlowchartModule';
import { IGraphNode, GraphNode } from '../base-classes/node/NodeModule';

@Injectable()
export class FlowchartService {

  /*private _ffactory = new FlowchartFactory();
  private _fc = new FlowchartConverter();*/
 
  private _origData: any;
  private _flowchart: IFlowchart;

  private _selectedNode: number = 0;
  private _selectedPort: number = 0;

  private check(){
    return this._flowchart != undefined;
  }

  constructor() {  }

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


  //
  //    sets the main scene
  //
  loadChartFromData(data: any, language: string = "js"): void{

    // change the module based on the module name
    this._flowchart = this._fc.dataToFlowchart(data, language);

  	this._origData = data; 
    
    // tell subcribers to update 
    this.update();
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
  newFlowchart(): IFlowchart{
    this._flowchart = this._ffactory.getFlowchart("js");
    this._selectedNode = 0;
    this._selectedPort = 0;
    this.update();
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

  getConnections(): any[]{
    return this._flowchart.getConnections();
  }

  //
  //    add node
  //
  addNode(): void{
    let default_node_name: string = "hello" + (this._flowchart.getNodes().length + 1);
    let node:IGraphNode = new GraphNode(this._flowchart.getNodes().length, default_node_name);
    this._flowchart.add(node);
    this.update();
  }

  addLink(port1, port2):  void{
    console.log(port1, port2);
    this._flowchart.addLink(undefined);
    this.update();
  }

  //
  //  select node
  //
  selectNode(node: IGraphNode): void{
    this._selectedNode = node.getID();
    this._selectedPort = undefined;
    this.update();
  }

  selectPort(index: number):void{
    this._selectedPort = index; 
  }

  getSelectedNode(): IGraphNode{
    return this._flowchart.getNode(this._selectedNode);
  }

  getSelectedPort(): number{
    return this._selectedPort;
  }

  //
  //  
  //
  isSelected(node: IGraphNode): boolean{
    return this._selectedNode == node.getID();
  }


  // 
  //  run this flowchart
  //
  execute(): any{
      this._flowchart.execute();
      this.update();
  }

  //
  // get execution code    
  //
  getCode(): string{
    return this._flowchart.getDisplayCode();
  }

  save(): void{
    console.log(this._flowchart.save());
  }

}
