import { Injectable, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { FlowchartConverter } from '../classes/FlowchartConverter';
import { IFlowchart } from '../classes/IFlowchart';
import { INode } from '../classes/INode';

@Injectable()
export class FlowchartService {

  private _origData: any;
  private _flowchart: IFlowchart;
  private _fc = new FlowchartConverter();

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
  //    sets the main scene
  //
  loadChartFromData(data: any): void{

    // change the module based on the module name
    this._flowchart = this._fc.dataToFlowchart(data);

    // tell subcribers to update 
  	this._origData = data; 

    this.sendMessage("Updated");
  }

  //
  // gets the textual representation of the actual flowchart
  //
  getChartData(): string{
    return JSON.stringify(this._flowchart); //this._fc.flowchartToData(this._flowchart);
  }

  //
  //  returns the flowchart
  //
  getFlowchart(): IFlowchart{
    return this._flowchart; 
  }

  getNodes(): INode[]{
    if(this._flowchart == undefined)
      return [];

    return this._flowchart.getNodes();
  }

  getConnections(): any[]{
    if(this._flowchart == undefined)
      return [];

    return this._flowchart.getConnections();
  }

  // 
  //  run this flowchart
  //
  execute(): any{
    this._flowchart.execute();
  }

  //
  // get execution code    
  //
  getCode(): string{
    return this._flowchart.getExecutionCode();
  }

}
