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
  alightgui: any;
  viewer:ViewerComponent;
  effectController:any;
  scene:any;
  renderer:any;
  light:any;
  alight:Array<THREE.AmbientLight>;
  gridVisible: boolean; 
  axisVisible: boolean; 
  shadowVisible: boolean; 
  hue:number;
  saturation:number;
  lightness:number;
  hueValue:number;
  saturationValue:number;
  lightnessValue:number;

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
    if(this.gridVisible){
      var gridhelper=new THREE.GridHelper( 500, 500 );
      gridhelper.name="GridHelper";
      this.scene.add( gridhelper);
    }
    else{
      this.scene.remove(this.scene.getObjectByName("GridHelper"));
    }
  }

  changeaxis(){
    this.axisVisible = !this.axisVisible;
    if(this.axisVisible){
      var axishelper = new THREE.AxisHelper( 1000 );
      axishelper.name="AxisHelper";
      this.scene.add( axishelper);
    }else{
      this.scene.remove(this.scene.getObjectByName("AxisHelper"));
    }
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

}

