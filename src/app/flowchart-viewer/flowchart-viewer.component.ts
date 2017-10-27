import { Component, OnInit, OnDestroy, Injector } from '@angular/core';
import { NgClass } from '@angular/common';

import { INode } from '../classes/INode';
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
  nodes: INode[] = [];
  conn: any = [];

  constructor(injector: Injector){  super(injector);  }

  ngOnInit(){
    let c = <HTMLCanvasElement> document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);
    ctx.stroke();
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

  selectNode(node:INode): void{
    this.flowchartService.selectNode(node);
  }

  isSelected(node: INode): boolean{
    return this.flowchartService.isSelected(node);
  }

  graphclick($event): void{
    alert("you clicked graph");
    console.log($event);
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

