import * as THREE from 'three';
import { Component, OnInit, Input } from '@angular/core';
import { AngularSplitModule } from 'angular-split';
import { ViewerComponent } from '../viewer/viewer.component';
import {DataService} from '../data/data.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  viewer:ViewerComponent;
  scene:THREE.Scene;
  alight:Array<THREE.AmbientLight>;
  gridVisible: boolean; 
  axisVisible: boolean; 
  shadowVisible: boolean; 
  hue:number;
  saturation:number;
  lightness:number;
  frameVisible:boolean;
  gridisChecked:boolean;
  opacity:number;
  red:number;
  green:number;
  blue:number;

  ngOnInit(){
    if(this.hue == undefined) {
        this.hue = 160;
    } else {
      this.hue=this.dataService.hue;
    }
    if(this.saturation == undefined) {
        this.saturation = 0;
    } else {
      this.saturation=this.dataService.saturation;
    }
    if(this.lightness == undefined) {
        this.lightness = 0.47;
    } else {
      this.lightness=this.dataService.lightness;
    }
    if(this.opacity==undefined){
      this.opacity=1;
    }else{
      this.opacity=this.dataService.opacity;
    }
    this.gridVisible=this.dataService.grid;
    this.axisVisible=this.dataService.axis;
    this.shadowVisible=this.dataService.shadow;
    this.frameVisible=this.dataService.frame;
    if(this.red==undefined){
      this.red=0.8;
    }else{
      this.red=this.dataService.red;
    }
    if(this.green==undefined){
      this.green=0.8;
    }else{
      this.green=this.dataService.green;
    }
    if(this.blue==undefined){
      this.blue=0.8;
    }else{
      this.blue=this.dataService.blue;
    }
    
  }

  constructor(private dataService: DataService){

    // avoid manipulating the scene here
    // shift to dataservice
    this.scene = this.dataService.getScene();
    this.alight=[];
    this.alight=this.dataService.getalight();
    this.hue=this.dataService.hue;
    this.saturation=this.dataService.saturation;
    this.lightness=this.dataService.lightness;
    this.opacity=this.dataService.opacity;
    this.red=this.dataService.red;
    this.green=this.dataService.green;
    this.blue=this.dataService.blue;
  }

  changegrid(){
    this.gridVisible = !this.gridVisible;
    var maxX=4;
    var maxY=4;
    /*for(var j=0;j<this.scene.children.length;j++){
      if(this.scene.children[j].type==="Scene"){
        for(var i=0;i<this.scene.children[j].children.length;i++){
          maxX=Math.max(maxX,Math.abs(this.scene.children[j].children[i].children[0]["geometry"].boundingBox.max.x));
          maxY=Math.max(maxY,Math.abs(this.scene.children[j].children[i].children[0]["geometry"].boundingBox.max.y));
        }
      }
    }*/
    
    for(var i=0;i<this.scene.children.length;i++){
      if(this.scene.children[i].type==="Scene"){
        for(var j=0;j<this.scene.children[i].children.length;j++){
          if(this.scene.children[i].children[j]["geometry"].boundingSphere.radius!==0){
            maxX=Math.max(maxX,Math.abs(this.scene.children[i].children[j]["geometry"].boundingBox.max.x));
            maxY=Math.max(maxY,Math.abs(this.scene.children[i].children[j]["geometry"].boundingBox.max.y));
            break;
          }
        }
      }
    }
    var max=Math.ceil(Math.max(maxX,maxY)*1.3)*2;
    if(this.gridVisible){
      var gridhelper=new THREE.GridHelper( max, max );
      gridhelper.name="GridHelper";
      var vector=new THREE.Vector3(0,1,0);
      gridhelper.lookAt(vector);
      this.scene.add( gridhelper);
    }
    else{
      this.scene.remove(this.scene.getObjectByName("GridHelper"));
    }
    this.dataService.addgrid(this.gridVisible);
  }

  changeaxis(){
    this.axisVisible = !this.axisVisible;
    var maxX=4;
    var maxY=4;
    var maxZ=4;
    for(var i=0;i<this.scene.children.length;i++){
      if(this.scene.children[i].type==="Scene"){
        for(var j=0;j<this.scene.children[i].children.length;j++){
          if(this.scene.children[i].children[j]["geometry"].boundingSphere.radius!==0){
            maxX=Math.max(maxX,Math.abs(this.scene.children[i].children[j]["geometry"].boundingBox.max.x));
            maxY=Math.max(maxY,Math.abs(this.scene.children[i].children[j]["geometry"].boundingBox.max.y));
            maxZ=Math.max(maxZ,Math.abs(this.scene.children[i].children[j]["geometry"].boundingBox.max.z));
            break;
          }
        }
      }
    }
    var max=Math.ceil(Math.max(maxX,maxY,maxZ)*1.2);
    if(this.axisVisible){
      var axishelper = new THREE.AxisHelper( max );
      axishelper.name="AxisHelper";
      this.scene.add( axishelper);
    }else{
      this.scene.remove(this.scene.getObjectByName("AxisHelper"));
    }
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
    this.dataService.addshadow(this.shadowVisible);
  }

  changelight(_hue,_saturation,_lightness){
    this.hue=_hue;
    this.saturation=_saturation;
    this.lightness=_lightness;
    var alight=this.alight;
    this.dataService.gethue(_hue);
    this.dataService.getsaturation(_saturation);
    this.dataService.getlightness(_lightness);
    for(var i=0;i<alight.length;i++) {
      var ambientLight=alight[i];
      ambientLight.color.setHSL( _hue, _saturation,_lightness );
    }
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
   this.dataService.addframe(this.frameVisible);
  }

  changeopa(_opacity){
   this.opacity=_opacity;
   this.dataService.getopacity(_opacity);   
   for(var i=0;i<this.scene.children.length;i++){
      if(this.scene.children[i].type==="Scene"){
        if(this.scene.children[i].children[0].type==="Mesh"){
          this.scene.children[i].children[0]["material"].opacity=_opacity;
        }
      }
    }
  }

  changeback(_red,_green,_blue){
    this.red=_red;
    this.green=_green;
    this.blue=_blue;
    this.dataService.getred(_red);
    this.dataService.getgreen(_green);
    this.dataService.getblue(_blue);
    this.scene.background=new THREE.Color(_red,_green,_blue);
  }

  setting(event){
    event.stopPropagation();
  }

}

