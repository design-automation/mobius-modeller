import { Component, OnInit, OnDestroy, Injector } from '@angular/core';
import { NgClass } from '@angular/common';

import { IGraphNode, IEdge } from '../../../base-classes/node/NodeModule';
import { InputPort, OutputPort } from '../../../base-classes/port/PortModule';

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

          node["width"] = width;
    }) 
  }

  resetData(): void{
    this._selectedNode = 0;
    this._nodes = [];
    this._edges = [];
  }

  //
  //
  //
  isSelected(node: IGraphNode): boolean{
    return this.flowchartService.isSelected(node);
  }

  //
  // Add node and edges
  //
  addNode($event): void{
    $event.stopPropagation();
    this.flowchartService.addNode();
    this.flowchartService.selectNode(this._nodes.length-1);
  }

  addEdge(outputPortAddress: number[], inputPortAddress: number[]): void{
    this.flowchartService.addEdge(outputPortAddress, inputPortAddress);
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

  //
  //  node dragging
  //
  nodeDragStart($event, node): void{
    $event.dataTransfer.setDragImage( new Image(), 0, 0);
    // todo : find more elegant solution
    node.dragStart = {x: $event.pageX, y: $event.pageY}; 
    this.pan_mode = false;
  }

  nodeDragging($event, node): void{
    this.pan_mode = false;
    let relX: number = $event.pageX - node.dragStart.x; 
    let relY: number = $event.pageY - node.dragStart.y;
    node.position[0] += relX/this.zoom; 
    node.position[1] += relY/this.zoom; 
    node.dragStart = {x: $event.pageX, y: $event.pageY}; 
  }

  nodeDragEnd($event, node): void{
    this.pan_mode = false;
    let relX: number = $event.pageX - node.dragStart.x; 
    let relY: number = $event.pageY - node.dragStart.y;
    node.position[0] += relX; 
    node.position[1] += relY; 

  }

  //
  //  port dragging to link
  //
  _startPort: InputPort|OutputPort;
  _endPort: InputPort|OutputPort;
  _linkMode: boolean = false;
  mouse_pos = { 
                start: {x: 0, y: 0}, 
                current: {x: 0, y: 0}
              }
  portDragStart($event, port: InputPort|OutputPort, address: number[]){
      $event.dataTransfer.setDragImage( new Image(), 0, 0);
      this._startPort = port; 
      this._startPort['address'] = address;
      this._linkMode = true;

      this.mouse_pos.start = {x: $event.pageX - (24+181), 
                               y: $event.pageY - (64+41)};
  }

  portDragging($event, port: InputPort|OutputPort){
      // todo: compute total offset of this div dynamically
      // urgent!
      //nodes.parentElement.parentElement.parentElement.parentElement.offsetLeft
      this.mouse_pos.current = {x: $event.pageX - (24+181), 
                               y: $event.pageY - (64+41)};
      // draw dashed edge on canvas 
  }

  portDragEnd($event: Event, port: InputPort|OutputPort){
      this._startPort = undefined; 
      this._endPort = undefined;
      this._linkMode = false;
  }

  portDrop($event, port: InputPort|OutputPort, address: number[]){
      
      this._endPort = port; 
      this._endPort["address"] = address;

      if(this._startPort !== undefined && this._endPort !== undefined){


        let inputPort: number[]; 
        let outputPort: number[];

        if( this._startPort instanceof InputPort ){
          inputPort = this._startPort["address"];
        }

        if( this._startPort instanceof OutputPort ){
          outputPort = this._startPort["address"];
        }

        if( this._endPort instanceof InputPort ){
          inputPort = this._endPort["address"];
        }

        if( this._endPort instanceof OutputPort ){
          outputPort = this._startPort["address"];
        }

        if( inputPort !== undefined && outputPort !== undefined){
            this.addEdge(outputPort, inputPort);
        }
        else{
            alert("Invalid connection")
        }

        // clear the variables
        this._startPort = undefined; 
        this._endPort = undefined;
      }
  }


  //
  // Edge drawing functions
  //
  getEdgePath(edge: IEdge): string{

    let outputNodeEl: HTMLElement = 
    document.getElementById("n" + edge.output_address[0] + "po" + edge.output_address[1]);
    let inputNodeEl: HTMLElement = 
    document.getElementById("n" + edge.input_address[0] + "pi" + edge.input_address[1]);

    if(outputNodeEl == null || inputNodeEl == null){
      console.log("returning");
      return "";
    }
    else{
      "not returning"
    }

    /*let outputPortOffset: number = 0//outputNodeEl.offsetLeft;
    let inputPortOffset: number = 0//inputNodeEl.offsetLeft;

    // todo: fix somewhere
    let node_height: number = 60;
    let port_container_height: number = 10; 
    let port_width: number = 15; 
    let margin: number = 4;

    let output_node_pos: number[] = this._nodes[edge.output_address[0]].position;
    let output_node_width: number = this._nodes[edge.output_address[0]]["width"];

    let input_node_pos: number[] = this._nodes[edge.input_address[0]].position; 
    let input_node_width: number = this._nodes[edge.input_address[0]]["width"];

    let startPoint = { x: output_node_pos[0], y: output_node_pos[1] }
    let endPoint = { x: input_node_pos[0], y: input_node_pos[1] }

    // output
    // pos_y = node_pos_y + node_height + port_container_height + port_container_height/2
    // pos_x = node_pos_x + portCount*(port_width + margin)
    startPoint.x = startPoint.x + outputPortOffset + port_width/2;
    startPoint.y = startPoint.y + node_height + 3*port_container_height/2;

    // input
    // pos_y = node_pos_y + port_container_height/2 
    // pos_x = node_pos_x +  portCount*(port_width + margin)
    endPoint.x = endPoint.x + inputPortOffset + port_width/2;
    endPoint.y = endPoint.y + port_container_height/2;*/


    return "M 10 350 q 150 -300 300 0"//this.edgeString(startPoint, endPoint);
  }

  edgeString(startPoint: {x: number, y: number},  endPoint: {x: number, y: number}): string{
    var x0 =startPoint.x
    var y0 =startPoint.y
    var x3 =endPoint.x;
    var y3 =endPoint.y;
    var x1,x2 =0;
    var y1,y2 =0;
    
    var path="";
  
    x1=0.6*(x0+x3)/2;
    x2=1.1*(x0+x3)/2;
    
    y1=0.6*(y0+y3)/2;
    y2=1.1*(y0+y3)/2;
    
    return "M"+x0+" "+y0+" C"+x1+" "+y1+" "+x2+" "+y2+" "+x3+" "+y3;
    /*let strArr= [];
    strArr.push("M");
    strArr = strArr.concat([startPoint.x, startPoint.y]);
    //strArr.push("q");
    strArr.push("L");
    //strArr = strArr.concat([ (startPoint.x + endPoint.x)/2 , (startPoint.y + endPoint.y)/2]);
    strArr = strArr.concat([endPoint.x, endPoint.y]);

    let final_path: string = strArr.join(" ");*/

    //return final_path; //"M 10 350 q 150 -300 300 0"
  }

  edgeClicked(): void{
    alert("Edge clicked");
  }

}

