import * as THREE from 'three';
import { Component, OnInit, Injector, ElementRef ,NgModule} from '@angular/core';
import { AngularSplitModule } from 'angular-split';
import {DataSubscriber} from "../data/DataSubscriber";
import {MatExpansionModule} from '@angular/material/expansion';
import * as gs from "gs-json";
import {ViewerComponent} from "../viewer/viewer.component";
/*import {MatTabsModule} from '@angular/material/tabs';*/

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent extends DataSubscriber implements OnInit {
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
  gridVisible:boolean;
  axisVisible:boolean;
  shadowVisible:boolean;
  frameVisible:boolean;
  pointVisible:boolean;
  _centerx:number;
  _centery:number;
  _centerz:number;
  _centersize:number;
  raycaster:THREE.Raycaster;
  _linepre:number;
  _pointsize:number;
  hue:number;
  saturation:number;
  lightness:number;
  alight:THREE.HemisphereLight;
  renderer: THREE.WebGLRenderer; 
  camera: THREE.PerspectiveCamera;

  constructor(injector: Injector, myElement: ElementRef){
  	super(injector);
    this.scene=this.dataService.getScene();
    this.renderer= this.dataService.getRenderer();
    this.camera= this.dataService.getCamera();
    this.myElement = myElement;
    this._centerx=this.dataService.centerx;
    this._centery=this.dataService.centery;
    this._centerz=this.dataService.centerz;
    this._centersize=this.dataService.centersize;
    this.raycaster=this.dataService.getraycaster();
    this._pointsize=this.dataService.pointsize;
    this.alight=this.dataService.getalight();
    this.hue=this.dataService.hue;
    this.saturation=this.dataService.saturation;
    this.lightness=this.dataService.lightness;
  }
  ngOnInit() {
    this.model= this.dataService.getGsModel(); 
    this.updateModel();
    this.gridVisible=this.dataService.grid;
    this.axisVisible=this.dataService.axis;
    this.shadowVisible=this.dataService.shadow;
    this.frameVisible=this.dataService.frame;
    this.pointVisible=this.dataService.point;
    if(this._centerx===undefined||this._centerx===0){
      this._centerx=0;
    }else{
      this._centerx=this.dataService.centerx;
    }
     if(this._centery===undefined||this._centery===0){
      this._centery=0;
    }else{
      this._centery=this.dataService.centery;
    }
    if(this._centerz===undefined||this._centerz===0){
      this._centerz=0;
    }else{
      this._centerz=this.dataService.centerz;
    }
    if(this._centersize===undefined||this._centersize===100){
      this._centersize=100;
    }else{
      this._centersize=this.dataService.centersize;
    }
    this.raycaster=this.dataService.getraycaster();
    if(this._linepre===undefined||this._linepre===0.05){
      this._linepre=0.05;
    }else{
      this._linepre=this.raycaster.linePrecision;
    }
    if(this._pointsize===undefined||this._pointsize===1){
      this._pointsize=1;
    }else{
      this._pointsize=this.dataService.pointsize;
    }
    if(this.hue === undefined||this.hue===0) {
        this.hue = 0;
    } else {
      this.hue=this.dataService.hue;
    }
    if(this.saturation === undefined||this.saturation===0.01) {
        this.saturation = 0.01;
    } else {
      this.saturation=this.dataService.saturation;
    }
    if(this.lightness == undefined||this.lightness===0.47) {
        this.lightness = 0.47;
    } else {
      this.lightness=this.dataService.lightness;
    }
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

   animate(self){

   }

  changegrid(){
    this.gridVisible = !this.gridVisible;
    if(this.gridVisible){
      var gridhelper=new THREE.GridHelper( this._centersize, this._centersize);
      gridhelper.name="GridHelper";
      var vector=new THREE.Vector3(0,1,0);
      gridhelper.lookAt(vector);
      gridhelper.position.set(this._centerx,this._centery,this._centerz);
      this.scene.add( gridhelper);
    }else{
      this.scene.remove(this.scene.getObjectByName("GridHelper"));
    }
    this.renderer.render(this.scene, this.camera);
    this.dataService.addgrid(this.gridVisible);
  }

  changepoint(){
    this.pointVisible = !this.pointVisible;
    var children:any=[];
    for(var i=0;i<this.scene.children.length;i++){
      if(this.scene.children[i].type==="Scene"){
        for(var j=0;j<this.scene.children[i].children.length;j++){
          if(this.scene.children[i].children[j].type==="Points"){
            children.push(this.scene.children[i].children[j]);
          }
        }
      }
    }
    if(this.pointVisible){
      for(var i=0;i<children.length;i++){
        children[i]["material"].transparent=false;
        children[i]["material"].opacity=1;
      }
    }else{
      for(var i=0;i<children.length;i++){
        children[i]["material"].transparent=true;
        children[i]["material"].opacity=0;
      }
    }
    this.renderer.render(this.scene, this.camera);
    this.dataService.addpoint(this.pointVisible);
  }

  changeaxis(){
    this.axisVisible = !this.axisVisible;
    if(this.axisVisible){
      var axishelper = new THREE.AxisHelper( 10 );
      axishelper.name="AxisHelper";
      this.scene.add( axishelper);
    }else{
      this.scene.remove(this.scene.getObjectByName("AxisHelper"));
    }
    this.renderer.render(this.scene, this.camera);
    this.dataService.addaxis(this.axisVisible);
  }

  changeshadow(){
    this.shadowVisible = !this.shadowVisible;
    for(var i=0;i<this.scene.children.length;i++){
      if(this.scene.children[i].type==="DirectionalLight")
      {
        if(this.shadowVisible){
          this.scene.children[i].castShadow=true;
        }
        else{
          this.scene.children[i].castShadow=false;
        }
      }
    }
    this.renderer.render(this.scene, this.camera);
    this.dataService.addshadow(this.shadowVisible);
  }

  changeframe(){
   this.frameVisible = !this.frameVisible;
   if(this.frameVisible){
    for(var i=0;i<this.scene.children.length;i++){
      if(this.scene.children[i].type==="Scene"){
        if(this.scene.children[i].children[0].type==="Mesh"){
          this.scene.children[i].children[0].visible=false;
        }
      }
    }
  }else{
    for(var i=0;i<this.scene.children.length;i++){
      if(this.scene.children[i].type==="Scene"){
        if(this.scene.children[i].children[0].type==="Mesh"){
          this.scene.children[i].children[0].visible=true;
        }
      }
    }
  }
  this.renderer.render(this.scene, this.camera);
   this.dataService.addframe(this.frameVisible);
  }

  changecenter(centerx,centery,centerz){
    if(this.gridVisible){
      var gridhelper=this.scene.getObjectByName("GridHelper");
      gridhelper.position.set(centerx,centery,centerz);
      this._centerx=centerx;
      this._centery=centery;
      this._centerz=centerz;
      this.dataService.getcenterx(centerx);
      this.dataService.getcentery(centery);
      this.dataService.getcenterz(centerz);
    }
    this.renderer.render(this.scene, this.camera);
  }

  changecentersize(centersize){
    if(this.gridVisible){
      this._centersize=centersize;
      this.scene.remove(this.scene.getObjectByName("GridHelper"));
      var gridhelper=new THREE.GridHelper(centersize,centersize);
      gridhelper.name="GridHelper";
      var vector=new THREE.Vector3(0,1,0);
      gridhelper.lookAt(vector);
      gridhelper.position.set(this._centerx,this._centery,this._centerz);
      this.scene.add(gridhelper);
      this.dataService.getcentersize(centersize);
    }
    this.renderer.render(this.scene, this.camera);
  }
  getcenter(){
    for(var i=0;i<this.scene.children.length;i++){
      if(this.scene.children[i].type==="Scene"){
        for(var j=0;j<this.scene.children[i].children.length;j++){
          if(this.scene.children[i].children[j].name==="All points"){
            var center:THREE.Vector3=this.scene.children[i].children[j]["geometry"].boundingSphere.center;
            var radius:number=this.scene.children[i].children[j]["geometry"].boundingSphere.radius;
            var max:number=Math.ceil(radius+Math.max(Math.abs(center.x),Math.abs(center.y),Math.abs(center.z)))*2;
            this._centerx=center.x;
            this._centery=center.y;
            this._centerz=center.z;
            this._centersize=max;
          }
        }
      }
    }
    this.scene.remove(this.scene.getObjectByName("GridHelper"));
    var gridhelper=new THREE.GridHelper(this._centersize,this._centersize);
    gridhelper.name="GridHelper";
    var vector=new THREE.Vector3(0,1,0);
    gridhelper.lookAt(vector);
    gridhelper.position.set(this._centerx,this._centery,this._centerz);
    this.scene.add(gridhelper);
    this.dataService.getcenterx(this._centerx);
    this.dataService.getcentery(this._centery);
    this.dataService.getcenterz(this._centerz);
    this.dataService.getcentersize(this._centersize);
    this.renderer.render(this.scene, this.camera);
  }

  changeline(lineprecision){
    this._linepre=lineprecision;
    this.raycaster=this.dataService.getraycaster();
    this.raycaster.linePrecision=lineprecision;
    this.dataService.addraycaster(this.raycaster);
    this.renderer.render(this.scene, this.camera);
  }

  changepointsize(pointsize){
    this._pointsize=pointsize;
    for(var i=0;i<this.scene.children.length;i++){
      if(this.scene.children[i].name==="sphereInter"){
        var geometry = new THREE.SphereGeometry( pointsize/3);
        this.scene.children[i]["geometry"]=geometry;
      }
      if(this.scene.children[i].name==="selects"&&this.scene.children[i].type==="Points"){
        this.scene.children[i]["material"].size=pointsize;
      }
    }
    this.renderer.render(this.scene, this.camera);
    this.dataService.getpointsize(pointsize);
  }

  changelight(_hue,_saturation,_lightness){
    this.hue=_hue;
    this.saturation=_saturation;
    this.lightness=_lightness;
    var alight=this.alight;
    this.dataService.gethue(_hue);
    this.dataService.getsaturation(_saturation);
    this.dataService.getlightness(_lightness);
    this.alight.color.setHSL( _hue, _saturation,_lightness );
    this.renderer.render(this.scene, this.camera);
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
      group.object=allgroup[i].getTopos(gs.EGeomType.objs).length;
      this.groups.push(group);
    }
    //this.renderer.render(this.scene, this.camera);
  }

  selectpoint(group){
    var grouppoints:Array<any>=group.points;
    for(var i=0;i<grouppoints.length;i++){
      var point:any=[];
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
      point.label=label;
      point.id=id;
      point.label_xyz=verts_xyz;
      point.path=id;
      point.type="All points";
      this.dataService.addclickshow(point);
      //this.addTextLabel(label,verts_xyz,label,null,null,"All points");
      //this.addTextLabel(label,verts_xyz, label,id,label,"All points");
    }
  }


}