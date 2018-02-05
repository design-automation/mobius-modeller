import * as THREE from 'three';
import { Component, OnInit, Injector, ElementRef } from '@angular/core';
import { AngularSplitModule } from 'angular-split';
import {DataSubscriber} from "../data/DataSubscriber";
import {MatExpansionModule} from '@angular/material/expansion';
import * as gs from "gs-json";
import {ViewerComponent} from "../viewer/viewer.component";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent extends ViewerComponent implements OnInit {
  myElement;
  model:gs.IModel;
  scene:THREE.Scene;
  scene_and_maps: {
          scene: gs.IThreeScene, 
          faces_map: Map<number, gs.ITopoPathData>, 
          wires_map: Map<number, gs.ITopoPathData>, 
          edges_map: Map<number, gs.ITopoPathData>,
          vertices_map: Map<number, gs.ITopoPathData>,
          points_map: Map<number, gs.ITopoPathData>} ;
  groups:Array<any>;

  constructor(injector: Injector, myElement: ElementRef){
  	super(injector, myElement);
    this.scene=this.dataService.getScene();
    this.myElement = myElement;
  }
  ngOnInit() {
    this.model= this.dataService.getGsModel(); 
    this.updateModel();
  }

  notify(message: string):void{ 
  	if(message == "model_update" && this.scene){
      this.ngOnInit();
    }
  }

  updateModel():void{
  	if(this.model!==undefined){
      try{
        this.scene_and_maps= this.dataService.getscememaps();
        this.getgroupname();
      }catch(ex){
        console.error("Error displaying model:", ex);
      }
    }
    
  }

  getgroupname(){
    this.groups=[];
    var allgroup=this.model.getAllGroups();
    for(var i=0;i<allgroup.length;i++){
      var group:any=[];
      group.parent=allgroup[i].getParentGroup().getName();
      group.props=allgroup[i].getProps();
      group.name=allgroup[i].getName();
      group.point=allgroup[i].getPoints().length;
      group.points=allgroup[i].getPoints();
      group.vertice=allgroup[i].getTopos(gs.EGeomType.vertices).length;
      group.edge=allgroup[i].getTopos(gs.EGeomType.edges).length;
      group.wire=allgroup[i].getTopos(gs.EGeomType.wires).length;
      group.face=allgroup[i].getTopos(gs.EGeomType.faces).length;
      this.groups.push(group);
    }
    //console.log(this.groups);
  }
  selectpoint(group){
    var grouppoints:Array<any>=group.points;
    for(var i=0;i<grouppoints.length;i++){
      var label: string = grouppoints[i].getLabel();
      var id:string=grouppoints[i]._id;
      var verts_xyz: gs.XYZ = grouppoints[i].getLabelCentroid();
      var geometry=new THREE.Geometry();
      geometry.vertices.push(new THREE.Vector3(verts_xyz[0],verts_xyz[1],verts_xyz[2]));
      var pointsmaterial=new THREE.PointsMaterial( { color:0x00ff00,size:1} );
      if(this.dataService.pointsize!==undefined){
          pointsmaterial.size=this.dataService.pointsize;
      }
      var points = new THREE.Points( geometry, pointsmaterial);
      points.userData.id=label;
      points["material"].needsUpdate=true;
      points.name="selects";
      this.scene.add(points);
      //this.addTextLabel(label,verts_xyz,label,null,null,"All points");
      //this.addTextLabel(label,verts_xyz, label,id,label,"All points");
    }
  }


}