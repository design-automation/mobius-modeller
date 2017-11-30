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

  addPort(nodeIndex: number, type: string): void{
    // select the node
    this.clickNode(null, nodeIndex);

    // add port 
    if(type == "in"){
        this._nodes[nodeIndex].addInput();
    }
    else if(type == "out"){
        this._nodes[nodeIndex].addOutput();
    }  

    this.flowchartService.update();
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

  private getPortPosition(nodeIndex: number, portIndex: number, type: string): {x: number, y: number}{

    let x: number;
    let y: number;

    let name: string = "n" + nodeIndex + type + portIndex;
    let el = document.getElementById(name);

    if(el == null){
      return {x: 0, y: 0};
    }

    let node_pos: number[] = this._nodes[nodeIndex].position;

    let port_container_height: number = 10; 
    let node_height: number = 60; 
    let port_width: number = 9.5;

    if(type == "pi"){
        x = node_pos[0] + port_width/2 + el.offsetLeft;
        y = node_pos[1] + port_container_height/2;

    } 
    else if(type == "po"){
        x = node_pos[0] + port_width/2 + el.offsetLeft;
        y = node_pos[1] + 3*port_container_height/2 + node_height;
    }
    else{
      throw Error("Unknown port type");
    }

    return {x: x, y: y}
  }

  portDragStart($event, port: InputPort|OutputPort, address: number[]){
      $event.dataTransfer.setDragImage( new Image(), 0, 0);
      this._startPort = port; 
      this._startPort['address'] = address;
      this._linkMode = true;

      let type: string;
      if(port instanceof InputPort){
        type = "pi";
      }
      else if(port instanceof OutputPort){
        type = "po";
      }

      this.mouse_pos.start = this.getPortPosition(address[0], address[1], type);
                             /*{x: $event.pageX - (24+181), 
                               y: $event.pageY - (64+41)};*/
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
    return this.edgeString( this.getPortPosition(edge.output_address[0], edge.output_address[1], "po"), 
                            this.getPortPosition(edge.input_address[0], edge.input_address[1], "pi") )
  }

  edgeString(startPoint: {x: number, y: number},  endPoint: {x: number, y: number}): string{


    /*let pointA: {x: number, y:number} = startPoint; 
    let pointB: {x: number, y:number} = endPoint; 

    // AB Midpoint
    let pointC: {x: number, y:number} = {x:  (startPoint.x + endPoint.x)/2, 
                                          y:  (startPoint.y + endPoint.y)/2}

    // AC Midpoint                            
    let pointD: {x: number, y:number} = {x:  (startPoint.x + pointC.x)/2, 
                                          y:  (startPoint.y + pointC.y)/2}
    // slope of AC
    // adjust this to the right

    // CB Midpoint                                           
    let pointE: {x: number, y:number} = {x:  (endPoint.x + pointC.x)/2, 
                                          y:  (endPoint.y + pointC.y)/2}*/
    // adjust this to the left

    let deltaY: number= 15; 
    if(y0 < y1){
      // do nothing
    }
    else{
      deltaY = -1*deltaY;
    }

    var x0 =startPoint.x;
    var y0 =startPoint.y;
    var x3 =endPoint.x;
    var y3 =endPoint.y;
    
    var mx1=0.75*x0+0.25*x3;
    var mx2=0.25*x0+0.75*x3;

    var my1=0.75*y0+0.25*y3;
    var my2=0.25*y0+0.75*y3;

    var distance = 0.25* Math.sqrt(Math.pow((x3-x0),2)+Math.pow((y3-y0),2));
    var pSlope =(x0-x3)/(y3-y0);
    var multi = Math.sqrt(distance*distance/(1+(pSlope*pSlope)));
    
    var x1,y1,x2,y2=0;
    
    x1 =mx1+multi;
    x2 =mx2-multi;
    
    if(y0==y3){
      y1=y0+distance;
      y2=y0-distance;
    }
    else{
      y1 =my1+(pSlope*multi);
      y2 =my2-(pSlope*multi);
    }
  
    var path="M"+x0+" "+y0+" C"+x1+" "+y1+" "+x2+" "+y2+" "+x3+" "+y3;
    
    return path;
  }

  edgeClicked(): void{
    alert("Edge clicked");
  }

}

