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
          edges_map: Map<number, gs.ITopoPathData>,
          vertices_map: Map<number, gs.ITopoPathData>} ;
  children:Array<any>;
  SelectVisible:string;//="Faces";
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
    this.Visible=this.dataService.visible;
    if(this.model!==undefined){
      this.scene_and_maps= this.dataService.getscememaps();
    }else{
      return undefined;
    }
    this.object(this.Visible);
    //this.objectselect(this.SelectVisible);
    this.getvertices();
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
      if(this.Visible==="Points") this.pointcheck();
    }
    this.dataService.visible=this.Visible;
  }

  getvertices(){
    var attributevertix=[];
    var points=this.getpoints();
    for(var i =0;i<this.scene_and_maps.vertices_map.size;i++){
      const path: gs.ITopoPathData = this.scene_and_maps.vertices_map.get(i);
      const vertices: gs.IVertex = this.model.getGeom().getTopo(path) as gs.IVertex;
      const label: string = vertices.getLabel();
      const verts_xyz: gs.XYZ = vertices.getLabelCentroid();
      var attributes:any=[];
      for(var j=0;j<points.length;j++){
        if(points[j].x===verts_xyz[0]&&points[j].y===verts_xyz[1]&&points[j].z===verts_xyz[2]){
           attributes.pointid=points[j].id;
        }
      }
      attributes.vertixlabel=label;
      attributevertix.push(attributes);
    }
    this.dataService.addattrvertix(attributevertix);
    return attributevertix;
  }

  getedges():Array<any>{
    var attributeedge=[];
    for(var i =0;i<this.scene_and_maps.edges_map.size;i++){
      const path: gs.ITopoPathData = this.scene_and_maps.edges_map.get(i);
      const edge: gs.IEdge = this.model.getGeom().getTopo(path) as gs.IEdge;
      const label: string = edge.getLabel();
      attributeedge.push(label);
    }
    return attributeedge;
  }

  getwires():Array<any>{
    var attributewire=[];
    for(var i =0;i<this.scene_and_maps.wires_map.size;i++){
      const path: gs.ITopoPathData = this.scene_and_maps.wires_map.get(i);
      const wire: gs.IWire = this.model.getGeom().getTopo(path) as gs.IWire;
      const label: string = wire.getLabel();
      if(attributewire.indexOf(label)===-1)
        attributewire.push(label);
    }
    return attributewire;
  }

  getfaces():Array<any>{
    var attributeface=[];
    for(var i =0;i<this.scene_and_maps.faces_map.size;i++){
      const path: gs.ITopoPathData = this.scene_and_maps.faces_map.get(i);
      const face: gs.IFace = this.model.getGeom().getTopo(path) as gs.IFace;
      const label: string = face.getLabel();
      attributeface.push(label)
    }
    return attributeface;
  }

  getoject():Array<any>{
    var attributeobject=[];
    for(var i =0;i<this.scene_and_maps.faces_map.size;i++){
      const path: gs.ITopoPathData = this.scene_and_maps.faces_map.get(i);
      if(i===0||path.id!==this.scene_and_maps.faces_map.get(i-1).id){
        const label: string = "o"+path.id;
        attributeobject.push(label);
      }
    }
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

  getscenechildren():Array<any>{
    var scenechildren=[];
    for(var n=0;n<this.scene.children.length;n++){
      if(this.scene.children[n].type==="Scene"){
        for(var i=0;i<this.scene.children[n].children.length;i++){
            scenechildren.push(this.scene.children[n].children[i]);
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
    //console.log(this.model.getGeom().getAllPoints());
    for(var i=0;i<this.model.getGeom().getAllPoints().length;i++){
      var attributepoint:any=[];
      attributepoint.id=this.model.getGeom().getAllPoints()[i].getLabel();
      attributepoint.x=this.model.getGeom().getAllPoints()[i].getPosition()[0];
      attributepoint.y=this.model.getGeom().getAllPoints()[i].getPosition()[1];
      attributepoint.z=this.model.getGeom().getAllPoints()[i].getPosition()[2];
      attrubtepoints.push(attributepoint);
    }
    return attrubtepoints;
  }

  point(Visible){
  	this.Visible="Points";
    this.attribute=this.getpoints();
    if(this.selectedVisible==true){
      this.pointcheck();
    }
    this.dataService.visible=this.Visible;
    this.clearsprite();
  }

  pointcheck(){
    this.attribute=[];
    var selecting=this.dataService.getselecting();
    for(var i=0;i<selecting.length;i++){
      var attributepoint:any=[];
      attributepoint.id=this.model.getGeom().getAllPoints()[selecting[i].index].getLabel();
      attributepoint.x=this.model.getGeom().getAllPoints()[selecting[i].index].getPosition()[0];
      attributepoint.y=this.model.getGeom().getAllPoints()[selecting[i].index].getPosition()[1];
      attributepoint.z=this.model.getGeom().getAllPoints()[selecting[i].index].getPosition()[2];
      this.attribute.push(attributepoint);
    }
  }

  pointtovertix():any{
    /*var attributevertix=[];
    var selecting=this.dataService.getselecting();
    var points=this.getpoints();
    for(var i =0;i<selecting.length;i++){
      var path=selecting[i].path;
      const vertices: gs.IVertex = this.model.getGeom().getTopo(path) as gs.IVertex;
      const label: string = vertices.getLabel();
      const verts_xyz: gs.XYZ = vertices.getLabelCentroid();
      var attributes:any=[];
      for(var j=0;j<points.length;j++){
        if(points[j].x===verts_xyz[0]&&points[j].y===verts_xyz[1]&&points[j].z===verts_xyz[2]){
           attributes.pointid=points[j].id;
        }
      }
      attributes.vertixlabel=label;
      attributevertix.push(attributes);
    }
    this.dataService.addattrvertix(attributevertix);
    return attributevertix;*/
    var attributes:any=[];
    var vertices=this.getvertices();
    var selecting=this.dataService.getselecting();
    var char:string;
    var labels:any=[];
    if(selecting.length!==0){
      for(var i=0;i<selecting.length;i++){
        for(var j=0;j<vertices.length;j++){
          if(selecting[i]["id"]===vertices[j].pointid){
            attributes.push(vertices[j]);
          }
          if(selecting[i]["id"].indexOf("e")>-1){
            const path: gs.ITopoPathData = this.scene_and_maps.edges_map.get(selecting[i]["index"]);
            const edge: gs.IEdge = this.model.getGeom().getTopo(path) as gs.IEdge;
            const verts: gs.IVertex[] = edge.getVertices();
            for(var n=0;n<verts.length;n++){
              var label=verts[n].getLabel();
              if(label===vertices[j].vertixlabel&&attributes.indexOf(vertices[j]) == -1){
                attributes.push(vertices[j]);
              }
            }
          }
          if(selecting[i]["id"].length<8&&selecting[i]["id"].indexOf("w")>-1){
            const path: gs.ITopoPathData = this.scene_and_maps.wires_map.get(selecting[i]["index"]);
            const wire: gs.IWire = this.model.getGeom().getTopo(path) as gs.IWire;
            const verts: gs.IVertex[] = wire.getVertices();
            for(var n=0;n<verts.length;n++){
              var label=verts[n].getLabel();
              if(label===vertices[j].vertixlabel&&attributes.indexOf(vertices[j]) == -1){
                attributes.push(vertices[j]);
              }
            }
          }
          if(selecting[i]["id"].length<8&&selecting[i]["id"].indexOf("f")>-1){
            const path: gs.ITopoPathData = this.scene_and_maps.faces_map.get(selecting[i]["index"]);
            const face: gs.IFace = this.model.getGeom().getTopo(path) as gs.IFace;
            const verts: gs.IVertex[] = face.getVertices();
            for(var n=0;n<verts.length;n++){
              var label=verts[n].getLabel();
              if(label===vertices[j].vertixlabel&&attributes.indexOf(vertices[j]) == -1){
                attributes.push(vertices[j]);
              }
            }
          }
          if(selecting[i]["id"].length<5&&selecting[i]["id"].indexOf("p")== -1){
            const path: gs.ITopoPathData = this.scene_and_maps.faces_map.get(selecting[i]["index"]);
            const face: gs.IFace = this.model.getGeom().getTopo(path) as gs.IFace;
            const faces: gs.IFace[]= face.getObj().getFaces();
            for(var f=0;f<faces.length;f++){
            const verts: gs.IVertex[] = faces[f].getVertices();
              for(var n=0;n<verts.length;n++){
                var label=verts[n].getLabel();
                if(label===vertices[j].vertixlabel&&this.attribute.indexOf(vertices[j]) == -1){
                  attributes.push(vertices[j]);
                }
              }
            }
          }
        }
      }
    }
    return attributes;
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
    this.attribute=this.pointtovertix();
    /*this.attribute=[];
    var points=this.getpoints();
    var vertices=this.getvertices();
    var selecting=this.dataService.selecting;

    for(var i =0;i<selecting.length;i++){
      //const path: gs.ITopoPathData = this.scene_and_maps.vertices_map.get(i);
      const label:string=this.model.getGeom().getAllPoints()[selecting[i].index].getLabel();
      for(var j=0;j<vertices.length;j++){

      }
      const vertices: gs.IVertex = this.model.getGeom().getTopo(selecting[i].index) as gs.IVertex;
      //const label: string = vertices.getLabel();
      const verts_xyz: gs.XYZ = this.model.getGeom().getAllPoints()[selecting[i].index].getPosition();
      console.log(verts_xyz);
      //const verts_xyz: gs.XYZ = vertices.getLabelCentroid();
      var attributes:any=[];
      for(var j=0;j<points.length;j++){
        if(points[j].x===verts_xyz[0]&&points[j].y===verts_xyz[1]&&points[j].z===verts_xyz[2]){
           attributes.pointid=points[j].id;
        }
      }
      attributes.vertixlabel=label;
      this.attribute.push(attributes);
    }
    //this.dataService.addattrvertix(this.attribute);*/
  }

  edge(Visible){
  	this.Visible="Edges";
    this.attribute=[];
    this.attribute=this.getedges();
    if(this.selectedVisible==true){
      this.edgecheck();
    }
    this.dataService.visible=this.Visible;
    this.clearsprite();
  }


  edgecheck(){
    this.attribute=[];
    var edges=this.getedges();
    var selecting=this.dataService.getselecting();
    if(selecting.length!==0){
      for(var i=0;i<selecting.length;i++){
        for(var j=0;j<edges.length;j++){
          if(selecting[i]["id"]===edges[j]){
            this.attribute.push(edges[j]);
          }
          if(selecting[i]["id"].length<8&&selecting[i]["id"].indexOf("f")>-1){
            const path: gs.ITopoPathData = this.scene_and_maps.faces_map.get(selecting[i]["index"]);
            const face: gs.IFace = this.model.getGeom().getTopo(path) as gs.IFace;
            const verts: gs.IEdge[] = face.getEdges();
            for(var n=0;n<verts.length;n++){
              var label=verts[n].getLabel();
              if(label===edges[j]&&this.attribute.indexOf(edges[j]) == -1){
                this.attribute.push(edges[j]);
              }
            }
          }
          if(selecting[i]["id"].length<5&&selecting[i]["id"].indexOf("p")== -1){
            const path: gs.ITopoPathData = this.scene_and_maps.faces_map.get(selecting[i]["index"]);
            const face: gs.IFace = this.model.getGeom().getTopo(path) as gs.IFace;
            const faces: gs.IFace[]= face.getObj().getFaces();
            for(var f=0;f<faces.length;f++){
              const verts: gs.IEdge[] = faces[f].getEdges();
              for(var n=0;n<verts.length;n++){
                var label=verts[n].getLabel();
                if(label===edges[j]&&this.attribute.indexOf(edges[j]) == -1){
                  this.attribute.push(edges[j]);
                }
              }
            }
          }
        }
      }
    }
  }

  wire(Visible){
  	this.Visible="Wires";
    this.attribute=[];
    this.attribute=this.getwires();
    if(this.selectedVisible==true){
      this.wirecheck();
    }
    this.dataService.visible=this.Visible;
    this.clearsprite();
  }

  wirecheck(){
    this.attribute=[];
    var wires=this.getwires();
    var selecting=this.dataService.getselecting();
    if(selecting.length!==0){
      for(var i=0;i<selecting.length;i++){
        for(var j=0;j<wires.length;j++){
          if(selecting[i]["id"]===wires[j]){
            this.attribute.push(wires[j]);
          }
          if(selecting[i]["id"].length<5&&selecting[i]["id"].indexOf("p")== -1){
            const path: gs.ITopoPathData = this.scene_and_maps.faces_map.get(selecting[i]["index"]);
            const face: gs.IFace = this.model.getGeom().getTopo(path) as gs.IFace;
            const wireses: gs.IWire[]= face.getObj().getWires();
            for(var w=0;w<wireses.length;w++){
              var label=wireses[w].getLabel();
              if(label===wires[j]&&this.attribute.indexOf(wires[j]) == -1){
                this.attribute.push(wires[j]);
              }
            }
          }
        }
      }
    }
  }

  face(Visible){
  	this.Visible="Faces";
  	this.attribute=[];
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
    var faces=this.getfaces();
    var selecting=this.dataService.getselecting();
    if(selecting.length!==0){
      for(var i=0;i<selecting.length;i++){
        for(var j=0;j<faces.length;j++){
          if(selecting[i]["id"]===faces[j]){
            this.attribute.push(faces[j]);
          }
          if(selecting[i]["id"].length<5&&selecting[i]["id"].indexOf("p")== -1){
            const path: gs.ITopoPathData = this.scene_and_maps.faces_map.get(selecting[i]["index"]);
            const face: gs.IFace = this.model.getGeom().getTopo(path) as gs.IFace;
            const faceses: gs.IFace[]= face.getObj().getFaces();
            for(var f=0;f<faceses.length;f++){
              var label=faceses[f].getLabel();
              if(label===faces[j]&&this.attribute.indexOf(faces[j]) == -1){
                this.attribute.push(faces[j]);
              }
            }
          }
        }
      }
    }
  }

  object(Visible){
  	this.Visible="Objs";
    this.attribute=[];
    this.attribute=this.getoject();
    if(this.selectedVisible==true){
      this.objectcheck();
    }
    this.dataService.visible=this.Visible;
    this.clearsprite();
  }

  objectcheck(){
    this.attribute=[];
    var object=this.getoject();
    var selecting=this.dataService.getselecting();
    if(selecting.length!==0){
      for(var i=0;i<selecting.length;i++){
        for(var j=0;j<object.length;j++){
          if(selecting[i]["id"]===object[j]){
            this.attribute.push(object[j]);
          }
        }
      }
    }
  	/*this.attribute=[];
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
    }*/
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
        for(var m=0;m<this.scene.children[n].children.length;m++){
          var sprite:Array<any>=this.scene.children[n].children[m].children[this.scene.children[n].children[m].children.length-1].children;
          for(var j=0;j<sprite.length;j++){
            if(sprite[j].name===i){
            }
          }
        }
      }
    }
  }
}