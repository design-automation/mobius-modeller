import { Component, OnInit, OnDestroy, Injector } from '@angular/core';
import { NgClass } from '@angular/common';

import { IGraphNode, IEdge } from '../../../base-classes/node/NodeModule';
import { InputPort } from '../../../base-classes/port/PortModule';

import { Viewer } from '../../../base-classes/viz/Viewer';
import { FlowchartService } from '../../../global-services/flowchart.service';

@Component({
  selector: 'app-flowchart-viewer',
  templateUrl: './flowchart-viewer.component.html',
  styleUrls: ['./flowchart-viewer.component.scss']
})
export class FlowchartViewerComponent extends Viewer{

  pan_mode: boolean = false;
  pan_init;
  left: number = 0; 
  top: number = 0;
  zoom: number = 1; 

  _portWidth: number = 15; 
  _margin: number = 10; 

  _selectedNode: number = 0;
  _nodes: IGraphNode[] = [];
  _edges: IEdge[] = [];

  constructor(injector: Injector){  super(injector, "FlowchartViewer");  }

  //
  //
  //  Viewer Related Functions
  //
  //
  resetViewer(): void{
    this.zoom = 1; 
    this.left = 0; 
    this.top = 0; 
    this.pan_mode = false;

  }

  scale($event): void{
    let scaleFactor: number = 0.1;
    this.zoom = this.zoom  + (Math.sign($event.wheelDelta))*scaleFactor;
  }

  startPan($event): void{
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
    node.position[0] += relX/this.zoom; 
    node.position[1] += relY/this.zoom; 
    node.dragStart = {x: $event.pageX, y: $event.pageY}; 
  }

  dragEnd($event, node): void{
    this.pan_mode = false;
    let relX: number = $event.pageX - node.dragStart.x; 
    let relY: number = $event.pageY - node.dragStart.y;
    node.position[0] += relX; 
    node.position[1] += relY; 

  }



  //
  //
  //  Data Related Functions
  //
  //

  update(){
    this._nodes = this.flowchartService.getNodes();
    this._edges = this.flowchartService.getEdges();

    let m = this._margin; 
    let pw = this._portWidth;
    this._nodes.map(function(node){

          let inputs = node.getInputs().length; 
          let outputs =  node.getOutputs().length;
          let max = inputs > outputs ? inputs : outputs; 

          let width = m*(max+1) + (max)*pw;
    }) 
  }

  resetData(): void{
    this._selectedNode = 0;
    this._nodes = [];
    this._edges = [];
  }

  addNode($event): void{
    $event.stopPropagation();
    this.flowchartService.addNode();
  }




  updateInput(input_port: InputPort, event: any){
    /*input_port.set(event.target.value);
    console.log(input_port.getValue());
*/  }

  getData():string {
  	return JSON.stringify(this.flowchartService.getChartData());
  }

  isSelected(node: IGraphNode): boolean{
    return this.flowchartService.isSelected(node);
  }




  //
  //
  //  Events
  //
  //


  clickNode($event: Event, nodeIndex: number): void{
    // select the node
    this.flowchartService.selectNode(nodeIndex);
  }



  inputclick($event, input): void{
    console.log($event, input);
  }

  //
  //  links and connections
  //
  _startPort: any = undefined; 
  link($event, port){


  }

}

