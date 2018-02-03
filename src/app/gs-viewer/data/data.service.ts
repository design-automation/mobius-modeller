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
  grid:boolean=true;
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
          edges_map: Map<number, gs.ITopoPathData>,
          vertices_map: Map<number, gs.ITopoPathData>,
          points_map: Map<number, gs.ITopoPathData>} ;
  scenechildren:Array<any>=[];
  red:number;
  green:number;
  blue:number;
  center:THREE.Vector3;
  radius:number;
  scenemaps:{
          scene: gs.IThreeScene, 
          faces_map: Map<number, gs.ITopoPathData>, 
          wires_map: Map<number, gs.ITopoPathData>, 
          edges_map: Map<number, gs.ITopoPathData>,
          vertices_map: Map<number, gs.ITopoPathData>,
          points_map: Map<number, gs.ITopoPathData>} ;
  textlabels:Array<any>=[];
  attributevertix:Array<any>;
  starsGeometry:THREE.Geometry = new THREE.Geometry();
  centerx:number;
  centery:number;
  centerz:number;
  pointsize:number;

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
    if(this._gsModel!==undefined){
      this.generateSceneMaps();
    }
    else{
      // remove all children from the scene
      for(var i=0;i<this._scene.children.length;i++){
        if(this._scene.children[i].type==="Scene"){
          this._scene.remove(this._scene.children[i]);
        }
      }
    }
    this.sendMessage("model_update");
  }

  generateSceneMaps():void{
    var scene_and_maps:any/*{
          scene: gs.IThreeScene, 
          faces_map: Map<number, gs.ITopoPathData>, 
          wires_map: Map<number, gs.ITopoPathData>, 
          edges_map: Map<number, gs.ITopoPathData>,
          vertices_map: Map<number, gs.ITopoPathData>,
          points_map: Map<number, gs.ITopoPathData>}*/= gs.genThreeOptModelAndMaps( this._gsModel );
    this.scenemaps=scene_and_maps;
  }
  getscememaps():any{
    return this.scenemaps;

  }

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
  addraycaster(raycaster){
    this.raycaster=raycaster;
  }

  getraycaster():THREE.Raycaster{
    return this.raycaster;
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

  getpointsize(pointszie):void{
    this.pointsize=pointszie;
  }

  getcenterx(centerx):void{
    this.centerx=centerx;
  }
  getcentery(centery):void{
    this.centery=centery;
  }
  getcenterz(centerz):void{
    this.centerz=centerz;
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

  addattrvertix(attributevertix){
    this.attributevertix=attributevertix;
  }

  getattrvertix(){
    return this.attributevertix;
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

 //To add text labels just provide label text, label position[x,y,z] and its id
  addTextLabel(label, label_xyz, id,index,path) {
    //console.log(document.getElementsByTagName("app-viewer")[0].children.namedItem("container"));
    //let container = this.myElement.nativeElement.children.namedItem("container");
    let container = document.getElementsByTagName("app-viewer")[0].children.namedItem("container");
    let star = this.creatStarGeometry(label_xyz);
    let textLabel=this.createTextLabel(label, star, id,index,path);
    this.starsGeometry.vertices.push( star );
    this.textlabels.push(textLabel);
    this.pushselecting(textLabel);
    container.appendChild(textLabel.element);
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
      this.spliceselecting(i, 1);
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
      },
      setParent: function(threejsobj) {
        this.parent = threejsobj;
      },
      updatePosition: function() {
        if(parent) {
          this.position.copy(this.parent);
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
   }

}
