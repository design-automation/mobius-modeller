import { Component, OnInit, Injector, ElementRef } from '@angular/core';
import * as THREE from 'three';
import { AngularSplitModule } from 'angular-split';
import { SettingComponent } from '../setting/setting.component';
import * as gs from "gs-json";
import {DataSubscriber} from "../data/DataSubscriber";
import {NgxPaginationModule} from 'ngx-pagination';
//import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent extends DataSubscriber implements OnInit {


  _model: gs.IModel;

  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer;
  camera: THREE.PerspectiveCamera;
  controls: THREE.OrbitControls;

  width: number;
  height: number;
  
  raycaster:THREE.Raycaster;
  mouse:THREE.Vector2;

  Visible:string="Objs";

  // check what needs to be global and refactor
  
  selecting:Array<any>;
  basicMat:THREE.MeshPhongMaterial;
  selectMat:THREE.MeshPhongMaterial;
  mousehovMat:THREE.MeshPhongMaterial;
  basiclineMat:THREE.LineBasicMaterial;
  selectlineMat:THREE.LineBasicMaterial;
  mousehovlineMat:THREE.LineBasicMaterial;
  basicwireMat:THREE.LineBasicMaterial;
  selectwireMat:THREE.LineBasicMaterial;
  mousehovwireMat:THREE.LineBasicMaterial;
  scene_and_maps: {
          scene: gs.IThreeScene, 
          faces_map: Map<number, gs.ITopoPathData>, 
          wires_map: Map<number, gs.ITopoPathData>, 
          edges_map: Map<number, gs.ITopoPathData>,
          vertices_map: Map<number, gs.ITopoPathData>,
          points_map: Map<number, gs.ITopoPathData>} ;
  
  myElement;
  
  mySprites: THREE.Sprite[] = [];
  scenechildren:Array<any>;
  textlabels: Array<any>=[];
  starsGeometry:THREE.Geometry = new THREE.Geometry();
  scenechild:THREE.Scene;
  mDownTime: number;
  mUpTime: number;
  sphere:THREE.Mesh;
  center:THREE.Vector3;
  seVisible:boolean=false;
  SelectVisible:string='Objs';
  containerx:number;
  containery:number;
  containerwidth:number;
  containerheight:number;
  FaceNo:number;
  PointsNo:number;
  VerticesNo:number;
  distance:number;
  settingVisible:boolean=false;


  constructor(injector: Injector, myElement: ElementRef) { 
    super(injector);
    this.myElement = myElement;
  }

  ngOnInit() {

    let container = this.myElement.nativeElement.children.namedItem("container");

    /// check for container
    if(!container){
      console.error("No container in Three Viewer");
      return;
    }

    ///
    let width: number = container.clientWidth;
    let height: number = container.clientHeight;

    let scene: THREE.Scene = this.dataService.getScene(width, height);
    let renderer: THREE.WebGLRenderer = this.dataService.getRenderer();
    let camera: THREE.PerspectiveCamera = this.dataService.getCamera();
    let controls: THREE.OrbitControls = this.dataService.getControls();

    container.appendChild( renderer.domElement );

    this.scene = scene;
    this.renderer = renderer;
    this.camera = camera;
    this.controls = controls;

    this.width = width;
    this.height = height;
    
    this.updateModel();

    // todo: check and refactor what is required?
    this.selecting = this.dataService.getselecting();  // todo: should this be in the data service??
    this.mouse = new THREE.Vector2();
    this.raycaster = new THREE.Raycaster();
    this.raycaster.linePrecision=0.05;
    this.scenechildren=this.dataService.getscenechild();
    this.scenechild=new THREE.Scene();

    var geometry = new THREE.SphereGeometry( 0.3 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    this.sphere = new THREE.Mesh( geometry, material );
    this.sphere.visible = false;
    this.sphere.name="sphereInter";
    this.scene.add( this.sphere );

    // render loop
    let self = this;
    function animate() {
      self.raycaster.setFromCamera(self.mouse,self.camera);
      //self.controls.target.set(self.raycaster.ray.origin.x,self.raycaster.ray.origin.y,self.raycaster.ray.origin.z);
      //console.log(self.raycaster.ray.origin);
      //self.raycaster.linePrecision=0.05;
      //self.raycaster.linePrecision=0.05;
      //self.raycaster.params.Points.threshold=0.05;
      //if(self.distance!==undefined) self.raycaster.params.Points.threshold=self.distance;
      self.scenechildren=self.dataService.getscenechild();
      var intersects = self.raycaster.intersectObjects(self.scenechildren);
      for (var i = 0; i < self.scenechildren.length; i++) {
        var currObj=self.scenechildren[i];
        if(self.dataService.getSelectingIndex(currObj.uuid)<0) {
          if ( intersects[ 0 ]!=undefined&&intersects[ 0 ].object.uuid==currObj.uuid) {
            if(self.seVisible===true){
              self.sphere.visible = true;
              self.sphere.position.copy( intersects[ 0 ].point );
            }
          } else {
            self.sphere.visible = false;
          }
        }
      }
      for(var i=0; i<self.textlabels.length; i++) {
        self.textlabels[i].updatePosition();
        //self.textlabels[i].dataServiec.updatePosition();
      }
      if(self.dataService.selecting.length!=0){
        self.updateview();
      }
      self.onResize();
      requestAnimationFrame( animate );
      self.renderer.render( self.scene, self.camera );
    };
    animate();
    for(var i=0;i<this.getchildren().length;i++){
      this.getchildren()[i]["material"].transparent=false;
    }
    //this.shownumber();
    this.dataService.addraycaster(this.raycaster);
  }
  //
  //  checks if the data service has a data and calls update function for the viewer
  //
  notify(message: string): void{
    if(message == "model_update" && this.scene){
      this.updateModel();
    }
  }


  /// clears all children from the scene
  clearScene(): void{
    /// remove children from scene
    for(var i=0; i < this.scene.children.length; i++){
      if( this.scene.children[i].type === "Scene" ){
        this.scene.remove(this.scene.children[i]);
        i=i-1;
      }
      if(this.scene.children[i].name=="selects"){
        this.scene.remove(this.scene.children[i]);
        i=i-1;
      }
    }
    for(var i=0;i<this.scene.children.length;i++){
      if(this.scene.children[i].name=="selects"){
        this.scene.remove(this.scene.children[i]);
        i=i-1;
      }
    }
    for(var i=0;i<this.textlabels.length;i++){
      this.removeTextLabel(this.textlabels[i]["id"]);
      i=i-1;
    }
  }

  onResize() :void{
    let container = this.myElement.nativeElement.children.namedItem("container");

    /// check for container
    if(!container){
      console.error("No container in Three Viewer");
      return;
    }

    ///
    let width: number = container.clientWidth;
    let height: number = container.clientHeight;
    this.width = width;//event.ClientWidth;
    this.height = height;//event.ClientHeight;
    this.renderer.setSize(this.width,this.height);
    this.camera.aspect=this.width/this.height;
    this.camera.updateProjectionMatrix();
   // }
  }


  //
  // update mode
  // todo: optimize
  // 
  updateModel(): void{

    this._model = this.dataService.getGsModel(); 

    if( !this._model || !this.scene ){
      console.warn("Model or Scene not defined.");
      return;
    }

    try{
      //this.scene_and_maps= gs.genThreeOptModelAndMaps( this._model );
      this.scene_and_maps= this.dataService.getscememaps();

      const scene_data = this.scene_and_maps.scene;
      //[three_mode, egde_map, tri_map] = genThreeModelandMaps()
      //[three_mode, label_data] = gs.getThreeWire(labels)
      //gs.getThreeFace(label)
      //gs.getThreeObj

      this.clearScene();


      let loader = new THREE.ObjectLoader();

      // loading data
      let objectData = loader.parse( scene_data );
      
      this.seVisible=false;
      // preprocessing
      if( objectData.children!==undefined){
        var radius=0;
        for(var i=0;i< objectData.children.length;i++){
          let chd = objectData.children[i];
          chd["material"].needsUpdate=true;
          chd["material"].transparent=true;
          chd["material"].blending=1;
          if( chd.name==="All faces"||chd.name==="All wires"||chd.name==="All edges"||chd.name==="All vertices"||
            chd.name==="Other lines"||chd.name==="All points"){
              chd["material"].transparent=false;
              chd["geometry"].computeVertexNormals();
              chd["geometry"].computeBoundingBox();
              chd["geometry"].computeBoundingSphere();
              if(chd.name==="All edges"){
                this.basicMat=chd["material"].color;
              }else if(chd.name==="Other lines"){
                this.basicMat=chd["material"].color;
              }
          }
          if(chd["geometry"]!=undefined&&chd["geometry"].boundingSphere.radius!==null){
            if(chd["geometry"].boundingSphere.radius>radius){
              radius=chd["geometry"].boundingSphere.radius;
              this.center=chd["geometry"].boundingSphere.center;
            }
          }
        }
      }

      // setting controls
      this.controls.target.set(this.center.x,this.center.y,this.center.z);
      this.controls.update();
      
      // adding the object to the scene
      this.scene.add(objectData);      
      // add the grid based on size of the object
      this.addgrid();
    }
    catch(ex){
      console.error("Error displaying model:", ex);
    }
  }

  getMaterial(name: string): THREE.SpriteMaterial{
    var canvas = document.createElement('canvas');
    canvas.width = 256; 
    canvas.height = 256;
    var context = canvas.getContext('2d');
    context.textAlign = "center";
    context.fillText( name , canvas.width/2, canvas.height/2);
    context.font ="Bold  100px sans-serif";
    var texture = new THREE.Texture(canvas) 
    texture.needsUpdate = true;
    var spriteMaterial = new THREE.SpriteMaterial( { map: texture, color: 0xffffff } );
    return spriteMaterial;
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

  /*closestpoint():number{
    var distance:number=0
    for(var i=0;i<this._model.getGeom().getAllPoints().length-1;i++){
      for(var j=i+1;j<this._model.getGeom().getAllPoints().length;j++){
        var dx=this._model.getGeom().getAllPoints()[i].getPosition()[0]-this._model.getGeom().getAllPoints()[j].getPosition()[0];
        var dy=this._model.getGeom().getAllPoints()[i].getPosition()[1]-this._model.getGeom().getAllPoints()[j].getPosition()[1];
        var dz=this._model.getGeom().getAllPoints()[i].getPosition()[2]-this._model.getGeom().getAllPoints()[j].getPosition()[2];
        if(distance<Math.sqrt( dx * dx + dy * dy + dz * dz )){
          distance=Math.sqrt( dx * dx + dy * dy + dz * dz );
        }
      }
    }
    distance=Math.round(distance)/50;
    return distance;
  }*/

  select(seVisible){
    event.stopPropagation();
    this.seVisible=!this.seVisible;
    if(this.seVisible) {
      if(this.SelectVisible==="Objs") this.objectselect(this.SelectVisible); 
      if(this.SelectVisible==="Faces") this.faceselect(this.SelectVisible); 
      if(this.SelectVisible==="Edges") this.edgeselect(this.SelectVisible); 
      if(this.SelectVisible==="Vertices") this.verticeselect(this.SelectVisible); 
      if(this.SelectVisible==="Points") this.pointselect(this.SelectVisible); 
      for(var i=0;i<this.getchildren().length;i++){
        this.getchildren()[i]["material"].transparent=true;
      }
    }else{
      for(var i=0;i<this.getchildren().length;i++){
        this.getchildren()[i]["material"].transparent=false;
        if(this.getchildren()[i].name=="All edges"){
          this.getchildren()[i]["material"].color=this.basicMat;
        }else if(this.getchildren()[i].name=="Other lines"){
          this.getchildren()[i]["material"].color=this.basicMat;
        }
      }
    }
    
  }

  objectselect(SelectVisible){
    event.stopPropagation();
    this.SelectVisible="Objs";
    this.dataService.visible="Objs";
    document.getElementById("object").style.color=null;
    document.getElementById("face").style.color=null;
    document.getElementById("wire").style.color=null;
    document.getElementById("edge").style.color=null;
    document.getElementById("vertice").style.color=null;
    var scenechildren=[];
    var children=this.getchildren();
    var objsvisibel:boolean=true;
    for(var i=0;i<children.length;i++){
      if(children[i].name==="All objs"||children[i].name==="All faces"){
        if(children[i]["geometry"].attributes.position.array.length!==0){
        children[i]["material"].opacity=0.3;
        children[i].name="All objs";
        scenechildren.push(children[i]);
        }else{
          objsvisibel=false;
        }
      }
      if(children[i].name==="All wires") {
        if(objsvisibel===true){
        children[i]["material"].opacity=0;
        }else{
          children[i]["material"].opacity=0.6;
          scenechildren.push(children[i]);
        }
      }
      if(children[i].name==="All edges"||children[i].name==="Other lines") {children[i]["material"].opacity=0;children[i]["material"].color=this.basicMat;}
      if(children[i].name==="All vertices") children[i]["material"].opacity=0;
    }
    this.dataService.addscenechild(scenechildren);
  }

  faceselect(SelectVisible){
    event.stopPropagation();
    this.SelectVisible="Faces";
    this.dataService.visible="Faces";
    document.getElementById("object").style.color="grey";
    document.getElementById("face").style.color=null;
    document.getElementById("wire").style.color=null;
    document.getElementById("edge").style.color=null;
    document.getElementById("vertice").style.color=null;
    var scenechildren=[];
    var children=this.getchildren();
    for(var i=0;i<children.length;i++){
      if(children[i].name==="All wires") children[i]["material"].opacity=0.1;
      if(children[i].name==="All edges"||children[i].name==="Other lines") {children[i]["material"].opacity=0.1;children[i]["material"].color=this.basicMat;}
      if(children[i].name==="All vertices") children[i]["material"].opacity=0.1;
      if(children[i].name==="All objs"||children[i].name==="All faces"){
        children[i]["material"].opacity=0.3;
        children[i].name="All faces";
        scenechildren.push(children[i]);
      }
    }
    this.dataService.addscenechild(scenechildren);
  }

  wireselect(SelectVisible){
    event.stopPropagation();
    this.SelectVisible="Wires";
    document.getElementById("object").style.color="grey";
    document.getElementById("face").style.color="grey";
    document.getElementById("wire").style.color=null;
    document.getElementById("edge").style.color=null;
    document.getElementById("vertice").style.color=null;
    var scenechildren=[];
    var children=this.getchildren();
    for(var i=0;i<children.length;i++){
      if(children[i].name==="All objs"||children[i].name==="All faces") children[i]["material"].opacity=0.1;
      if(children[i].name==="All edges"||children[i].name==="Other lines") {children[i]["material"].opacity=0.1;children[i]["material"].color=this.basicMat;}
      if(children[i].name==="All vertices") children[i]["material"].opacity=0.1;
      if(children[i].name==="All wires"){
        children[i]["material"].opacity=0.6;
        scenechildren.push(children[i]);
      }
    }
    this.dataService.addscenechild(scenechildren);
  }

  edgeselect(SelectVisible){
    event.stopPropagation();
    this.SelectVisible="Edges";
    document.getElementById("object").style.color="grey";
    document.getElementById("face").style.color="grey";
    document.getElementById("wire").style.color="grey";
    document.getElementById("edge").style.color=null;
    document.getElementById("vertice").style.color=null;
    var scenechildren=[];
    var children=this.getchildren();
    var edgevisible:boolean=true;
    for(var i=0;i<children.length;i++){
      children[i]["material"].transparent=true;
      if(children[i].name==="All edges"||children[i].name==="Other lines"){
        if(children[i].name==="All edges"){
          if(children[i]["geometry"].attributes.position.array.length!==0){
            children[i]["material"].opacity=0.3;
            children[i]["material"].color=new THREE.Color(255,255,0);
            scenechildren.push(children[i]);
          }else{
            edgevisible=false;
          }
        }else{
          if(children[i]["geometry"].attributes.position.array.length!==0){
            children[i]["material"].opacity=0.3;
            children[i]["material"].color=new THREE.Color(255,255,0);
            scenechildren.push(children[i]);
          }
        }
      }
      if(children[i].name==="All objs"||children[i].name==="All faces") children[i]["material"].opacity=0.1;
      if(children[i].name==="All wires") children[i]["material"].opacity=0.1;
      if(children[i].name==="All vertices") children[i]["material"].opacity=0.1;

      
    }
    this.dataService.addscenechild(scenechildren);
  }

  verticeselect(SelectVisible){
    event.stopPropagation();
    this.SelectVisible="Vertices";
    document.getElementById("object").style.color="grey";
    document.getElementById("face").style.color="grey";
    document.getElementById("wire").style.color="grey";
    document.getElementById("edge").style.color="grey";
    document.getElementById("vertice").style.color=null;
    var scenechildren=[];
    var children=this.getchildren();
    for(var i=0;i<children.length;i++){
      if(children[i].name==="All objs"||children[i].name==="All faces") children[i]["material"].opacity=0.1;
      if(children[i].name==="All wires") children[i]["material"].opacity=0.1;
      if(children[i].name==="All edges"||children[i].name==="Other lines") {children[i]["material"].opacity=0.1;children[i]["material"].color=this.basicMat;}
      if(children[i].name==="All vertices"){
        children[i]["material"].opacity=1;
        //scenechildren.push(children[i]);
      }
      if(children[i].name==="All points"){
        scenechildren.push(children[i]);
      }
    }
    this.dataService.addscenechild(scenechildren);
  }

  pointselect(SelectVisible){
    event.stopPropagation();
    this.verticeselect("Vertices");
    this.SelectVisible="Points";
  }

  //
  //  events
  //
  
  mousedown($event): void{
      this.mDownTime = (new Date()).getTime();
  }

  mouseup($event): void{
     this.mUpTime = (new Date()).getTime();
  }

  onDocumentMouseMove(event) {
    this.mouse.x = ( event.offsetX / this.width) * 2 - 1;
    this.mouse.y =-( event.offsetY / this.height ) * 2 + 1;
  }


  addgrid(){
    /*var max=8;
    var center=new THREE.Vector3(0,0,0);
    var radius:number=0*/
    for(var i=0;i<this.scene.children.length;i++){
      /*if(this.scene.children[i].type==="Scene"){
        for(var j=0;j<this.scene.children[i].children.length;j++){
          if(this.scene.children[i].children[j]["geometry"].boundingSphere.radius>radius){
            center=this.scene.children[i].children[j]["geometry"].boundingSphere.center;
            radius=this.scene.children[i].children[j]["geometry"].boundingSphere.radius;
            max=Math.ceil(radius+Math.max(Math.abs(center.x),Math.abs(center.y),Math.abs(center.z)))*2;
            break;
          }
        }
      }*/
      if(this.scene.children[i].name==="GridHelper") {
            this.scene.remove(this.scene.children[i]);
            i=i-1;
      }
    }

    // todo: change grid -> grid_value
    if(this.dataService.grid){
      var gridhelper=new THREE.GridHelper( 100, 100);
      gridhelper.name="GridHelper";
      var vector=new THREE.Vector3(0,1,0);
      gridhelper.lookAt(vector);
      gridhelper.position.set(0,0,0);
      this.scene.add( gridhelper);
      this.dataService.centerx=0;
      this.dataService.centery=0;
      this.dataService.centerz=0;
    }
  }


  /// selects object from three.js scene


  onDocumentMouseDown(event){
    var threshold: number;
    if(this.seVisible===true) {
      threshold= 100;
    }else{
      threshold= 0.1;
    }
    if( Math.abs(this.mDownTime - this.mUpTime) > threshold ){
        this.mDownTime = 0;
        this.mUpTime = 0;
        return;
    }
    var selectedObj, intersects;
    var select:boolean=false;
    this.scenechildren=this.dataService.getscenechild();
    this.raycaster.setFromCamera(this.mouse,this.camera);
    //this.raycaster.linePrecision = 0.05;
    //this.raycaster.linePrecision = 0.5;
    //this.raycaster.params.Points.threshold=0.05;
    //this.raycaster.params.Points.threshold=this.distance;
    intersects = this.raycaster.intersectObjects(this.scenechildren);
    if ( intersects.length > 0 ) {
      selectedObj=intersects[ 0 ].object;
      if(this.scenechildren[0].name === "All objs"){
        const index:number=Math.floor(intersects[ 0 ].faceIndex/2);
        const path: gs.ITopoPathData = this.scene_and_maps.faces_map.get(index);
        const face: gs.IFace = this._model.getGeom().getTopo(path) as gs.IFace;
        const label: string = "o"+path.id;
        const label_xyz: gs.XYZ = face.getLabelCentroid();
        const faces: gs.IFace[]= face.getObj().getFaces();
        if(this.textlabels.length===0) {
          for(var n=0;n<faces.length;n++){
            var verts: gs.IVertex[] = faces[n].getVertices();
            var verts_xyz: gs.XYZ[] = verts.map((v) => v.getPoint().getPosition());
            var geometry=new THREE.Geometry();
            for(var i=0;i<verts_xyz.length;i++){
              geometry.vertices.push(new THREE.Vector3(verts_xyz[i][0],verts_xyz[i][1],verts_xyz[i][2]));
            }
            geometry.faces.push(new THREE.Face3(0,2,1));
            geometry.faces.push(new THREE.Face3(0,3,2));
            var mesh=new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color:0x00ff00,side:THREE.DoubleSide} ));
            mesh["geometry"].computeVertexNormals();
            mesh.userData.id=label;
            mesh.name="selects";
            this.scene.add(mesh);
           }
           this.addTextLabel(label,label_xyz, label,index,path,"All objs");
        }else{
          for(var j=0;j<this.scene.children.length;j++){
            if(label===this.scene.children[j].userData.id){
              select=true;
              this.scene.remove(this.scene.children[j]);
              j=j-1;
            }
          }
          for(var j=0;j<this.textlabels.length;j++){
            if(label===this.textlabels[j]["id"]){
              select=true;
              this.removeTextLabel(this.textlabels[j]["id"]);
              j=j-1;
            }
          }
          if(select==false){
            for(var n=0;n<faces.length;n++){
              var verts: gs.IVertex[] = faces[n].getVertices();
              var verts_xyz: gs.XYZ[] = verts.map((v) => v.getPoint().getPosition());
              var geometry=new THREE.Geometry();
              for(var i=0;i<verts_xyz.length;i++){
                geometry.vertices.push(new THREE.Vector3(verts_xyz[i][0],verts_xyz[i][1],verts_xyz[i][2]));
              }
              geometry.faces.push(new THREE.Face3(0,2,1));
              geometry.faces.push(new THREE.Face3(0,3,2));
              var mesh=new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color:0x00ff00,side:THREE.DoubleSide} ));
              mesh.userData.id=label;
              mesh["geometry"].computeVertexNormals();
              mesh.name="selects";
              this.scene.add(mesh);
            }
            this.addTextLabel(label,label_xyz, label,index,path,"All objs");
          }
        }

      }

      if(this.scenechildren[0].name === "All faces"){
        const index:number=Math.floor(intersects[ 0 ].faceIndex/2);
        const path: gs.ITopoPathData = this.scene_and_maps.faces_map.get(index);
        const face: gs.IFace = this._model.getGeom().getTopo(path) as gs.IFace;
        const label: string = face.getLabel();
        const label_xyz: gs.XYZ = face.getLabelCentroid();
        const verts: gs.IVertex[] = face.getVertices();
        const verts_xyz: gs.XYZ[] = verts.map((v) => v.getPoint().getPosition());
        if(this.textlabels.length===0) {
          var geometry=new THREE.Geometry();
          for(var i=0;i<verts_xyz.length;i++){
            geometry.vertices.push(new THREE.Vector3(verts_xyz[i][0],verts_xyz[i][1],verts_xyz[i][2]));
          }
          geometry.faces.push(new THREE.Face3(0,2,1));
          geometry.faces.push(new THREE.Face3(0,3,2));
          var mesh=new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color:0x00ff00,side:THREE.DoubleSide} ));
          mesh.userData.id=label;
          mesh["geometry"].computeVertexNormals();
          mesh.name="selects";
          this.scene.add(mesh);
          this.addTextLabel(label,label_xyz, label,index,path, "All faces");
        }else{
          for(var j=0;j<this.scene.children.length;j++){

            if(label===this.scene.children[j].userData.id){
              select=true;
              this.scene.remove(this.scene.children[j]);
            }
          }
          for(var j=0;j<this.textlabels.length;j++){
            if(label===this.textlabels[j]["id"]){
              select=true;
              this.removeTextLabel(this.textlabels[j]["id"]);
            }
          }
          if(select==false){
            var geometry=new THREE.Geometry();
            for(var i=0;i<verts_xyz.length;i++){
              geometry.vertices.push(new THREE.Vector3(verts_xyz[i][0],verts_xyz[i][1],verts_xyz[i][2]));
            }
            geometry.faces.push(new THREE.Face3(0,2,1));
            geometry.faces.push(new THREE.Face3(0,3,2));
            var mesh=new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color:0x00ff00,side:THREE.DoubleSide} ));
            mesh.userData.id=label;
            mesh["geometry"].computeVertexNormals();
            mesh.name="selects";
            this.scene.add(mesh);
            this.addTextLabel(label,label_xyz,label,index,path, "All faces");
          }
        }
      }
      if(this.scenechildren[0].name=="All wires"){
        const index:number=Math.floor(intersects[ 0 ].index/2);
        const path: gs.ITopoPathData = this.scene_and_maps.wires_map.get(index);
        const wire: gs.IWire = this._model.getGeom().getTopo(path) as gs.IWire;
        const label: string = wire.getLabel();
        const label_xyz: gs.XYZ = wire.getLabelCentroid();
        const verts: gs.IVertex[] = wire.getVertices();
        const verts_xyz: gs.XYZ[] = verts.map((v) => v.getPoint().getPosition());
        if (wire.isClosed()) {verts_xyz.push(verts_xyz[0]);}
        if(this.textlabels.length===0) {
          var geometry=new THREE.Geometry();
          for(var i=0;i<verts_xyz.length;i++){
            geometry.vertices.push(new THREE.Vector3(verts_xyz[i][0],verts_xyz[i][1],verts_xyz[i][2]));
          }
          var material=new THREE.LineBasicMaterial( { color:0x00ff00,side:THREE.DoubleSide} );
          const line = new THREE.Line( geometry, material);
          line.userData.id=label;
          line["material"].needsUpdate=true;
          line.name="selects";
          this.scene.add(line);
          this.addTextLabel(label,label_xyz, label,index,path,"All wires");
        }else{
          for(var j=0;j<this.scene.children.length;j++){
            if(label===this.scene.children[j].userData.id){
              select=true;
              this.scene.remove(this.scene.children[j]);
            }
          }
          for(var j=0;j<this.textlabels.length;j++){
            if(label===this.textlabels[j]["id"]){
              select=true;
              this.removeTextLabel(this.textlabels[j]["id"]);
            }
          }
          if(select==false){
            var geometry=new THREE.Geometry();
            for(var i=0;i<verts_xyz.length;i++){
              geometry.vertices.push(new THREE.Vector3(verts_xyz[i][0],verts_xyz[i][1],verts_xyz[i][2]));
            }
            var material=new THREE.LineBasicMaterial( { color:0x00ff00,side:THREE.DoubleSide} );
            const line = new THREE.Line( geometry, material);
            line.userData.id=label;
            line["material"].needsUpdate=true;
            line.name="selects";
            this.scene.add(line);
            this.addTextLabel(label,label_xyz, label,index,path,"All wires");
          }
        }
      }
      if(this.scenechildren[0].name=="All edges"){
        var label:string="";
        var index:number=Math.floor(intersects[ 0 ].index/2);
        if(this.scene_and_maps.edges_map!==null&&(index<this.scene_and_maps.edges_map.size||index===this.scene_and_maps.edges_map.size)) {
          var path: gs.ITopoPathData = this.scene_and_maps.edges_map.get(index);
          var edge: gs.IEdge = this._model.getGeom().getTopo(path) as gs.IEdge;
          var id: string = edge.getLabel();
          label=id;
          for(var i=1;i<intersects.length;i++){
            if(intersects[0].distance===intersects[i].distance){
              index=Math.floor(intersects[ i ].index/2);
              path = this.scene_and_maps.edges_map.get(index);
              edge= this._model.getGeom().getTopo(path) as gs.IEdge;
              id=edge.getLabel();
              if(label!==id) label=label+"<br/>"+id;
            }
          }
          const label_xyz: gs.XYZ = edge.getLabelCentroid();
          const verts: gs.IVertex[] = edge.getVertices();
          const verts_xyz: gs.XYZ[] = verts.map((v) => v.getPoint().getPosition());
          if(this.textlabels.length===0) {
            var geometry=new THREE.Geometry();
            for(var i=0;i<verts_xyz.length;i++){
              geometry.vertices.push(new THREE.Vector3(verts_xyz[i][0],verts_xyz[i][1],verts_xyz[i][2]));
            }
            var material=new THREE.LineBasicMaterial( { color:0x00ff00,side:THREE.DoubleSide} );
            const line = new THREE.Line( geometry, material);
            line.userData.id=label;
            line["material"].needsUpdate=true;
            line.name="selects";
            this.scene.add(line);
            this.addTextLabel(label,label_xyz, label,index,path,"All edges");
          }else{
            for(var j=0;j<this.scene.children.length;j++){
              if(label===this.scene.children[j].userData.id){
                select=true;
                this.scene.remove(this.scene.children[j]);
              }
            }
            for(var j=0;j<this.textlabels.length;j++){
              if(label===this.textlabels[j]["id"]){
                select=true;
                this.removeTextLabel(this.textlabels[j]["id"]);
              }
            }
            if(select==false){
              var geometry=new THREE.Geometry();
              for(var i=0;i<verts_xyz.length;i++){
                geometry.vertices.push(new THREE.Vector3(verts_xyz[i][0],verts_xyz[i][1],verts_xyz[i][2]));
              }
              var material= new THREE.LineBasicMaterial( { color:0x00ff00,side:THREE.DoubleSide} );
              const line = new THREE.Line( geometry, material );
              line.userData.id=label;
              line.name="selects";
              this.scene.add(line);
              this.addTextLabel(label,label_xyz, label,index,path,"All edges");
            }
          }
        }
      }
      else if(this.scenechildren[0].name=="Other lines"){
        var label:string="";
        var index:number=Math.floor(intersects[ 0 ].index/2);
        if(this.scene_and_maps.edges_map!==null&&(index<this.scene_and_maps.edges_map.size||index===this.scene_and_maps.edges_map.size)){
          var path: gs.ITopoPathData = this.scene_and_maps.edges_map.get(index);
          var edge: gs.IEdge = this._model.getGeom().getTopo(path) as gs.IEdge;
          var id: string = edge.getLabel();
          label=id;
          for(var i=1;i<intersects.length;i++){
            if(intersects[0].distance===intersects[i].distance){
              index=Math.floor(intersects[ i ].index/2);
              path = this.scene_and_maps.edges_map.get(index);
              edge= this._model.getGeom().getTopo(path) as gs.IEdge;
              id=edge.getLabel();
              if(label!==id) label=label+"<br/>"+id;
            }
          }
          const label_xyz: gs.XYZ = edge.getLabelCentroid();
          const verts: gs.IVertex[] = edge.getVertices();
          const verts_xyz: gs.XYZ[] = verts.map((v) => v.getPoint().getPosition());
          if(this.textlabels.length===0) {
            var geometry=new THREE.Geometry();
            for(var i=0;i<verts_xyz.length;i++){
              geometry.vertices.push(new THREE.Vector3(verts_xyz[i][0],verts_xyz[i][1],verts_xyz[i][2]));
            }
            var material=new THREE.LineBasicMaterial( { color:0x00ff00,side:THREE.DoubleSide} );
            const line = new THREE.Line( geometry, material);
            line.userData.id=label;
            line["material"].needsUpdate=true;
            line.name="selects";
            this.scene.add(line);
            this.addTextLabel(label,label_xyz, label,index,path,"Other lines");
          }else{
            for(var j=0;j<this.scene.children.length;j++){
              if(label===this.scene.children[j].userData.id){
                select=true;
                this.scene.remove(this.scene.children[j]);
              }
            }
            for(var j=0;j<this.textlabels.length;j++){
              if(label===this.textlabels[j]["id"]){
                select=true;
                this.removeTextLabel(this.textlabels[j]["id"]);
              }
            }
            if(select==false){
              var geometry=new THREE.Geometry();
              for(var i=0;i<verts_xyz.length;i++){
                geometry.vertices.push(new THREE.Vector3(verts_xyz[i][0],verts_xyz[i][1],verts_xyz[i][2]));
              }
              var material= new THREE.LineBasicMaterial( { color:0x00ff00,side:THREE.DoubleSide} );
              const line = new THREE.Line( geometry, material );
              line.userData.id=label;
              line.name="selects";
              this.scene.add(line);
              this.addTextLabel(label,label_xyz, label,index,path,"Other lines");
            }
          }
        }
      }

      if(this.scenechildren[0].name === "All points"){
        var distance:number=intersects[ 0 ].distanceToRay;
        var index:number=intersects[ 0 ].index;
        for(var i=1;i<intersects.length;i++){
          if(distance>intersects[ i ].distanceToRay){
            distance=intersects[ i ].distanceToRay;
            index=intersects[ i ].index;
          }
        }
        var attributevertix=this.dataService.getattrvertix();
        var id:string=this._model.getGeom().getAllPoints()[index].getLabel();
        var label:string="";
        if(this.SelectVisible=="Points"){
          label=id;
          for(var i=1;i<intersects.length;i++){
            if(intersects[0].distance===intersects[i].distance){
              var index:number=intersects[ i ].index;
              var attributevertix=this.dataService.getattrvertix();
              var id:string=this._model.getGeom().getAllPoints()[index].getLabel();
              if(label!==id) label=label+"<br/>"+id;
            }
          }
        }else{
          for(var i=0;i<attributevertix.length;i++){
            if(id===attributevertix[i].pointid){
              var str:string=attributevertix[i].vertixlabel;
              if(label==="") label=str;
              else {if(label!==id) label=label+"<br/>"+str;}
            }
          }
        }
        const verts_xyz: gs.XYZ = this._model.getGeom().getAllPoints()[index].getPosition();//vertices.getPoint().getPosition();
        if(this.textlabels.length===0&&label!=="") {
          var geometry=new THREE.Geometry();
          geometry.vertices.push(new THREE.Vector3(verts_xyz[0],verts_xyz[1],verts_xyz[2]));
          var pointsmaterial=new THREE.PointsMaterial( { color:0x00ff00,size:1} );
          if(this.dataService.pointsize!==undefined){
              pointsmaterial.size=this.dataService.pointsize;
          }
          const points = new THREE.Points( geometry, pointsmaterial);
          points.userData.id=id;
          points["material"].needsUpdate=true;
          points.name="selects";
          this.scene.add(points);
          this.addTextLabel(label,verts_xyz, id,index,id,"All points");
        }else{
          for(var j=0;j<this.scene.children.length;j++){
            if(id===this.scene.children[j].userData.id){
              select=true;
              this.scene.remove(this.scene.children[j]);
            }
          }
          for(var j=0;j<this.textlabels.length;j++){
              if(id===this.textlabels[j]["id"]){
                select=true;
                this.removeTextLabel(this.textlabels[j]["id"]);
              }
          }
          if(select==false&&label!==""){
            var geometry=new THREE.Geometry();
            geometry.vertices.push(new THREE.Vector3(verts_xyz[0],verts_xyz[1],verts_xyz[2]));
            var pointsmaterial=new THREE.PointsMaterial( { color:0x00ff00,size:1} );
            if(this.dataService.pointsize!==undefined){
              pointsmaterial.size=this.dataService.pointsize;
            }
            const points = new THREE.Points( geometry, pointsmaterial);
            points.userData.id=id;
            points["material"].needsUpdate=true;
            points.name="selects";
            this.scene.add(points);
            this.addTextLabel(label,verts_xyz, id,index,id,"All points");
          }
        }

      }
      
    } else {
      for(var i=0;i<this.dataService.sprite.length;i++){
        this.dataService.sprite[i].visible=false;
      }
      for(var i=0;i<this.scene.children.length;i++){
        if(this.scene.children[i].name=="selects"){
          this.scene.remove(this.scene.children[i]);
          i=i-1;
        }
      }
      for(var i=0;i<this.textlabels.length;i++){
        this.removeTextLabel(this.textlabels[i]["id"]);
        i=i-1;
      }
    }

  }

  updateview(){
    this.Visible=this.dataService.visible;
    var intersects = this.raycaster.intersectObjects(this.scenechildren);
    if ( intersects.length > 0 ) {
      if(this.dataService.selecting.length!=0){
        for(var i=0;i<this.mySprites.length;i++){
          if(this.mySprites[i].parent.name===this.Visible){
            let spr: THREE.Sprite =this.mySprites[i];
            if(Math.abs(intersects[0].point.x-this.mySprites[i].position.x)<0.05
              &&Math.abs(intersects[0].point.y-this.mySprites[i].position.y)<0.05
              &&Math.abs(intersects[0].point.z-this.mySprites[i].position.z)<0.05){
              //let spr: THREE.Sprite =this.mySprites[i];
              spr.visible = true; 
            }else{
              //let spr: THREE.Sprite =this.mySprites[i];
              spr.visible = false; 
            }
          }
        }
      }
    }/*else{
      this.Visible=this.dataService.visible;
      for(var i=0;i<this.mySprites.length;i++){
        if(this.mySprites[i].parent.name===this.Visible){
          let spr: THREE.Sprite =this.mySprites[i];
          spr.visible = false; 
        }
      }
    }*/
    for(var i=0;i<this.dataService.sprite.length;i++){
      let spr: THREE.Sprite =this.dataService.sprite[i];
      spr.visible = true;
    }
  }

  //To add text labels just provide label text, label position[x,y,z] and its id
  addTextLabel(label, label_xyz, id,index,path,type) {
    //let container = this.myElement.nativeElement.children.namedItem("container");
    let container=document.getElementsByTagName("app-viewer")[0].children.namedItem("container");
    let star = this.creatStarGeometry(label_xyz);
    let textLabel=this.createTextLabel(label, star, id,index,path,type);
    this.starsGeometry.vertices.push( star );
    this.textlabels.push(textLabel);
    this.dataService.pushselecting(textLabel);
    container.appendChild(textLabel.element);
  }

  //To remove text labels just provide its id
  removeTextLabel(id) {
    let i=0;
    for(i=0; i<this.textlabels.length; i++) {
      if(this.textlabels[i].id==id) {
        let container = this.myElement.nativeElement.children.namedItem("container");
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

  createTextLabel(label, star, id,index,path,type) {
    let div = this.createLabelDiv();
    var self=this;
    let textLabel= {
      id: id,
      index:index,
      path:path,
      element: div,
      parent: false,
      type:type,
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
        
        var coords2d = this.get2DCoords(this.position, self.camera);

        this.element.style.left = coords2d.x + 'px';
        this.element.style.top = coords2d.y + 'px';
      },
      get2DCoords: function(position, camera) {
        var vector = position.project(camera);
        vector.x = (vector.x + 1)/2 * self.width;
        vector.y = -(vector.y - 1)/2 * self.height;
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

  zoomfit(){
    event.stopPropagation();
    if(this.dataService.selecting.length===0){
      const obj=new THREE.Object3D();
      for(var i=0;i<this.scene.children.length;i++){
        if(this.scene.children[i].name!=="GridHelper"){
          obj.children.push(this.scene.children[i]);
        }
      }
      var boxHelper = new THREE.BoxHelper(obj);
      boxHelper["geometry"].computeBoundingBox();
      boxHelper["geometry"].computeBoundingSphere();
      var boundingSphere=boxHelper["geometry"].boundingSphere;
      var center = boundingSphere.center;
      var radius = boundingSphere.radius;
      var fov=this.camera.fov * ( Math.PI / 180 );
      var vec_centre_to_pos: THREE.Vector3 = new THREE.Vector3();
      vec_centre_to_pos.subVectors(this.camera.position, center);
      var tmp_vec=new THREE.Vector3( center.x+Math.abs( radius / Math.sin( fov / 2 )),
                                     center.y+Math.abs( radius / Math.sin( fov / 2 ) ),
                                     center.z+Math.abs( radius / Math.sin( fov / 2 )));
      vec_centre_to_pos.setLength(tmp_vec.length());
      var perspectiveNewPos: THREE.Vector3 = new THREE.Vector3();
      perspectiveNewPos.addVectors(center, vec_centre_to_pos);
      var newLookAt = new THREE.Vector3(center.x,center.y,center.z)
      this.camera.position.copy(perspectiveNewPos);
      this.camera.lookAt(newLookAt);
      this.camera.updateProjectionMatrix();
      this.controls.target.set(newLookAt.x, newLookAt.y,newLookAt.z);
      this.controls.update();
    }else{
      var box:THREE.BoxHelper=this.selectbox();
      var center = new THREE.Vector3(box["geometry"].boundingSphere.center.x,box["geometry"].boundingSphere.center.y,box["geometry"].boundingSphere.center.z);
      var radius=box["geometry"].boundingSphere.radius;
      var fov=this.camera.fov * ( Math.PI / 180 );
      var vec_centre_to_pos: THREE.Vector3 = new THREE.Vector3();
      vec_centre_to_pos.subVectors(this.camera.position, center);
      var tmp_vec=new THREE.Vector3(center.x+Math.abs( radius / Math.sin( fov / 2 )),
                                    center.y+Math.abs( radius / Math.sin( fov / 2 ) ),
                                    center.z+Math.abs( radius / Math.sin( fov / 2 )));
      vec_centre_to_pos.setLength(tmp_vec.length());
      var perspectiveNewPos: THREE.Vector3 = new THREE.Vector3();
      perspectiveNewPos.addVectors(center, vec_centre_to_pos);
      var newLookAt = new THREE.Vector3(center.x,center.y,center.z)
      this.camera.position.copy(perspectiveNewPos);
      this.camera.lookAt(newLookAt);
      this.camera.updateProjectionMatrix();
      this.controls.target.set(newLookAt.x, newLookAt.y,newLookAt.z);
      this.controls.update();
    }
  }

  selectbox():THREE.BoxHelper{
    if(this.dataService.selecting.length!==0){
      var select=new THREE.Object3D();
        for(var i=0;i<this.scene.children.length;i++){
          if(this.scene.children[i].name==="selects"){
            select.children.push(this.scene.children[i]);
          }
        }
      var box=new THREE.BoxHelper(select);
      box["geometry"].computeBoundingBox();
      box["geometry"].computeBoundingSphere();
      return box;
    }
  }

  setting(settingVisible){
    event.stopPropagation();
    this.settingVisible=!this.settingVisible;
   }

  /*getSceneChildren() {
    var scenechildren=[];
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
    for(var i=0;i<children.length;i++){
      for(var j=0;j<children[i].children.length;j++){
        if(children[i].children[j].type==="Mesh"||children[i].children[j].type==="LineSegments"||children[i].children[j].type==="LineLoop"){
          scenechildren.push(children[i].children[j]);
        }
      }
    }
    return scenechildren;
  }*/
  //One Mesh
  /*getSceneChildren() {
    var scenechildren=[];
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
    for(var i=0;i<children.length;i++){
        if(children[i].type==="Mesh"||children[i].type==="LineSegments"||children[i].type==="LineLoop"){
          scenechildren.push(children[i]);
        }
      }
    return scenechildren;
  }*/





  /*render():void {
    let self = this;
    (function render(){
        var scenechildren=self.getSceneChildren();
        console.log(scenechildren);
        self.raycaster.setFromCamera(self.mouse,self.camera);
        var intersects = self.raycaster.intersectObjects(scenechildren);
        for (var i = 0; i < scenechildren.length; i++) {
          var currObj=scenechildren[i];
          if(self.dataService.getSelectingIndex(currObj.uuid)<0) {
            if ( intersects.length > 0 &&  intersects[ 0 ].object.uuid==currObj.uuid) {
              currObj.material=self.mousehovMat;
            } else {
              currObj.material=self.basicMat;
            }
          }
        }
      requestAnimationFrame(render);
      self.renderer.render(self.scene, self.camera);
    }());
    this.renderer.render( this.scene, this.camera );
  }
*/
  /*sprite( message: string, parameters?: any ): THREE.Sprite{

    if ( parameters === 2 ) parameters = {};
    var fontface = parameters.hasOwnProperty("fontface") ? parameters["fontface"] : "Arial";
    var fontsize = parameters.hasOwnProperty("fontsize") ? parameters["fontsize"] : 30;
    var borderThickness = parameters.hasOwnProperty("borderThickness") ? parameters["borderThickness"] : 0.1;
    var borderColor = parameters.hasOwnProperty("borderColor") ?parameters["borderColor"] : { r:0, g:0, b:0, a:1.0 };
    var backgroundColor = parameters.hasOwnProperty("backgroundColor") ?parameters["backgroundColor"] : { r:0, g:0, b:0, a:1.0 };
    var textColor = parameters.hasOwnProperty("textColor") ?parameters["textColor"] : { r:0, g:0, b:255, a:1.0 };

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');

    context.font = "Bold " + fontsize + "px " + fontface;
    var metrics = context.measureText( message );
    var textWidth = metrics.width;

    context.fillStyle   = "rgba(" + backgroundColor.r + "," + backgroundColor.g + "," + backgroundColor.b + "," + backgroundColor.a + ")";
    context.strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + "," + borderColor.b + "," + borderColor.a + ")";

    context.lineWidth = borderThickness;

    context.fillStyle = "rgba("+textColor.r+", "+textColor.g+", "+textColor.b+", 1.0)";
    context.fillText( message, borderThickness, fontsize + borderThickness);

    var texture = new THREE.Texture(canvas) 
    texture.needsUpdate = true;

    var spriteMaterial = new THREE.SpriteMaterial( { map: texture, color: 0xffffff } );
    var sprite = new THREE.Sprite( spriteMaterial );
    return sprite;  
  }*/

  //
  //  viewer functionality
  //  not required for now
  //
  // zoomfit(){
     
  //   // todo: fix
  //   document.body.style.cursor = "no-drop";

  //   // enable zoom; disable everything else
  //   this.controls.enabled = true;
  //   this.controls.enableZoom = true;
  //   this.controls.enableRotate = false;
  //   this.controls.enablePan = false;

  //   this.Visible="zoomfit";
    
  //   // repeat??
  //   if(this.selecting.length===0){
  //     var obj=new THREE.Object3D();
  //     obj=this.scene;
  //     var boxHelper = new THREE.BoxHelper(obj);
  //     var boundingSphere=boxHelper.geometry.boundingSphere;
  //     var center = boundingSphere.center;
  //     var radius = boundingSphere.radius;
  //     var fov=this.camera.fov * ( Math.PI / 180 );
  //     var vec_centre_to_pos: THREE.Vector3 = new THREE.Vector3();
  //     vec_centre_to_pos.subVectors(this.camera.position, center);
  //     var tmp_vec=new THREE.Vector3( Math.abs( radius / Math.sin( fov / 2 )),
  //                                    Math.abs( radius / Math.sin( fov / 2 ) ),
  //                                    Math.abs( radius / Math.sin( fov / 2 )));
  //     vec_centre_to_pos.setLength(tmp_vec.length());
  //     var perspectiveNewPos: THREE.Vector3 = new THREE.Vector3();
  //     perspectiveNewPos.addVectors(center, vec_centre_to_pos);
  //     var newLookAt = new THREE.Vector3(center.x,center.y,center.z)
  //     this.camera.position.copy(perspectiveNewPos);
  //     this.camera.lookAt(newLookAt);
  //     this.camera.updateProjectionMatrix();
  //     this.controls.target.set(newLookAt.x, newLookAt.y,newLookAt.z);
  //   }else{
  //     var axisX,axisY,axisZ,centerX,centerY,centerZ=0;
  //     var radius=0;
  //     for(var i=0;i<this.selecting.length;i++){
  //       axisX+=this.selecting[i].geometry.boundingSphere.center.x;
  //       axisY+=this.selecting[i].geometry.boundingSphere.center.y;
  //       axisZ+=this.selecting[i].geometry.boundingSphere.center.z;
  //       radius=Math.max(this.selecting[i].geometry.boundingSphere.radius,radius);
  //     }
  //     centerX=axisX/this.scene.children[1].children.length;
  //     centerY=axisY/this.scene.children[1].children.length;
  //     centerY=axisY/this.scene.children[1].children.length;
  //     var center = new THREE.Vector3(centerX,centerY,centerZ);
  //     var fov=this.camera.fov * ( Math.PI / 180 );
  //     var vec_centre_to_pos: THREE.Vector3 = new THREE.Vector3();
  //     vec_centre_to_pos.subVectors(this.camera.position, center);
  //     var tmp_vec=new THREE.Vector3(Math.abs( radius / Math.sin( fov / 2 )),
  //                                   Math.abs( radius / Math.sin( fov / 2 ) ),
  //                                   Math.abs( radius / Math.sin( fov / 2 )));
  //     vec_centre_to_pos.setLength(tmp_vec.length());
  //     var perspectiveNewPos: THREE.Vector3 = new THREE.Vector3();
  //     perspectiveNewPos.addVectors(center, vec_centre_to_pos);
  //     var newLookAt = new THREE.Vector3(center.x,center.y,center.z)
  //     this.camera.position.copy(perspectiveNewPos);
  //     this.camera.lookAt(newLookAt);
  //     this.camera.updateProjectionMatrix();
  //     this.controls.target.set(newLookAt.x, newLookAt.y,newLookAt.z);
  //   }

  // }

  // pan(){
    
  //   this.camera.updateProjectionMatrix();

  //   this.controls.enabled = true;
  //   this.controls.enableZoom = false;
  //   this.controls.enableRotate = false;
  //   this.controls.enablePan = true;

  //   //todo: remove
  //   document.body.style.cursor = "-webkit-grab";
  //   this.Visible="pan";

  // }

  // rotate(){
  //   document.body.style.cursor = " pointer";

  //   // reset controls
  //   this.controls.enabled = true;
  //   this.controls.enableZoom = false;
  //   this.controls.enableRotate = true;
  //   this.controls.enablePan = false;

  //   if(this.selecting.length===0){
  //     var centerX=0;
  //     var centerY=0;
  //     var centerZ=0;
  //     for(var i=0;i<this.scene.children[1].children.length;i++){
  //       centerX+=this.scene.children[1].children[i].children[0]["geometry"].boundingSphere.center.x;
  //       centerY+=this.scene.children[1].children[i].children[0]["geometry"].boundingSphere.center.y;
  //       centerZ+=this.scene.children[1].children[i].children[0]["geometry"].boundingSphere.center.z;
  //     }
  //     centerX=centerX/this.scene.children[1].children.length;
  //     centerY=centerY/this.scene.children[1].children.length;
  //     centerZ=centerZ/this.scene.children[1].children.length;
  //     //this.controls.target.set(centerX,centerY,centerZ);
  //   }else{
  //     var axisX=0;
  //     var axisY=0;
  //     var axisZ=0;
  //     var centerX=0;
  //     var centerY=0;
  //     var centerZ=0;
  //     for(var i=0;i<this.selecting.length;i++){
  //       axisX+=this.selecting[i].geometry.boundingSphere.center.x;
  //       axisY+=this.selecting[i].geometry.boundingSphere.center.y;
  //       axisZ+=this.selecting[i].geometry.boundingSphere.center.z;
  //     }
  //     centerX=axisX/this.scene.children[1].children.length;
  //     centerY=axisY/this.scene.children[1].children.length;
  //     centerZ=axisY/this.scene.children[1].children.length;
  //     //this.controls.target.set(centerX,centerY,centerZ);
  //   }

  //   this.Visible="rotate";
  // }

  // select(event){
  //   event.stopPropagation();

  //   document.body.style.cursor = "default";

  //   // reset controls
  //   // this.controls.enabled = false;
  //   // this.controls.enableZoom = false;
  //   // this.controls.enableRotate = false;
  //   // this.controls.enablePan = false;

  //   this.Visible="select";
  // }


 
}
