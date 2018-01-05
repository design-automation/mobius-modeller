import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';
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
    this.gridVisible=this.dataService.grid;
    if(this.gridVisible==true){
      document.getElementById("grid").setAttribute('checked', 'checked');
    }
    this.axisVisible=this.dataService.axis;
    if(this.axisVisible==true){
      document.getElementById("axis").setAttribute('checked', 'checked');
    }
    this.shadowVisible=this.dataService.shadow;
    if(this.shadowVisible==true){
      document.getElementById("shadow").setAttribute('checked', 'checked');
    }
  }

  constructor(private dataService: DataService){
    this.scene=this.dataService.getScene();
    this.alight=[];
    this.alight=this.dataService.getalight();
    this.hue=this.dataService.hue;
    this.saturation=this.dataService.saturation;
    this.lightness=this.dataService.lightness;
  }

  changegrid(){
    this.gridVisible = !this.gridVisible;
    var maxX=2;
    var maxY=2;
    for(var i=0;i<this.scene.children[1].children.length;i++){
      maxX=Math.max(maxX,Math.abs(this.scene.children[1].children[i].children[0]["geometry"].boundingBox.max.x));
      maxY=Math.max(maxY,Math.abs(this.scene.children[1].children[i].children[0]["geometry"].boundingBox.max.y));
    }
    var max=Math.ceil(Math.max(maxX,maxY)*1.3);
    if(this.gridVisible){
      var gridhelper=new THREE.GridHelper( max, max );
      gridhelper.name="GridHelper";
      this.scene.add( gridhelper);
    }
    else{
      this.scene.remove(this.scene.getObjectByName("GridHelper"));
    }
    this.dataService.addgrid(this.gridVisible);
  }

  changeaxis(){
    this.axisVisible = !this.axisVisible;
    var maxX=2;
    var maxY=2;
    var maxZ=2;
    for(var i=0;i<this.scene.children[1].children.length;i++){
      maxX=Math.max(maxX,Math.abs(this.scene.children[1].children[i].children[0]["geometry"].boundingBox.max.x));
      maxY=Math.max(maxY,Math.abs(this.scene.children[1].children[i].children[0]["geometry"].boundingBox.max.y));
      maxZ=Math.max(maxZ,Math.abs(this.scene.children[1].children[i].children[0]["geometry"].boundingBox.max.z));
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
  setting(event){
    event.stopPropagation();
  }

}

