import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';
import { Component, OnInit, Injector, ElementRef } from '@angular/core';
import { AngularSplitModule } from 'angular-split';
import { DataService } from "../data/data.service";
import * as gs from "gs-json";
import {DataSubscriber} from "../data/DataSubscriber";


@Component({
  selector: 'app-toolwindow',
  templateUrl: './toolwindow.component.html',
  styleUrls: ['./toolwindow.component.css']
})
export class ToolwindowComponent extends DataSubscriber implements OnInit {
  Visible:string="point";
  boxes:any;
  model:any;
  scene:any;
  attribute:any;
  selectedVisible:boolean=false;
  collection:any;
  myElement;
  selecting:any;
  geometry:any;
  num:any;
  selectedOjb:any;
  selectdata:any;

  constructor(injector: Injector, myElement: ElementRef){
  	super(injector);
    this.scene=this.dataService.getScene();
    this.attribute=[];
    this.num=[];
    this.collection=[];
    this.myElement = myElement;
  }

  ngOnInit() {
  	this.boxes = this.dataService.getGsModel();
    this.model= new gs.Model(this.boxes);
  	this.point(this.Visible);
  }

  notify(){ 
  	this.selecting=this.dataService.selecting;
  	if(this.selectedVisible==true){
  	  this.objectcheck();
  	}
  	
  }

  point(Visible){
  	this.Visible="point";
  	this.attribute=[];
    /*for(var i=0;i<this.scene.children.length;i++){
      if(this.scene.children[i].type=="Mesh"){
      	var pointsgeom=this.scene.children[i].geometry.vertices;
      	for(var j=0;j<pointsgeom.length;j++){
      	  var attributepoints=new THREE.Vector3();
      	  attributepoints.x=pointsgeom[j].x;
      	  attributepoints.y=pointsgeom[j].y;
      	  attributepoints.z=pointsgeom[j].z;
      	  this.attribute.push(attributepoints);
      	}
      }
    }*/
    /*var pointsgeom=this.boxes.geom.points[1];
    for(var i=0;i<pointsgeom.length;i++){
      var attributepoints=new THREE.Vector3();
      attributepoints.x=pointsgeom[i][0];
      attributepoints.y=pointsgeom[i][1];
      attributepoints.z=pointsgeom[i][2];
      this.attribute.push(attributepoints);
    }*/
  }

  pointcheck(){
  	this.attribute=[];
    for(var i=0;i<this.scene.children.length;i++){
      for(var j=0;j<this.selecting.length;j++){
        if(this.scene.children[i].uuid==this.selecting[j].uuid){
      	  var pointsgeom=this.scene.children[i].geometry.vertices;
      		for(var j=0;j<pointsgeom.length;j++){
		  	  var attributepoints=new THREE.Vector3();
		  	  attributepoints.x=pointsgeom[j].x;
		  	  attributepoints.y=pointsgeom[j].y;
		  	  attributepoints.z=pointsgeom[j].z;
		  	  this.attribute.push(attributepoints);
      		}
      	}
      }
    }
  }

  vertice(Visible){
  	this.Visible="vertice";
  	this.attribute=[];
  	var verticegeom=this.boxes.geom.points[0];
  	for(var i=0;i<verticegeom.length;i++){
  		this.attribute.push(verticegeom[i]);
  	}
  }

  verticecheck(){
  	this.attribute=[];
    for(var i=0;i<this.scene.children.length;i++){
      for(var j=0;j<this.selecting.length;j++){
      	if(this.scene.children[i].uuid==this.selecting[j].uuid){
      	  var pointsgeom=this.scene.children[i].geometry.vertices;
      		for(var j=0;j<pointsgeom.length;j++){
		  	  var attributepoints=new THREE.Vector3();
		  	  attributepoints.x=pointsgeom[j].x;
		  	  attributepoints.y=pointsgeom[j].y;
		  	  attributepoints.z=pointsgeom[j].z;
		  	  this.attribute.push(attributepoints);
      		}
      	}
      }
    }
  }
  edge(Visible){
  	this.Visible="edge";


  }

  edgecheck(){

  }

  wire(Visible){
  	this.Visible="wire";

  }

  wirecheck(){

  }

  face(Visible){
  	this.Visible="face";
  	this.attribute=[];
  	/*for(var i=0;i<this.scene.children.length;i++){
      if(this.scene.children[i].type=="Mesh"){
      	var facesgeom=this.scene.children[i].geometry.faces;
      	for(var j=0;j<facesgeom.length;j++){
      	  var attributepoints=new THREE.Vector3();
      	  attributepoints.x=facesgeom[j].a;
      	  attributepoints.y=facesgeom[j].b;
      	  attributepoints.z=facesgeom[j].c;
      	  this.attribute.push(attributepoints);
      	}
      }
    }*/

  }
  
  facecheck(){
  	this.attribute=[];
  	for(var i=0;i<this.scene.children.length;i++){
  	  for(var j=0;j<this.selecting.length;j++){
  		if(this.scene.children[i].uuid==this.selecting[j].uuid){
  			var facesgeom=this.scene.children[i].geometry.faces;
  			for(var j=0;j<facesgeom.length;j++){
	  	  	  var attributepoints=new THREE.Vector3();
	  	      attributepoints.x=facesgeom[j].a;
	  	  	  attributepoints.y=facesgeom[j].b;
	  	  	  attributepoints.z=facesgeom[j].c;
	  	  	  this.attribute.push(attributepoints);
  			}
  		}
  	  }
  	}
  }

  object(Visible){
  	this.Visible="object";
  	this.attribute=[];
  	this.num=[];
  	for(var i=0;i<this.scene.children.length;i++){
      if(this.scene.children[i].type=="Mesh"){
      	var attributepoints:any=[];
      	attributepoints.original=this.attribute.length;
      	attributepoints.mesh=this.scene.children[i];
		attributepoints.axisX=this.scene.children[i].position.x;
		attributepoints.axisY=this.scene.children[i].position.y;
		attributepoints.axisZ=this.scene.children[i].position.z;
      	this.attribute.push(attributepoints);
      }
    }
  }

  objectcheck(){
  	this.selecting=this.dataService.selecting;
  	this.attribute=[];
  	var n=-1;
    for(var i=0;i<this.scene.children.length;i++){
      if(this.scene.children[i].type=="Mesh") n++;
      for(var j=0;j<this.selecting.length;j++){
      	if(this.scene.children[i].uuid==this.selecting[j].uuid){
		  var attributepoints:any=[];
		  attributepoints.axisX=this.scene.children[i].position.x;
		  attributepoints.axisY=this.scene.children[i].position.y;
		  attributepoints.axisZ=this.scene.children[i].position.z;
		  attributepoints.original =n;
		  this.attribute.push(attributepoints);
      	 }
      }
    }
  }

  changeselected(){
  	this.selectedVisible = !this.selectedVisible;
    if(this.selectedVisible){
      if(this.Visible==="point"){
      	this.pointcheck();
      }
      if(this.Visible==="vertice"){
      	this.verticecheck();
      }
      if(this.Visible==="face"){
      	this.facecheck();
      }
      if(this.Visible==="object"){
      	this.objectcheck();
      }
      
    }
    else{
      if(this.Visible==="point"){
      	this.point(this.Visible);
      }
      if(this.Visible==="vertice"){
      	this.vertice(this.Visible);
      }
      if(this.Visible==="edge"){
      	this.edge(this.Visible);
      }
      if(this.Visible==="wire"){
      	this.wire(this.Visible);
      }
      if(this.Visible==="face"){
      	this.face(this.Visible);
      }
      if(this.Visible==="object"){
      	this.object(this.Visible);
      }
     
    }
  }

  Onselect(i){
  	//this.selecting=this.dataService.selecting;
  	var select;
  	for(var j=0;j<this.attribute.length;j++){
  	  if(this.attribute[j].original==i){
  	  	select=this.attribute[j].mesh;
  	  	this.dataService.pushselecting(select);
  	  	select.material.color.setHex(0x2E9AFE);
  	  }
  	}

  }

}