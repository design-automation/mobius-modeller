import { Component, OnInit, OnDestroy, Injector } from '@angular/core';
import { NgClass } from '@angular/common';

import { IGraphNode } from '../classes/IGraphNode';
import { InputPort } from '../classes/IPort';

import { Viewer } from '../classes/Viewer';
import { FlowchartService } from '../data/flowchart.service';

@Component({
  selector: 'app-flowchart-viewer',
  templateUrl: './flowchart-viewer.component.html',
  styleUrls: ['./flowchart-viewer.component.scss']
})
export class FlowchartViewerComponent extends Viewer{

  selectedNode: number = 0;
  nodes: IGraphNode[] = [];
  conn: any = [];

  constructor(injector: Injector){  super(injector, "FlowchartViewer");  }

  reset(): void{
    this.selectedNode = 0;
    this.nodes = [];
    this.conn = [];
  }

  ngOnInit(){
    /*let c = <HTMLCanvasElement> document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);
    ctx.stroke();*/
  }

  update(){
    this.nodes = this.flowchartService.getNodes();
    this.conn = this.flowchartService.getConnections()
    //this.data = this.flowchartService.getChartData();
  }

  updateInput(input_port: InputPort, event: any){
    input_port.setValue(event.target.value);
    console.log(input_port.getValue());
  }

  getData():string {
  	return JSON.stringify(this.flowchartService.getChartData());
  }

  isSelected(node: IGraphNode): boolean{
    return this.flowchartService.isSelected(node);
  }

  graphclick($event): void{
    console.log($event);
  }

  addNode(): void{
      this.flowchartService.addNode();
  }

  nodeclick($event, node): void{
    this.flowchartService.selectNode(node);
  }

  inputclick($event, input): void{
    console.log($event, input);
  }

  dragNode($event): void{
    console.log("drag end");
    if($event.clientX == 0 && $event.clientY == 0){
      console.log("returning");
      return;
    }
    let square =  $event.srcElement;
    square.style.top = $event.clientY;
    square.style.left = $event.clientX;
    console.log($event);
    console.log("assigned" , $event.clientX, $event.clientY, square);
  }

}

