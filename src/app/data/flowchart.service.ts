import { Injectable, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { FlowchartConverter } from '../classes/FlowchartConverter';
import { IFlowchart, FlowchartFactory } from '../classes/IFlowchart';
import { IGraphNode, GraphNode } from '../classes/IGraphNode';

@Injectable()
export class FlowchartService {

  private _ffactory = new FlowchartFactory();
  private _fc = new FlowchartConverter();
 
  private _origData: any;
  private _flowchart: IFlowchart;

  private _selectedNode: number = 0;

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
    let node:IGraphNode = new GraphNode(this._flowchart.getNodes().length, "hello");
    this._flowchart.add(node);
    this.update();
  }

  //
  //  select node
  //
  selectNode(node: IGraphNode): void{
    this._selectedNode = node.getID();
    this.update();
  }

  getSelectedNode(): IGraphNode{
    return this._flowchart.getNode(this._selectedNode);
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

}
