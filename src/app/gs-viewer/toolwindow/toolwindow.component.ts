import * as THREE from 'three';
import { Component, OnInit, Injector, ElementRef } from '@angular/core';
import { AngularSplitModule } from 'angular-split';
import { DataService } from "../data/data.service";
import * as gs from "gs-json";
import {DataSubscriber} from "../data/DataSubscriber";
import {ViewerComponent} from "../viewer/viewer.component";


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
          vertices_map: Map<number, gs.ITopoPathData>,
          points_map: Map<number, gs.ITopoPathData>} ;
  children:Array<any>;
  SelectVisible:string;//="Faces";
  FaceColor:THREE.Color;
  WireColor:THREE.Color;
  EdgeColor:THREE.Color;
  textlabels: Array<any>=[];
  starsGeometry:THREE.Geometry = new THREE.Geometry();
  message:string;
  p1:number;
  p2:number;
  p3:number;
  p4:number;
  p5:number;
  p6:number;
  point_name:Array<any>;
  vertex_name:Array<any>;
  edge_name:Array<any>;
  wire_name:Array<any>;
  face_name:Array<any>;
  obj_name:Array<any>;


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
    this.updateModel();
    
  }

  notify(message: string):void{ 
    if(message == "model_update" && this.scene){
      //this.updateModel();
      this.ngOnInit();
    }
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

  updateModel():void{
    if(this.model!==undefined){
      try{
        this.scene_and_maps= this.dataService.getscememaps();
        this.object(this.Visible);
        this.getvertices();
      }catch(ex){
        console.error("Error displaying model:", ex);
      }
    }
  }

  getpoints():Array<any>{
    var attrubtepoints=[];
    this.point_name=[];
    if(this.scene_and_maps.points_map!==null&&this.scene_and_maps.points_map.size!==0&&this.scene_and_maps.points_map!==undefined){
      /*const point_attribs: gs.IEntAttrib[] = this.model.findAttribs(gs.EGeomType.points) as gs.IEntAttrib[];
      for(var j=0;j<point_attribs.length;j++){
        this.point_name.push(point_attribs[j].getName());*/
        for(var i=0;i<this.scene_and_maps.points_map.size;i++){
          const points: gs.IPoint = this.model.getGeom().getPoint(i) as gs.IPoint;
          //const points_attrib: gs.IEntAttrib=points.getAttribValue(point_attribs[j]);
          const label: string = points.getLabel();
          const verts_xyz: gs.XYZ = points.getLabelCentroid();
          var attributepoint:any=[];
          if(verts_xyz!==undefined){
            attributepoint.id=label;
            attributepoint.x=verts_xyz[0];
            attributepoint.y=verts_xyz[1];
            attributepoint.z=verts_xyz[2];
            //attributepoint.name=points_attrib;
            attrubtepoints.push(attributepoint);
          }
        }
      //}
    }
    return attrubtepoints;
  }

  getvertices(){
    var attributevertix=[];
    var points=this.getpoints();
    this.vertex_name=[];
    if(this.scene_and_maps.vertices_map!==null&&this.scene_and_maps.vertices_map.size!==0&&this.scene_and_maps.vertices_map!==undefined){
      /*const vertex_attribs: gs.ITopoAttrib[] = this.model.findAttribs(gs.EGeomType.vertices) as gs.ITopoAttrib[];
      for(var n=0;n<vertex_attribs.length;n++){
        this.vertex_name.push(vertex_attribs[n].getName());*/
        for(var i =0;i<this.scene_and_maps.vertices_map.size;i++){
          const path: gs.ITopoPathData = this.scene_and_maps.vertices_map.get(i);
          const vertices: gs.IVertex = this.model.getGeom().getTopo(path) as gs.IVertex;
          //console.log(vertices);
          //const vertex_attrib: gs.ITopoAttrib=vertices.getAttribValue(vertex_attribs[0]);
          //console.log(vertex_attrib);
          //console.log(vertices.getAttribValue(vertex_attribs[0]));
          const label: string = vertices.getLabel();
          const verts_xyz: gs.XYZ = vertices.getLabelCentroid();
          var attributes:any=[];
          for(var j=0;j<points.length;j++){
            if(points[j].x===verts_xyz[0]&&points[j].y===verts_xyz[1]&&points[j].z===verts_xyz[2]){
               attributes.pointid=points[j].id;
            }
          }
          attributes.vertixlabel=label;
          attributes.path=path;
          attributevertix.push(attributes);
        }
      //}
      this.dataService.addattrvertix(attributevertix);
    }
    return attributevertix;
  }

  getedges():Array<any>{
    var attributeedge=[];
    this.edge_name=[];
    if(this.scene_and_maps.edges_map!==null&&this.scene_and_maps.edges_map.size!==0&&this.scene_and_maps.edges_map!==undefined){
      /*const edge_attribs: gs.ITopoAttrib[] = this.model.findAttribs(gs.EGeomType.edges) as gs.ITopoAttrib[];
       for(var j=0;j<edge_attribs.length;j++){
        this.edge_name.push(edge_attribs[j].getName());*/
        //console.log(this.edge_name);
        for(var i =0;i<this.scene_and_maps.edges_map.size;i++){
          const path: gs.ITopoPathData = this.scene_and_maps.edges_map.get(i);
          const edge: gs.IEdge = this.model.getGeom().getTopo(path) as gs.IEdge;
          //const edge_attrib=edge.getAttribValue(edge_attribs[j]);
          const label: string = edge.getLabel();
          //var attributes:any=[];
          //attributes.label=label;
          attributeedge.push(label);
        }
      //}
    }
    return attributeedge;
  }

  getwires():Array<any>{
    var attributewire=[];
    this.wire_name=[];
    if(this.scene_and_maps.wires_map!==null&&this.scene_and_maps.wires_map.size!==0&&this.scene_and_maps.wires_map!==undefined){
      /*const wire_attribs: gs.ITopoAttrib[] = this.model.findAttribs(gs.EGeomType.wires) as gs.ITopoAttrib[];
      for(var j=0;j<wire_attribs.length;j++){
        this.wire_name.push(wire_attribs[j].getName());*/
        for(var i =0;i<this.scene_and_maps.wires_map.size;i++){
          const path: gs.ITopoPathData = this.scene_and_maps.wires_map.get(i);
          const wire: gs.IWire = this.model.getGeom().getTopo(path) as gs.IWire;
          //var attributes:any=[];
          const label: string = wire.getLabel();
          //attributes.label=label;
          if(attributewire.indexOf(label)===-1)
            attributewire.push(label);
        }
      //}
    }
    return attributewire;
  }

  getfaces():Array<any>{
    var attributeface=[];
    this.face_name=[];
    if(this.scene_and_maps.faces_map!==null&&this.scene_and_maps.faces_map.size!==0&&this.scene_and_maps.faces_map!==undefined){
      /*const face_attribs: gs.ITopoAttrib[] = this.model.findAttribs(gs.EGeomType.faces) as gs.ITopoAttrib[];
      for(var j=0;j<face_attribs.length;j++){
      this.face_name.push(face_attribs[j].getName());*/
        for(var i =0;i<this.scene_and_maps.faces_map.size;i++){
          const path: gs.ITopoPathData = this.scene_and_maps.faces_map.get(i);
          const face: gs.IFace = this.model.getGeom().getTopo(path) as gs.IFace;
          //var attributes:any=[];
          const label: string = face.getLabel();
          //attributes.label=label;
          if(attributeface.indexOf(label)===-1){
          //attributes.name=face.getAttribValue(face_attribs[j]);
            attributeface.push(label);
          }
        }
      }
    //}
    return attributeface;
  }

  getoject():Array<any>{
    var attributeobject=[];
    this.obj_name=[];
    if(this.scene_and_maps.faces_map!==null&&this.scene_and_maps.faces_map.size!==0&&this.scene_and_maps.faces_map!==undefined){ 
      const obj_attribs: gs.IEntAttrib[] = this.model.findAttribs(gs.EGeomType.objs) as gs.IEntAttrib[];
      if(obj_attribs.length!==0){
        for(var j=0;j<obj_attribs.length;j++){
          this.obj_name.push(obj_attribs[j].getName());
        }
      }
      for(var i =0;i<this.scene_and_maps.faces_map.size;i++){
        const path: gs.ITopoPathData = this.scene_and_maps.faces_map.get(i);
        if(i===0||path.id!==this.scene_and_maps.faces_map.get(i-1).id){
          var attribute:any=[];
          const label: string = "o"+path.id;
          attribute.label=label;
          for(var j=0;j<obj_attribs.length;j++){
            var obj: gs.IObj = this.model.getGeom().getObj(path.id) as gs.IObj;
            attribute.name=obj.getAttribValue(obj_attribs[j]);
          }
          /*if(obj_attribs.length!==0){
            var obj: gs.IObj = this.model.getGeom().getObj(path.id) as gs.IObj;
            attribute.name=obj.getAttribValue(obj_attribs[j]);
          }*/
          attributeobject.push(attribute);
        }
      }
      //const obj_attribs: gs.IEntAttrib[] = this.model.findAttribs(gs.EGeomType.objs) as gs.IEntAttrib[];
      /*console.log(obj_attribs);
      if(obj_attribs.length!==0){
        for(var j=0;j<obj_attribs.length;j++){
          this.obj_name.push(obj_attribs[j].getName());
          for(var i =0;i<this.scene_and_maps.faces_map.size;i++){

          }
        }
      }*/
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
    var attributes:any=this.pointtovertix();
    var points=this.getpoints();
    for(var i=0;i<points.length;i++){
      for(var j=0;j<attributes.length;j++){
        if(points[i].id===attributes[j].pointid&&this.attribute.indexOf(points[i])===-1){
          this.attribute.push(points[i]);
        }
      }
    }
  }

  pointtovertix():any{
    var attributes:any=[];
    var vertices=this.getvertices();
    var selecting=this.dataService.getselecting();
    var char:string;
    var labels:any=[];
    if(selecting.length!==0){
      for(var i=0;i<selecting.length;i++){
        for(var j=0;j<vertices.length;j++){
          if(selecting[i]["id"]===vertices[j].pointid&&attributes.indexOf(vertices[j]) == -1){
            attributes.push(vertices[j]);
          }
          if(selecting[i]["type"]==="All edges"){
            const edge: gs.IEdge = this.model.getGeom().getTopo(selecting[i]["path"]) as gs.IEdge;
            const verts: gs.IVertex[] = edge.getVertices();
            for(var n=0;n<verts.length;n++){
              var label=verts[n].getLabel();
              if(label===vertices[j].vertixlabel&&attributes.indexOf(vertices[j]) == -1){
                attributes.push(vertices[j]);
              }
            }
          }
          if(selecting[i]["type"]==="All wires"){
            const wire: gs.IWire = this.model.getGeom().getTopo(selecting[i]["path"]) as gs.IWire;
            const verts: gs.IVertex[] = wire.getVertices();
            for(var n=0;n<verts.length;n++){
              var label=verts[n].getLabel();
              if(label===vertices[j].vertixlabel&&attributes.indexOf(vertices[j]) == -1){
                attributes.push(vertices[j]);
              }
            }
          }
          if(selecting[i]["type"]==="All faces"){
            const face: gs.IFace = this.model.getGeom().getTopo(selecting[i]["path"]) as gs.IFace;
            const verts: gs.IVertex[] = face.getVertices();
            for(var n=0;n<verts.length;n++){
              var label=verts[n].getLabel();
              if(label===vertices[j].vertixlabel&&attributes.indexOf(vertices[j]) == -1){
                attributes.push(vertices[j]);
              }
            }
          }
          if(selecting[i]["type"]==="All objs"){
            const face: gs.IFace = this.model.getGeom().getTopo(selecting[i]["path"]) as gs.IFace;
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
          if(selecting[i]["id"].indexOf(edges[j])>-1){
            this.attribute.push(edges[j]);
          }
          if(selecting[i]["type"]==="All faces"){
            //const path: gs.ITopoPathData = this.scene_and_maps.faces_map.get(selecting[i]["index"]);
            const face: gs.IFace = this.model.getGeom().getTopo(selecting[i]["path"]) as gs.IFace;
            const verts: gs.IEdge[] = face.getEdges();
            for(var n=0;n<verts.length;n++){
              //var attributes:any=[];
              var label=verts[n].getLabel();
              //attributes.label=label;
              if(label===edges[j]&&this.attribute.indexOf(edges[j]) == -1){
                this.attribute.push(edges[j]);
              }
            }
          }
          if(selecting[i]["type"]==="All objs"){
            //const path: gs.ITopoPathData = this.scene_and_maps.faces_map.get(selecting[i]["index"]);
            const face: gs.IFace = this.model.getGeom().getTopo(selecting[i]["path"]) as gs.IFace;
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
          if(selecting[i]["type"]==="All objs"){
            const face: gs.IFace = this.model.getGeom().getTopo(selecting[i]["path"]) as gs.IFace;
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

  clicktoshow(select){
    const vertices: gs.IVertex = this.model.getGeom().getTopo(select.path) as gs.IVertex;
    const label: string = vertices.getLabel();
    const verts_xyz: gs.XYZ = vertices.getLabelCentroid();
    var geometry=new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(verts_xyz[0],verts_xyz[1],verts_xyz[2]));
    var pointsmaterial=new THREE.PointsMaterial( { color:0x00ff00,size:1} );
    const points = new THREE.Points( geometry, pointsmaterial);
    points.userData.id=select.id;
    points["material"].needsUpdate=true;
    points.name="selects";
    this.scene.add(points);
    this.dataService.addTextLabel(label,verts_xyz, select.id,null,select.path);
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
          if(selecting[i]["type"]==="All objs"){
            const face: gs.IFace = this.model.getGeom().getTopo(selecting[i]["path"]) as gs.IFace;
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
          if(selecting[i]["id"]===object[j].label){
            this.attribute.push(object[j]);
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

  Onselect(datascale){
    if(this.Visible==="Points"){
      var point:any=[];
      point.label=datascale.id;
      point.id=datascale.id;
      point.path=datascale.id;
      point.type="All points";
      point.label_xyz=[datascale.x,datascale.y,datascale.z];
      var geometry=new THREE.Geometry();
      geometry.vertices.push(new THREE.Vector3(point.label_xyz[0],point.label_xyz[1],point.label_xyz[2]));
      var pointsmaterial=new THREE.PointsMaterial( { color:0x00ff00,size:1} );
      if(this.dataService.pointsize!==undefined){
          pointsmaterial.size=this.dataService.pointsize;
      }
      const points = new THREE.Points( geometry, pointsmaterial);
      points.userData.id=point.id;
      points["material"].needsUpdate=true;
      points.name="selects";
      this.scene.add(points);
      this.dataService.addclickshow(point);
    }
    if(this.Visible==="Vertices"){
      var vertice:any=[];
      const path: gs.ITopoPathData=datascale.path;
      const vertices: gs.IVertex = this.model.getGeom().getTopo(path) as gs.IVertex;
      const label: string = vertices.getLabel();
      const verts_xyz: gs.XYZ = vertices.getLabelCentroid();
      vertice.label=label;
      vertice.id=datascale.pointid;
      vertice.path=datascale.path;
      vertice.type="All points";
      vertice.label_xyz=[verts_xyz[0],verts_xyz[1],verts_xyz[2]];
      var geometry=new THREE.Geometry();
      geometry.vertices.push(new THREE.Vector3(verts_xyz[0],verts_xyz[1],verts_xyz[2]));
      var pointsmaterial=new THREE.PointsMaterial( { color:0x00ff00,size:1} );
      if(this.dataService.pointsize!==undefined){
          pointsmaterial.size=this.dataService.pointsize;
      }
      const points = new THREE.Points( geometry, pointsmaterial);
      points.userData.id=vertice.id;
      points["material"].needsUpdate=true;
      points.name="selects";
      this.scene.add(points);
      this.dataService.addclickshow(vertice);
    }
  	if(this.Visible==="Vertices"){
      var vertice:any=[];
      const path: gs.ITopoPathData=datascale.path;
      const vertices: gs.IVertex = this.model.getGeom().getTopo(path) as gs.IVertex;
      const label: string = vertices.getLabel();
      const verts_xyz: gs.XYZ = vertices.getLabelCentroid();
      vertice.label=label;
      vertice.id=datascale.pointid;
      vertice.path=datascale.path;
      vertice.type="All points";
      vertice.label_xyz=[verts_xyz[0],verts_xyz[1],verts_xyz[2]];
      var geometry=new THREE.Geometry();
      geometry.vertices.push(new THREE.Vector3(verts_xyz[0],verts_xyz[1],verts_xyz[2]));
      var pointsmaterial=new THREE.PointsMaterial( { color:0x00ff00,size:1} );
      if(this.dataService.pointsize!==undefined){
          pointsmaterial.size=this.dataService.pointsize;
      }
      const points = new THREE.Points( geometry, pointsmaterial);
      points.userData.id=vertice.id;
      points["material"].needsUpdate=true;
      points.name="selects";
      this.scene.add(points);
      this.dataService.addclickshow(vertice);
    }
    if(this.Visible === "Edges"){

    }
  }
  /*//To add text labels just provide label text, label position[x,y,z] and its id
  addTextLabel(label, label_xyz, id,index,path) {
    //console.log(document.getElementsByTagName("app-viewer")[0].children.namedItem("container"));
    //let container = this.myElement.nativeElement.children.namedItem("container");
    let container = document.getElementsByTagName("app-viewer")[0].children.namedItem("container");
    let star = this.creatStarGeometry(label_xyz);
    let textLabel=this.createTextLabel(label, star, id,index,path);
    this.starsGeometry.vertices.push( star );
    this.textlabels.push(textLabel);
    this.dataService.pushselecting(textLabel);
    container.appendChild(textLabel.element);
    console.log(container);
  }

  //To remove text labels just provide its id
  removeTextLabel(id) {
    let i=0;
    for(i=0; i<this.textlabels.length; i++) {
      if(this.textlabels[i].id==id) {
        // let container = this.myElement.nativeElement.children.namedItem("container");
        let container = document.getElementsByTagName("app-viewer")[0].children.namedItem("container");
        container.removeChild(this.textlabels[i].element);
        let index = this.starsGeometry.vertices.indexOf(this.textlabels[i].parent);
        if(index !== -1) {
          this.starsGeometry.vertices.splice(index, 1);
        }
        break;
      }
    }
    if(i<this.textlabels.length) {
      this.textlabels.splice(i, 1);
      this.dataService.spliceselecting(i, 1);
    }
  }

  creatStarGeometry(label_xyz) {
    let star = new THREE.Vector3();
    star.x = label_xyz[0];
    star.y = label_xyz[1];
    star.z = label_xyz[2];
    return star;
  }

  createTextLabel(label, star, id,index,path) {
    let div = this.createLabelDiv();
    var self=this;
    let textLabel= {
      id: id,
      index:index,
      path:path,
      element: div,
      parent: false,
      position: new THREE.Vector3(0,0,0),
      setHTML: function(html) {
        this.element.innerHTML = html;
        console.log(this.element.innerHTML);
      },
      setParent: function(threejsobj) {
        this.parent = threejsobj;
        console.log(this.parent);
      },
      updatePosition: function() {
        if(parent) {
          this.position.copy(this.parent);
          console.log(this.position);
        }
        
        var coords2d = this.get2DCoords(this.position, this.camera);
        this.element.style.left = coords2d.x + 'px';
        this.element.style.top = coords2d.y + 'px';
      },
      get2DCoords: function(position, camera) {
        var vector = position.project(camera);
        vector.x = (vector.x + 1)/2 * this.width;
        vector.y = -(vector.y - 1)/2 * this.height;
        return vector;
      }
    };
    textLabel.setHTML(label);
    textLabel.setParent(star);
    return textLabel;
  }

  createLabelDiv() {
    var div=document.createElement("div");
    div.style.color= '#00f';
    div.style.fontFamily= '"Fira Mono", Monaco, "Andale Mono", "Lucida Console", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace';
    div.style.margin='-5px 0 0 15px';
    div.style.pointerEvents='none';
    div.style.position = 'absolute';
    div.style.width = '100';
    div.style.height = '100';
    div.style.top = '-1000';
    div.style.left = '-1000';
    div.style.textShadow="0px 0px 3px white";
    div.style.color="black";
    return div;
   }*/
}