import { Component, OnInit, OnDestroy, Injector, ViewChild, ElementRef } from '@angular/core';
import { NgClass } from '@angular/common';

import { IGraphNode, IEdge, GraphNode } from '../../../base-classes/node/NodeModule';
import { InputPort, OutputPort } from '../../../base-classes/port/PortModule';

import { Viewer } from '../../../base-classes/viz/Viewer';
import { FlowchartService } from '../../../global-services/flowchart.service';
import { LayoutService } from '../../../global-services/layout.service';

import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';

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

  _selectedNode: IGraphNode;
  _selectedNodeIndex: number;
  _selectedPortIndex: number;
  _nodes: IGraphNode[] = [];
  _edges: IEdge[] = [];

  showLibrary: boolean = false;


  showDialog: {status: boolean, position: number[]} = {status: false, position: [0,0]};

  constructor(injector: Injector, private layoutService: LayoutService){  
    super(injector, "FlowchartViewer");  
  }

  reset(){ 
    this._selectedNode = undefined;
    this._selectedNodeIndex = undefined;
    this._selectedPortIndex = undefined;
    this._nodes = [];
    this._edges = [];
  }

  editNode(): void{
    //this.layoutService.toggleEditor();
  }

  deleteNode(node_index: number): void{
    this._selectedNode = undefined; 
    //this.layoutService.hideEditor();
    this.flowchartService.deleteNode(node_index);
  }

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
    this.pan_init = [$event.clientX, $event.clientY];
  }

  panning($event): void{
    if (this.pan_mode == true){
        let relX = $event.clientX - this.pan_init[0];
        let relY = $event.clientY - this.pan_init[1];
        let factor: number = 1; 
        this.left += relX; 
        this.top += relY;
        this.pan_init = [$event.clientX, $event.clientY];
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
  updateEdges(): void{ 
    for(let e=0; e< this._edges.length; e++){
      let edge: IEdge = this._edges[e];
      edge["path"] = this.getEdgePath(edge);
    }
  }

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

    this.updateEdges();

    this._selectedNode = this.flowchartService.getSelectedNode();
    this._selectedNodeIndex = this.flowchartService.getSelectedNodeIndex();
    this._selectedPortIndex = this.flowchartService.getSelectedPortIndex();
  }

  resetData(): void{
    this._selectedNode = undefined;
    this._nodes = [];
    this._edges = [];
  }

  //
  //
  //
  isSelected(node: IGraphNode): boolean{
    if(node == undefined){
      return false;
    }

    return this.flowchartService.isSelected(node);
  }

  isPortSelected(nodeIndex:number, portIndex: number){
    return (nodeIndex == this._selectedNodeIndex && portIndex == this._selectedPortIndex)
  }

  isSaved(node: IGraphNode): boolean{
    if(node.getType() === undefined){
      return false;
    }
    else{
      return true;
    }
  }

  //
  // Add node and edges
  //
  addNode($event, type: number): void{
    $event.stopPropagation();
    if(type == undefined){
      this.flowchartService.addNode();
    }
    else{
      this.flowchartService.addNode(type);
    }

    this.update();
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

  clickPort($event: Event, nodeIndex: number, portIndex: number): void{
    // select the node
    $event.stopPropagation();
    this.flowchartService.selectNode(nodeIndex, portIndex);
  }

  // addPort(nodeIndex: number, type: string): void{
  //   // select the node
  //   this.clickNode(null, nodeIndex);

  //   // add port 
  //   if(type == "in"){
  //       this._nodes[nodeIndex].addInput();
  //   }
  //   else if(type == "out"){
  //       this._nodes[nodeIndex].addOutput();
  //   }  

  //   this.flowchartService.update();
  // }


  //
  //  node dragging
  //
  dragStart = {x: 0, y: 0};
  nodeDragStart($event, node): void{
    $event.dataTransfer.setDragImage( new Image(), 0, 0);
    // todo : find more elegant solution
    this.dragStart = {x: $event.pageX, y: $event.pageY}; 
    this.pan_mode = false;
  }

  nodeDragging($event, node): void{
    this.pan_mode = false;
    let relX: number = $event.pageX - this.dragStart.x; 
    let relY: number = $event.pageY - this.dragStart.y;
    node.position[0] += relX/this.zoom; 
    node.position[1] += relY/this.zoom; 
    
    this.dragStart = {x: $event.pageX, y: $event.pageY}; 
    this.updateEdges();
  }

  nodeDragEnd($event, node): void{
    this.pan_mode = false;
    let relX: number = $event.pageX - this.dragStart.x; 
    let relY: number = $event.pageY - this.dragStart.y;
    node.position[0] += relX; 
    node.position[1] += relY; 

    this.dragStart = {x:  0, y: 0};
    this.updateEdges();
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

      $event.stopPropagation();

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

      console.log("port drag start");

      let port_position =  this.getPortPosition(address[0], address[1], type);

      this.mouse_pos.start = {x: port_position.x, y: port_position.y };
      this.mouse_pos.current = {x: port_position.x, y: port_position.y };
      
      this.dragStart = {x: $event.clientX, y: $event.clientY};
  }

  portDragging($event, port: InputPort|OutputPort){

      $event.stopPropagation();

      // todo: compute total offset of this div dynamically
      // urgent!
      let relX: number = $event.clientX - this.dragStart.x; 
      let relY: number = $event.clientY - this.dragStart.y;

      this.mouse_pos.current.x += relX/this.zoom; 
      this.mouse_pos.current.y += relY/this.zoom; 

      this.dragStart = {x: $event.clientX, y: $event.clientY}; 
  }

  portDragEnd($event, port: InputPort|OutputPort){

      $event.stopPropagation();

      let relX: number = $event.clientX - this.dragStart.x; 
      let relY: number = $event.clientY - this.dragStart.y;
      this.mouse_pos.current.x += relX/this.zoom; 
      this.mouse_pos.current.y += relY/this.zoom; 
      
      this.dragStart = {x: 0, y: 0}; 

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


  private getPortPosition(nodeIndex: number, portIndex: number, type: string): {x: number, y: number}{

    let x: number;
    let y: number;
    let port_size: number = 15;

    let name: string = "n" + nodeIndex + type + portIndex;
    let el: any = document.getElementById(name);

    if(el == null){
      return {x: 0, y: 0};
    }

    let node_pos: number[] = this._nodes[nodeIndex].position;

    let port_pos_x = el.offsetLeft;
    let port_pos_y = el.offsetTop;
    let node_width = el.offsetParent.offsetWidth;


    if(type == "pi"){
      x = node_pos[0];
      y = node_pos[1] + port_pos_y + port_size/2;
    } 
    else if(type == "po"){
      x = node_pos[0] + node_width;
      y = node_pos[1] + port_pos_y + port_size/2;
    }
    else{
      throw Error("Unknown port type");
    }

    return {x: x, y: y}
  }

  //
  // Edge drawing functions
  //
  getEdgePath(edge: IEdge): string{

    return this.edgeString( 
          this.getPortPosition(edge.output_address[0], edge.output_address[1], "po"), 
          this.getPortPosition(edge.input_address[0], edge.input_address[1], "pi") );
  }


  //
  //  todo: Balu
  //
  //
  edgeString(output_port_position: {x: number, y: number},  input_port_position: {x: number, y: number}): string{

    if(output_port_position == undefined || input_port_position == undefined)
      return "";

    // add margin to output port in downward direction
    //output_port_position.y += 30; 
    // add margin to input port in upward direction
    //input_port_position.y -= 30;
    //
    
    let path: string;
    let move: string = "M";
    let line: string = " L";
    let control: string = " Q";

    // add the start point from output
    let startPoint: string = output_port_position.x + " " + output_port_position.y;
    let endPoint: string = input_port_position.x + " " + input_port_position.y;

    // move downwards/upwards in straight line
    let translate: number = 10; 
    let shifted_startPoint: string = output_port_position.x  + translate + " " + (output_port_position.y);
    let shifted_endPoint: string = input_port_position.x - translate + " " + (input_port_position.y );

    // compute curvy line
    var x0 = output_port_position.x + translate;
    var y0 = output_port_position.y ;
    var x3 =  input_port_position.x - translate;
    var y3 =  input_port_position.y ;
    
    var mx1=0.75*x0+0.25*x3;
    var mx2=0.25*x0+0.75*x3;

    var my1=0.75*y0+0.25*y3;
    var my2=0.25*y0+0.75*y3;

    var distance = 0.25*Math.round(Math.sqrt(Math.pow((x3-x0),2)+Math.pow((y3-y0),2)));
    var pSlope =(x0-x3)/(y3-y0);
    var multi = Math.round(Math.sqrt(distance*distance/(1+(pSlope*pSlope))));
    
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
  
    //path="M"+x0+" "+y0+" C"+x1+" "+y1+" "+x2+" "+y2+" "+x3+" "+y3;*/

    path = move + startPoint 
          + line + shifted_startPoint 
          + "C" + x1 + " " + y1 + " " + x2 + " " + y2 + " " + x3 + " " + y3
          //+ line + shifted_endPoint 
          + line + endPoint;
    
    return path;
  }

  edgeClicked(): void{
    alert("Edge clicked");
  }


  updateNodeName($event, node): void{
    let name: string =  $event.srcElement.innerText; 

    if(name.trim().length > 0){
      node.setName(name);
      this.flowchartService.update();
    }
  }

  saveNode(node: IGraphNode): void{
    this.flowchartService.saveNode(node);
  }



  //
  //
  
  @ViewChild('fileInput') fileInput: ElementRef;
  openPicker(): void{
    let el: HTMLElement = this.fileInput.nativeElement as HTMLElement;
    el.click();
  }

  loadFile(url ?:string): void{
    let file = this.fileInput.nativeElement.files[0];
    if (file) {
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        let fs = this.flowchartService;
        reader.onload = function (evt) {
          let fileString: string = evt.target["result"];
          fs.loadFile(fileString);
        }
        reader.onerror = function (evt) {
            console.log("Error reading file");
        }
    }
    this.flowchartService.loadFile(url);
  }

  save(): void{
    this.flowchartService.saveFile();
  }

}

