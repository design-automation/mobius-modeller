import { Injectable, ElementRef } from '@angular/core';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';

import * as THREE from 'three';
import * as gs from 'gs-json';
import * as OrbitControls from 'three-orbit-controls';


@Injectable()
export class DataService {
  
  private _OC: OrbitControls; 

  // gs-model that needs to be displayed
  private _gsModel: gs.IModel;

  // three scene 
  private _scene:  THREE.Scene;
  private _renderer: THREE.WebGLRenderer;
  private _camera: THREE.PerspectiveCamera;
  private _orbitControls: THREE.OrbitControls;

  // width and height
  // only set once the scene has been called
  private _width: number; 
  private _height: number;

  _saturation:any;
  _lightness:any;
  _alight:any;
  _hueValue:number;
  _saturationValue:number;
  _lightnessValue:number;
  _Geom:any;
  hue: number;
  saturation:number;
  lightness:number;
  scenechange:any;
  INTERSECTEDColor:any;
  selecting:any = [];
  object:any;
  axis:boolean;
  grid:boolean;
  shadow:boolean;
  frame:boolean;
  opacity:number;
  selectcheck:boolean;
  mouse:THREE.Vector2;
  raycaster:THREE.Raycaster;
  visible:string;
  sprite:THREE.Sprite[]=[];
  selectedFaces:Array<any> = [];
  scene_and_maps: {
          scene: gs.IThreeScene, 
          faces_map: Map<number, gs.ITopoPathData>, 
          wires_map: Map<number, gs.ITopoPathData>, 
          edges_map: Map<number, gs.ITopoPathData>} ;
  scenechildren:Array<any>=[];
  red:number;
  green:number;
  blue:number;


  // ---- 
  // Subscription Handling
  // 
  private subject = new Subject<any>();
  sendMessage(message?: string) {
      this.subject.next({ text: message });
  }
 
  clearMessage() {
      this.subject.next();
  }

  getMessage(): Observable<any> {
      return this.subject.asObservable();
  }


  constructor() { 

    // intializations
    // this only runs once

    let default_width: number = 1510, default_height: number = 720;

    // scene
    let scene: THREE.Scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xcccccc );
    

    // renderer
    let renderer: THREE.WebGLRenderer =  new THREE.WebGLRenderer( {antialias: true} );
    renderer.setPixelRatio( window.devicePixelRatio );


    // camera settings
    let aspect_ratio: number = this._width/this._height
    let camera = new THREE.PerspectiveCamera( 50, aspect_ratio, 0.01, 1000 );
    camera.position.y=10;
    camera.up.set(0,0,1);
    camera.lookAt( scene.position );
    camera.updateProjectionMatrix();

    // orbit controls
    let _OC = OrbitControls(THREE);
    let controls: THREE.OrbitControls = new _OC( camera, renderer.domElement );
    controls.enableKeys = false;

    // default directional lighting
    let directional_light :THREE.DirectionalLight = new THREE.DirectionalLight( 0xffffff,0.5);
    directional_light.castShadow = false; 
    directional_light.position.copy( camera.position );
    controls.addEventListener('change',function(){
      directional_light.position.copy(camera.position);
    });
    directional_light.target.position.set( 0, 0, 0 );
    
    scene.add( directional_light );

    // default ambient lighting
    let default_hue: number = 160;
    let default_saturation: number = 0;
    let default_lightness: number = 0.47;

    var hemi_light = new THREE.HemisphereLight( 0xffffff, 0.5 );
    hemi_light.color.setHSL( default_hue, default_saturation, default_saturation);
    scene.add( hemi_light );

    // var self=this;
    // self.;
    // self._controls.addEventListener( 'change',  function() {
    //   self.light.position.copy( self._camera.position );
    // } );
    // self.light.target.position.set( 0, 0, 0 );
    // this._scene.add( self.light );
    
    this._scene = scene;
    this._renderer = renderer;
    this._camera = camera; 
    this._orbitControls = controls;

    this._hueValue = default_hue; 
    this._saturationValue = default_saturation;
    this._lightnessValue = default_lightness;

    // add it to alight - what does alight do?
    this._alight = [];
    this._alight.push(hemi_light);
  }



  //
  //  Getter and Setting for gs-model
  //
  getGsModel(): gs.IModel{
    return this._gsModel; 
  }

  setGsModel(model: gs.IModel){
    this._gsModel = model;
    this.sendMessage("model_update");
  }
  updateModel():any{
    var scene_and_maps: {
          scene: gs.IThreeScene, 
          faces_map: Map<number, gs.ITopoPathData>, 
          wires_map: Map<number, gs.ITopoPathData>, 
          edges_map: Map<number, gs.ITopoPathData>}= gs.genThreeOptModelAndMaps( this._gsModel );
    return scene_and_maps;
  }


  //
  // Getter and Setter for Scene
  //
  // addScene(scene: THREE.Scene): void{
  //   console.warn("Three Scene is being reset");
  // 	this._scene = scene;
  // }

  getScene(width?: number, height?: number): THREE.Scene{
    if(width && height){
      this._width = width; 
      this._height = height;
    }

  	return this._scene;
  }

  getRenderer(): THREE.WebGLRenderer{
    this._camera.aspect = this._width / this._height;
    this._camera.updateProjectionMatrix();
    this._renderer.setSize(this._width, this._height);
    return this._renderer;
  }

  getCamera(): THREE.PerspectiveCamera{
    return this._camera;
  }

  getControls(): THREE.OrbitControls{
    return this._orbitControls;
  }


  //
  //
  //
  getalight():any{
    return this._alight;
  }

  addlightvalue(hue,saturation,lightness){
    this._hueValue=hue;
    this._saturationValue=saturation;
    this._lightnessValue=lightness;
  }


  gethue(_hue):any{
    this.hue = _hue;
  }
  getsaturation(_saturation):any{
    this.saturation = _saturation;
  }
  getlightness(_lightness):any{
    this.lightness = _lightness;
  }
  getopacity(_opacity):any{
    this.opacity = _opacity;
  }
  addbackvalue(red,green,blue){
    this.red=red;
    this.green=green;
    this.blue=blue;
  }
  getred(red):any{
    this.red=red;
  }
  getgreen(green):any{
    this.green=green;
  }
  getblue(blue):any{
    this.blue=blue;
  }

  addGeom(Geom): void{
    this._Geom = Geom;
  }

  getGeom(): any{
    return this._Geom;
  }
  addscenechange(scenechange){
    this.scenechange=scenechange;
  }
  getscenechange():any{
    return this.scenechange;
  }
  addINTERSECTEDColor(INTERSECTEDColor):void{
    if(this.INTERSECTEDColor==null){
      this.INTERSECTEDColor=INTERSECTEDColor;
    }
  }
  getINTERSECTEDColor():any{
    return this.INTERSECTEDColor
  }
  addselecting(selecting){
    if(selecting[selecting.length-1]==undefined){
      this.selecting=[];
    }
    this.sendMessage();
  }
  pushselecting(selecting){
    this.selecting.push(selecting);
    this.sendMessage();
  }
  spliceselecting(index,number){
    this.selecting.splice(index,number);
    this.sendMessage();
  }
  getselecting(){
    return this.selecting;
  }
  addgrid(grid){
    this.grid=grid;
  }
  addaxis(axis){
    this.axis=axis;
  }
  addshadow(shadow){
    this.shadow=shadow;
  }
  addframe(frame){
    this.frame=frame;
  }
  addselect(select){
    this.selectcheck=select;
  }
  getSelectingIndex(uuid):number {
   for(var i=0;i<this.selecting.length;i++){
     if(this.selecting[i].uuid==uuid){
       return i;
     }
   }
   return -1;
 }
  getFaceIndex(name):number {
   for(var i=0;i<this.selectedFaces.length;i++){
     if(this.selectedFaces[i].name==name){
       return i;
     }
   }
   return -1;
 }
 addsprite(sprite){
   this.sprite.push(sprite);
   this.sendMessage();
 }
 pushsprite(sprite){
   this.sprite=sprite;
 }

 addscenechild(scenechildren){
   this.scenechildren=scenechildren;
   this.sendMessage();
 }
 getscenechild(){
   this.sendMessage();
   return this.scenechildren;
 }

   zoomfit(){
    if(this.selecting.length===0){
      const obj=new THREE.Object3D();
      for(var i=0;i<this._scene.children.length;i++){
        if(this._scene.children[i].name!=="GridHelper"){
          obj.children.push(this._scene.children[i]);
        }
      }
      var boxHelper = new THREE.BoxHelper(obj);
      boxHelper["geometry"].computeBoundingBox();
      boxHelper["geometry"].computeBoundingSphere();
      var boundingSphere=boxHelper["geometry"].boundingSphere;
      var center = boundingSphere.center;
      var radius = boundingSphere.radius;
      var fov=this._camera.fov * ( Math.PI / 180 );
      var vec_centre_to_pos: THREE.Vector3 = new THREE.Vector3();
      vec_centre_to_pos.subVectors(this._camera.position, center);
      var tmp_vec=new THREE.Vector3( center.x+Math.abs( radius / Math.sin( fov / 2 )),
                                     center.y+Math.abs( radius / Math.sin( fov / 2 ) ),
                                     center.z+Math.abs( radius / Math.sin( fov / 2 )));
      vec_centre_to_pos.setLength(tmp_vec.length());
      var perspectiveNewPos: THREE.Vector3 = new THREE.Vector3();
      perspectiveNewPos.addVectors(center, vec_centre_to_pos);
      var newLookAt = new THREE.Vector3(center.x,center.y,center.z)
      this._camera.position.copy(perspectiveNewPos);
      this._camera.lookAt(newLookAt);
      this._camera.updateProjectionMatrix();
      this._orbitControls.target.set(newLookAt.x, newLookAt.y,newLookAt.z);
    }else{
      event.preventDefault();
      var axisX,axisY,axisZ,centerX,centerY,centerZ=0;
      var radius=0;
      for(var i=0;i<this.selecting.length;i++){
        axisX+=this.selecting[i].geometry.boundingSphere.center.x;
        axisY+=this.selecting[i].geometry.boundingSphere.center.y;
        axisZ+=this.selecting[i].geometry.boundingSphere.center.z;
        radius=Math.max(this.selecting[i].geometry.boundingSphere.radius,radius);
      }
      centerX=axisX/this._scene.children[1].children.length;
      centerY=axisY/this._scene.children[1].children.length;
      centerY=axisY/this._scene.children[1].children.length;
      var center = new THREE.Vector3(centerX,centerY,centerZ);
      var fov=this._camera.fov * ( Math.PI / 180 );
      var vec_centre_to_pos: THREE.Vector3 = new THREE.Vector3();
      vec_centre_to_pos.subVectors(this._camera.position, center);
      var tmp_vec=new THREE.Vector3(center.x+Math.abs( radius / Math.sin( fov / 2 )),
                                    center.y+Math.abs( radius / Math.sin( fov / 2 ) ),
                                    center.z+Math.abs( radius / Math.sin( fov / 2 )));
      vec_centre_to_pos.setLength(tmp_vec.length());
      var perspectiveNewPos: THREE.Vector3 = new THREE.Vector3();
      perspectiveNewPos.addVectors(center, vec_centre_to_pos);
      var newLookAt = new THREE.Vector3(center.x,center.y,center.z)
      this._camera.position.copy(perspectiveNewPos);
      this._camera.lookAt(newLookAt);
      this._camera.updateProjectionMatrix();
      this._orbitControls.target.set(newLookAt.x, newLookAt.y,newLookAt.z);
    }
  }

}
