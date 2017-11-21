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

  zoom: number = 1; 
  pan_mode: boolean = false;
  pan_init; 
  left: number = 0; 
  top: number = 0;

  selectedNode: number = 0;
  nodes: IGraphNode[] = [];
  conn: any = [];

  constructor(injector: Injector){  super(injector, "FlowchartViewer");  }

  resetViewer(): void{

    this.zoom = 1; 
    this.left = 0; 
    this.top = 0; 
    this.pan_mode = false;

  }

  reset(): void{
    this.selectedNode = 0;
    this.nodes = [];
    this.conn = [];
  }

  scale($event): void{
    let scaleFactor: number = 0.1;
    this.zoom = this.zoom  + (Math.sign($event.wheelDelta))*scaleFactor;
  }

  ngOnInit(){
  }

  update(){
    this.nodes = this.flowchartService.getNodes();
    this.conn = this.flowchartService.getConnections();

    this.nodes.map(function(node){
          let margin = 10; 
          let port_width = 15; 
          let inputs = node.getInputs().length; 
          let outputs =  node.getOutputs().length;
          let max = inputs > outputs ? inputs : outputs; 
          let width = margin*(max+1) + (max)*port_width;
          node["position"] = node.getPosition();
          node["width"] = width;
    }) 
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

  addNode($event): void{
    $event.stopPropagation();
    this.flowchartService.addNode();
  }

  nodeclick($event, node): void{
    this.flowchartService.selectNode(node);
  }

  startPan($event): void{
    console.log("startpan")
    this.pan_mode = true;
    this.pan_init = [$event.layerX, $event.layerY];
  }

  panning($event): void{
    if (this.pan_mode == true){
        let relX = $event.layerX - this.pan_init[0];
        let relY = $event.layerY - this.pan_init[1];
        let factor: number = 1; 
        this.left += relX; 
        this.top += relY;
        this.pan_init = [$event.layerX, $event.layerY];
    }
  }

  stopPan($event): void{
    console.log("panstopped")
    this.pan_mode = false;
    this.pan_init = undefined;
  }

  onDragStart($event, node): void{
    $event.dataTransfer.setDragImage( new Image(), 0, 0);
    // todo : find more elegant solution
    node.dragStart = {x: $event.pageX, y: $event.pageY}; 
    this.pan_mode = false;
  }

  onDrag($event, node): void{
    this.pan_mode = false;
    let relX: number = $event.pageX - node.dragStart.x; 
    let relY: number = $event.pageY - node.dragStart.y;
    node.position.x += relX/this.zoom; 
    node.position.y += relY/this.zoom; 
    node.dragStart = {x: $event.pageX, y: $event.pageY}; 
  }

  dragEnd($event, node): void{
    this.pan_mode = false;
    let relX: number = $event.pageX - node.dragStart.x; 
    let relY: number = $event.pageY - node.dragStart.y;
    node.position.x += relX; 
    node.position.y += relY; 

    node.setPosition(node.position);
  }

  inputclick($event, input): void{
    console.log($event, input);
  }

  //
  //  links and connections
  //
  _startPort: any = undefined; 
  link($event, port){

    if(this._startPort != undefined){
      this.conn.push(this.flowchartService.addLink(this._startPort, port));
    }
    else{
      this._startPort = port; 
    }

  }

}

