import * as THREE from 'three';
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
  Visible:string="Objs";
  boxes:any;
  model:gs.IModel;
  scene:THREE.Scene;
  attribute:Array<any>;
  selectedVisible:boolean;
  collection:Array<any>;
  myElement;
  num:Array<any>;
  selectObj:Array<any>;
  scenechildren:Array<any>;
  ID:string;
  scene_and_maps: {
          scene: gs.IThreeScene, 
          faces_map: Map<number, gs.ITopoPathData>, 
          wires_map: Map<number, gs.ITopoPathData>, 
          edges_map: Map<number, gs.ITopoPathData>} ;
  children:Array<any>;
  SelectVisible:string="Faces";
  FaceColor:THREE.Color;
  WireColor:THREE.Color;
  EdgeColor:THREE.Color;

  constructor(injector: Injector, myElement: ElementRef){
  	super(injector);
    this.scene=this.dataService.getScene();
    this.selectedVisible=false;
    this.attribute=[];
    this.num=[];
    this.collection=[];
    this.selectObj=[];
    this.myElement = myElement;
  }

  ngOnInit() {
    this.model= this.dataService.getGsModel(); 
  	this.object(this.Visible);
    this.Visible=this.dataService.visible;
    this.scene_and_maps= this.dataService.getscememaps();
    this.getoject();
    this.getcolor();
    this.faceselect(this.SelectVisible);
  }

  notify(){ 
    this.selectObj=[];
    for(var i=0;i<this.dataService.selecting.length;i++){
       for(var n=0;n<this.scene.children.length;n++){
        if(this.scene.children[n].type==="Scene"){
          if(this.dataService.selecting[i].uuid===this.scene.children[n].children[0].uuid){
             this.selectObj.push(this.scene.children[n].children[0].parent);
          }
        }
      }
    }
    if(this.selectedVisible==true){
      if(this.Visible==="Objs") this.objectcheck();
      if(this.Visible==="Faces") this.facecheck();
      if(this.Visible==="Wires") this.wirecheck();
      if(this.Visible==="Edges") this.edgecheck();
      if(this.Visible==="Vertices") this.verticecheck();
    }
    this.dataService.visible=this.Visible;;
  }

  getvertice(){
    var attributeedge=[];
    for(var i =0;i<this.scene_and_maps.faces_map.size;i++){
      const face: gs.IFace = this.model.getGeom().getTopo(this.scene_and_maps.faces_map.get(i)) as gs.IFace;
      const verts: gs.IVertex[] = face.getVertices();
       const verts_xyz: gs.XYZ[] = verts.map((v) => v.getPoint().getPosition());
      console.log(verts_xyz);
    }
  }

  getedges():Array<any>{
    var attributeedge=[];
    for(var i =0;i<this.scene_and_maps.edges_map.size;i++){
      var attribute:any=[]
      attribute=this.scene_and_maps.edges_map.get(i);
      if(attribute["tt"]!=undefined){
        if(attribute["tt"]==1){
          var edge:string="o"+attribute["id"]+":"+"f"+attribute["ti"]+":"+"e"+attribute["si"];
          attributeedge.push(edge);
        }
      }
    }
    return attributeedge;
  }
  getwires():Array<any>{
    var attributewire=[];
    for(var i =0;i<this.scene_and_maps.wires_map.size;i++){
      var attribute:any=[]
      attribute=this.scene_and_maps.wires_map.get(i);
      if(attribute["tt"]!=undefined){
        if(attribute["tt"]==0){
          var edge:string="o"+attribute["id"]+":"+"w"+attribute["ti"];
          attributewire.push(edge);
        }
      }
    }
    return attributewire;
  }

  getfaces():Array<any>{
    var attributeface=[];
    for(var i =0;i<this.scene_and_maps.faces_map.size;i++){
      var attribute:any=[]
      attribute=this.scene_and_maps.faces_map.get(i);
      if(attribute["tt"]!=undefined){
        if(attribute["tt"]==1){
          var edge:string="o"+attribute["id"]+":"+"f"+attribute["ti"];
          attributeface.push(edge);
        }
      }
    }
    return attributeface;
  }

  getoject():Array<any>{
    var attributeobject=[];
    var objectlable=[];
    /*for(var i =0;i<this.scene_and_maps.faces_map.size;i++){
      var attribute:any=[]
      attribute=this.scene_and_maps.faces_map.get(i);
      if(attribute["id"]!=undefined){
        if(objectlable.length!=0){
          for(var j=0;j<objectlable.length;j++){
            if(objectlable[j]!=attribute["id"]){
              objectlable.push(attribute["id"]);
            }
          }
        }else{objectlable.push(attribute["id"]);}
      }
    }
    for(var n=0;n<objectlable.length;n++){
      var object:string="o"+objectlable[n];
      attributeobject.push(object);
    }*/
    return attributeobject;
  }

  getchildren():Array<any>{
    var children;
      for (var i = 0; i<this.scene.children.length; i++) {
        if(this.scene.children[i].name=="Scene") {
          children=this.scene.children[i].children;
          break;
        }
        if(i==this.scene.children.length-1) {
          return [];
        }
      }
    return children;
  }
  getcolor(){
    var children=this.getchildren();
    for(var i=0;i<children.length;i++){
      if(children[i].name==="All faces"){
        this.FaceColor=children[i]["material"].color;
      }
      if(children[i].name==="All wires"){
        this.WireColor=children[i]["material"].color;
      }
      if(children[i].name==="All edges"){
        this.EdgeColor=children[i]["material"].color;
      }
    }
  }

  objectselect(SelectVisible){
    this.SelectVisible="Ojbs";
    var scenechildren=[];
    var children=this.getchildren();
    for(var i=0;i<children.length;i++){
      if(children[i].name==="All wires") children[i]["material"].opacity=0;
      if(children[i].name==="All edges") children[i]["material"].opacity=0;
      if(children[i].name==="All points") children[i]["material"].opacity=0;
      if(children[i].name==="All faces"){
        children[i]["material"].opacity=0.8;
      }

    }
    for(var j=0;j<this.scene.children.length;j++){
      if(this.scene.children[j].name==="Objs"){
        scenechildren.push(this.scene.children[j]);
      }
    }
    this.dataService.addscenechild(scenechildren);
  }

  faceselect(SelectVisible){
    this.SelectVisible="Faces";
    var scenechildren=[];
    var children=this.getchildren();
    for(var i=0;i<children.length;i++){
      if(children[i].name==="All wires") children[i]["material"].opacity=0.1;
      if(children[i].name==="All edges") children[i]["material"].opacity=0.1;
      if(children[i].name==="All points") children[i]["material"].opacity=0.1;
      if(children[i].name==="All faces"){
        children[i]["material"].opacity=0.8;
        scenechildren.push(children[i]);
      }
    }
    this.dataService.addscenechild(scenechildren);
  }

  wireselect(SelectVisible){
    this.SelectVisible="Wires";
    var scenechildren=[];
    var children=this.getchildren();
    for(var i=0;i<children.length;i++){
      if(children[i].name=="All faces") children[i]["material"].opacity=0.1;
      if(children[i].name==="All edges") children[i]["material"].opacity=0.1;
      if(children[i].name==="All points") children[i]["material"].opacity=0.1;
      if(children[i].name==="All wires"){
        children[i]["material"].opacity=0.6;
        scenechildren.push(children[i]);
      }
    }
    this.dataService.addscenechild(scenechildren);
  }
  edgeselect(SelectVisible){
    this.SelectVisible="Edges";
    var scenechildren=[];
    var children=this.getchildren();
    for(var i=0;i<children.length;i++){
      if(children[i].name=="All faces") children[i]["material"].opacity=0.1;
      if(children[i].name==="All wires") children[i]["material"].opacity=0.1;
      if(children[i].name==="All points") children[i]["material"].opacity=0.1;
      if(children[i].name==="All edges"){
        children[i]["material"].opacity=0.4;
        scenechildren.push(children[i]);
      }
    }
    this.dataService.addscenechild(scenechildren);
  }

  verticeselect(SelectVisible){
    this.SelectVisible="Vertices";
    var scenechildren=[];
    var children=this.getchildren();
    for(var i=0;i<children.length;i++){
      if(children[i].name=="All faces") children[i]["material"].opacity=0.1;
      if(children[i].name==="All wires") children[i]["material"].opacity=0.1;
      if(children[i].name==="All edges") children[i]["material"].opacity=0.1;
      if(children[i].name==="All points"){
        children[i]["material"].opacity=1;
        scenechildren.push(children[i]);
      }
    }
    this.dataService.addscenechild(scenechildren);
  }


  getscenechildren():Array<any>{
    var scenechildren=[];
    for(var n=0;n<this.scene.children.length;n++){
      if(this.scene.children[n].type==="Scene"){
        for(var i=0;i<this.scene.children[n].children.length;i++){
          //for(var j=0;j<this.scene.children[n].children[i].children.length;j++){
            scenechildren.push(this.scene.children[n].children[i]);
          //}
        }
      }
    }
    return scenechildren;
  }
  clearsprite(){
    this.dataService.visible=this.Visible;
    for(var i=0;i<this.dataService.sprite.length;i++){
      this.dataService.sprite[i].visible=false;
    }
    var sprite=[];
    this.dataService.pushsprite(sprite);
  }

  getpoints():Array<any>{
    var attrubtepoints=[];
    for(var i=0;i<this.model.getGeom().getAllPoints().length;i++){
      var attributepoint:any=[];
      attributepoint.id=this.model.getGeom().getAllPoints()[i].getID();
      attributepoint.x=this.model.getGeom().getAllPoints()[i].getPosition()[0];
      attributepoint.y=this.model.getGeom().getAllPoints()[i].getPosition()[1];
      attributepoint.z=this.model.getGeom().getAllPoints()[i].getPosition()[2];
      attrubtepoints.push(attributepoint);
    }

    return attrubtepoints;

  }
  getvertices(){
    var points:Array<any>=this.getpoints();
    var attributes=[];
    for(var i=0;i<this.scenechildren.length;i++){
      if(this.scenechildren[i].name==="All points"){
        for(var j=0;j<this.scenechildren[i].children.length;j++){
          for(var n=0;n<points.length;n++){
            if(points[n].x===this.scenechildren[i].children[j].position.x&&
              points[n].y===this.scenechildren[i].children[j].position.y&&
              points[n].z===this.scenechildren[i].children[j].position.z){
              var attributevertice:any=[];
              attributevertice.id=this.scenechildren[i].children[j].name;
              attributevertice.pointid=points[n].id;
              attributes.push(attributevertice);
            }
          }
        }
      }
    }
    return attributes;
  }
  getverticescheck(){
    var points:Array<any>=this.getpoints();
    var attributes=[];
    for(var i=0;i<this.selectObj.length;i++){
      for(var j=0;j<this.selectObj[i].children.length;j++){
        if(this.selectObj[i].children[j].name==="Vertices"){
          for(var n=0;n<this.selectObj[i].children[j].children.length;n++){
            for(var m=0;m<points.length;m++){
              if(points[m].x===this.selectObj[i].children[j].children[n].position.x&&
                points[m].y===this.selectObj[i].children[j].children[n].position.y&&
                points[m].z===this.selectObj[i].children[j].children[n].position.z){
                var attributevertice:any=[];
                attributevertice.id=this.selectObj[i].children[j].children[n].name;
                attributevertice.pointid=points[m].id
                attributes.push(attributevertice);
              }
            }
          }
        }
      }
    }
    return attributes;
  }

  point(Visible){
  	this.Visible="Points";
  	this.attribute=[];
    this.attribute=this.getpoints();
    this.dataService.visible=this.Visible;
    this.clearsprite();
  }

  pointcheck(){
    this.attribute=[];
    this.attribute=this.getpoints();
  }

  vertice(Visible){
  	this.Visible="Vertices";
  	this.attribute=this.getvertices();
    if(this.selectedVisible==true){
      this.verticecheck();
    }
    this.dataService.visible=this.Visible;
    this.clearsprite();
  }

  verticecheck(){
  	this.attribute=[];
    this.attribute=this.getverticescheck();
  }

  edge(Visible){
  	this.Visible="Edges";
    this.attribute=[];
    /*this.scenechildren=this.getscenechildren();
    for(var i=0;i<this.scenechildren.length;i++){
      if(this.scenechildren[i].name==="Edges"){
        for(var j=0;j<this.scenechildren[i].children.length;j++){
          var attributeface:any=[];
          attributeface.id=this.scenechildren[i].children[j].name;
          this.attribute.push(attributeface);
        }
      }
    }*/
    this.attribute=this.getedges();
    if(this.selectedVisible==true){
      this.edgecheck();
    }
    this.dataService.visible=this.Visible;
    this.clearsprite();
  }

  edgecheck(){
    this.attribute=[];
    for(var i=0;i<this.selectObj.length;i++){
      for(var j=0;j<this.selectObj[i].children.length;j++){
        if(this.selectObj[i].children[j].name==="Edges"){
          for(var n=0;n<this.selectObj[i].children[j].children.length;n++){
            var attributeedge:any=[];
            attributeedge.id=this.selectObj[i].children[j].children[n].name;
            this.attribute.push(attributeedge);
          }
          break;
        }
      }
    }
  }

  wire(Visible){
  	this.Visible="Wires";
    this.attribute=[];
    /*this.scenechildren=this.getscenechildren();
    for(var i=0;i<this.scenechildren.length;i++){
      if(this.scenechildren[i].name==="Wires"){
        for(var j=0;j<this.scenechildren[i].children.length;j++){
          var attributeface:any=[];
          attributeface.id=this.scenechildren[i].children[j].name;
          this.attribute.push(attributeface);
        }
      }
    }*/
    this.attribute=this.getwires();
    if(this.selectedVisible==true){
      this.wirecheck();
    }
    this.dataService.visible=this.Visible;
    this.clearsprite();
  }

  wirecheck(){
    this.attribute=[];
    for(var i=0;i<this.selectObj.length;i++){
      for(var j=0;j<this.selectObj[i].children.length;j++){
        if(this.selectObj[i].children[j].name==="Wires"){
          for(var n=0;n<this.selectObj[i].children[j].children.length;n++){
            var attributewire:any=[];
            attributewire.id=this.selectObj[i].children[j].children[n].name;
            this.attribute.push(attributewire);
          }
        }
      }
    }
  }

  face(Visible){
  	this.Visible="Faces";
  	this.attribute=[];
    /*this.scenechildren=this.getscenechildren();
    for(var i=0;i<this.scenechildren.length;i++){
      if(this.scenechildren[i].name==="Faces"){
        for(var j=0;j<this.scenechildren[i].children.length;j++){
          var attributeface:any=[];
          attributeface.id=this.scenechildren[i].children[j].name;
          this.attribute.push(attributeface);
        }
      }
    }*/
    this.attribute=this.getfaces();
    if(this.selectedVisible==true){
      this.facecheck();
    }
    this.clearsprite();
  }

  clicktoshow(id){
    this.ID=id;
    for(var i=0;i<this.scenechildren.length;i++){
      if(this.scenechildren[i].name===this.Visible){
        if(this.selectObj.length!==0){
          for(var j=0;j<this.scenechildren[i].children.length;j++){
            if(this.scenechildren[i].children[j].name===id){
              this.scenechildren[i].children[j].visible=true;
              this.dataService.addsprite(this.scenechildren[i].children[j]);
            }
          }
        }
      }
    }
  }
  
  facecheck(){
  	this.attribute=[];
    for(var i=0;i<this.selectObj.length;i++){
      for(var j=0;j<this.selectObj[i].children.length;j++){
        if(this.selectObj[i].children[j].name==="Faces"){
          for(var n=0;n<this.selectObj[i].children[j].children.length;n++){
            var attributeface:any=[];
            attributeface.id=this.selectObj[i].children[j].children[n].name;
            this.attribute.push(attributeface);
          }
        }
      }
    }
  }

  object(Visible){
  	this.Visible="Objs";
    this.attribute=[];
    /*this.scenechildren=this.getscenechildren();
    for(var i=0;i<this.scenechildren.length;i++){
      if(this.scenechildren[i].name==="Objs"){
        for(var j=0;j<this.scenechildren[i].children.length;j++){
          var attributeface:any=[];
          attributeface.id=this.scenechildren[i].children[j].name;
          this.attribute.push(attributeface);
        }
      }
    }*/
    //this.attribute=this.getoject();
    if(this.selectedVisible==true){
      this.objectcheck();
    }
    this.dataService.visible=this.Visible;
    this.clearsprite();
  }

  objectcheck(){
  	this.attribute=[];
    for(var i=0;i<this.selectObj.length;i++){
      for(var j=0;j<this.selectObj[i].children.length;j++){
        if(this.selectObj[i].children[j].name==="Objs"){
          for(var n=0;n<this.selectObj[i].children[j].children.length;n++){
            var attributeface:any=[];
            attributeface.id=this.selectObj[i].children[j].children[n].name;
            this.attribute.push(attributeface);
          }
        }
      }
    }
  }

  changeselected(){
  	this.selectedVisible = !this.selectedVisible;
    if(this.selectedVisible){
      if(this.Visible==="Points") this.pointcheck();
      if(this.Visible==="Vertices") this.verticecheck();
      if(this.Visible==="Edges") this.edgecheck();
      if(this.Visible==="Wires") this.wirecheck();
      if(this.Visible==="Faces") this.facecheck();
      if(this.Visible==="Objs") this.objectcheck();
    }
    else{
      if(this.Visible==="Points") this.point(this.Visible);
      if(this.Visible==="Vertices") this.vertice(this.Visible);
      if(this.Visible==="Edges") this.edge(this.Visible);
      if(this.Visible==="Wires") this.wire(this.Visible);
      if(this.Visible==="Faces") this.face(this.Visible);
      if(this.Visible==="Objs") this.object(this.Visible);
    }
  }

  Onselect(i){
  	var select;
    for(var n=0;n<this.scene.children.length;n++){
      if(this.scene.children[n].type==="Scene"){
        console.log(this.scene.children[n].children.length);
        for(var m=0;m<this.scene.children[n].children.length;m++){
          var sprite:Array<any>=this.scene.children[n].children[m].children[this.scene.children[n].children[m].children.length-1].children;
          for(var j=0;j<sprite.length;j++){
            if(sprite[j].name===i){
            }
          }
        }
        
        //this.scene.children[n].children
      }
    }
  	// for(var j=0;j<this.attribute.length;j++){
  	//   if(this.attribute[j].id==i){
  	//   	select=this.attribute[j].mesh;
  	//   	this.dataService.pushselecting(select);
  	//   	select.material.color.setHex(0x2E9AFE);
   //      console.log(this.attribute[j]);
  	//   }
  	// }

  }

}