import { Component, OnInit, Injector, ElementRef } from '@angular/core';
import * as THREE from 'three';
import { AngularSplitModule } from 'angular-split';
import { SettingComponent } from '../setting/setting.component';
import * as gs from "gs-json";
import {DataSubscriber} from "../data/DataSubscriber";

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
          edges_map: Map<number, gs.ITopoPathData>} ;
  
  myElement;
  
  mySprites: THREE.Sprite[] = [];
  scenechildren:Array<any>;
  textlabels: Array<any>=[];
  starsGeometry:THREE.Geometry = new THREE.Geometry();
  scenechild:THREE.Scene;
  mDownTime: number;
  mUpTime: number;
  sphere:THREE.Mesh;

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
    this.scenechildren=this.dataService.getscenechild();
    this.scenechild=new THREE.Scene();

    var geometry = new THREE.SphereGeometry( 0.05 );
    var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    this.sphere = new THREE.Mesh( geometry, material );
    this.sphere.visible = false;
    this.sphere.name="sphereInter"
    this.scene.add( this.sphere );

    /*for(var i=0;i<this.scene.children.length;i++){
      if(this.scene.children[i].type==="Scene"){
        if(this.scene.children[i].children[0].type==="Mesh"){
          this.scene.children[i].children[0]["material"].opacity=this.dataService.opacity;
        }
      }
    }*/
    //console.log(this.scene);
    //Material of select and basic;
    /*for(var i=0;i<this.scene.children.length;i++){
      if(this.scene.children[i].type==="Scene"){
        this.basicMat=this.scene.children[i].children[0].children[0]["material"];
        break;
      }
    }*/
    ///One Mesh
    for(var i=0;i<this.scene.children.length;i++){
      if(this.scene.children[i].type==="Scene"){
        for(var j=0;j<this.scene.children[i].children.length;j++){
          if(this.scene.children[i].children[j].name=="All faces"){
            this.basicMat=this.scene.children[i].children[j]["material"];
            this.scene.children[i].children[j]["material"].blending=1;
          }
          if(this.scene.children[i].children[j].name=="All edges"){
            this.basiclineMat=this.scene.children[i].children[j]["material"];
            this.scene.children[i].children[j]["material"].blending=1;
          }
          if(this.scene.children[i].children[j].name=="All wires"){
            this.basicwireMat=this.scene.children[i].children[j]["material"];
            this.scene.children[i].children[j]["material"].blending=1;
          }
        }
      }
    }

    // render loop
    let self = this;
    function animate() {
      self.raycaster.setFromCamera(self.mouse,self.camera);
      self.raycaster.linePrecision=0.05;
      self.scenechildren=self.dataService.getscenechild();
      var intersects = self.raycaster.intersectObjects(self.scenechildren);
      for (var i = 0; i < self.scenechildren.length; i++) {
        var currObj=self.scenechildren[i];
        if(self.dataService.getSelectingIndex(currObj.uuid)<0) {
          if ( intersects[ 0 ]!=undefined&&intersects[ 0 ].object.uuid==currObj.uuid) {

            //if(currObj.name==="All edges"){
            self.sphere.visible = true;
            self.sphere.position.copy( intersects[ 0 ].point );
          //}
            /*if(currObj.name==="All faces") currObj.material=self.mousehovMat;
            if(currObj.name==="All edges")  currObj.material=self.mousehovlineMat;
            if(currObj.name==="All wires")  currObj.material=self.mousehovwireMat;*/
          } else {
            self.sphere.visible = false;
            /*if(currObj.name==="All faces") currObj.material=self.basicMat;
            if(currObj.name==="All edges")  currObj.material=self.basiclineMat;
            if(currObj.name==="All wires")  currObj.material=self.basicwireMat;*/
          }
        }
      }
      for(var i=0; i<self.textlabels.length; i++) {
        self.textlabels[i].updatePosition();
      }
      if(self.dataService.selecting.length!=0){
        self.updateview();
      }
      requestAnimationFrame( animate );
      self.renderer.render( self.scene, self.camera );
    };
    animate();
    //this.zoomfit();
  }
  //
  //  checks if the flowchart service has a flowchart and calls update function for the viewer
  //
  notify(message: string): void{
    if(message == "model_update"){
      this.updateModel();
    }
    
  }


  /// clears all children from the scene
  clearScene(): void{
    /// remove children from scene
    for(var i=0; i < this.scene.children.length; i++){
      if( this.scene.children[i].type === "Scene" ){
         this.scene.remove(this.scene.children[i]);
      }
    }
  }


  //
  // update mode
  // todo: optimize
  // 
  updateModel(): void{

    this._model = this.dataService.getGsModel(); 

    if( !this._model || !this.scene){
      console.warn("Model or Scene not defined");
      return;
    }

    try{
      //this.scene_and_maps= gs.genThreeOptModelAndMaps( this._model );
      this.scene_and_maps= this.dataService.updateModel();

      const scene_data = this.scene_and_maps.scene;
      //[three_mode, egde_map, tri_map] = genThreeModelandMaps()
      //[three_mode, label_data] = gs.getThreeWire(labels)
      //gs.getThreeFace(label)
      //gs.getThreeObj

      
      this.clearScene();

      let loader = new THREE.ObjectLoader();

      let objectData = loader.parse( scene_data );
      /*for(var i =0;i< objectData.children.length;i++){
        if( objectData.children[i].children!==undefined){
          for(var j=0;j< objectData.children[i].children.length;j++){
            let chd = objectData.children[i].children[j];
            if( chd.type==="Mesh"||chd.type==="LineLoop"||chd.type==="LineSegments"||chd.type==="Line"){
               objectData.children[i].children[j]["geometry"].computeVertexNormals();
               objectData.children[i].children[j]["geometry"].computeBoundingBox();
               objectData.children[i].children[j]["geometry"].computeBoundingSphere();
            }
            /// 
            if( chd.children.length > 0){
              for(let s=0; s < chd.children.length; s++ ){
                let spr: any = chd.children[s];
                this.mySprites.push(spr);
                spr.material = this.getMaterial(spr.name);
              }
            }
          }
        }
      }*/
      //One Mesh
        if( objectData.children!==undefined){
          for(var i=0;i< objectData.children.length;i++){
            let chd = objectData.children[i];
            chd["material"].needsUpdate=true;
            chd["material"].transparent=true;
            if( chd.type==="Mesh"||chd.type==="LineLoop"||chd.type==="LineSegments"||chd.type==="Line"){
              chd["geometry"].computeVertexNormals();
              chd["geometry"].computeBoundingBox();
              chd["geometry"].computeBoundingSphere();
            }
          }
        }
      this.scene.add(objectData);
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
    context.font ="Bold  100px Arial";
    var texture = new THREE.Texture(canvas) 
    texture.needsUpdate = true;
    var spriteMaterial = new THREE.SpriteMaterial( { map: texture, color: 0xffffff } );
    return spriteMaterial;
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
    event.preventDefault();
    this.mouse.x = ( event.offsetX / this.width) * 2 - 1;
    this.mouse.y =-( event.clientY / this.height ) * 2 + 1;
  }

  /// selects object from three.js scene
  onDocumentMouseDown(event){
    let threshold: number = 100;
    if( Math.abs(this.mDownTime - this.mUpTime) > threshold ){
        this.mDownTime = 0;
        this.mUpTime = 0;
        return;
    }
    event.preventDefault();
    var selectedObj, intersects;
    var select:boolean=false;
    //this.selection_setting=this.dataService.getSelectionSetting();
    this.scenechildren=this.dataService.getscenechild();
    this.raycaster.setFromCamera(this.mouse,this.camera);
    var linePre=Math.round(this.scene.children[2].children[0]["geometry"].boundingSphere.radius)/10;
    this.raycaster.linePrecision = 0.05;
    intersects = this.raycaster.intersectObjects(this.scenechildren);
    if ( intersects.length > 0 ) {
      selectedObj=intersects[ 0 ].object;
      if(this.scenechildren[0].name === "All faces"){
        const path: gs.ITopoPathData = this.scene_and_maps.faces_map.get(Math.floor(intersects[ 0 ].faceIndex/2));
        const face: gs.IFace = this._model.getGeom().getTopo(path) as gs.IFace;

        //const faces: gs.IFace[] = face.getObj().getFaces();
        //const wires: gs.IWire[] = wire.getObj().getWires();


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
          var mesh=new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color:0xFF0000,side:THREE.DoubleSide} ));
          mesh.userData.id=Math.floor(intersects[ 0 ].faceIndex/2);
          mesh["geometry"].computeVertexNormals();
          mesh.name="selects";
          this.scene.add(mesh);
          this.addTextLabel(label,label_xyz, Math.floor(intersects[ 0 ].faceIndex/2));
        }else{
          for(var j=0;j<this.scene.children.length;j++){

            if(Math.floor(intersects[ 0 ].faceIndex/2)===this.scene.children[j].userData.id){
              select=true;
              this.scene.remove(this.scene.children[j]);
            }
          }
          for(var j=0;j<this.textlabels.length;j++){
            if(Math.floor(intersects[ 0 ].faceIndex/2)===this.textlabels[j]["id"]){
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
            var mesh=new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color:0xFF0000,side:THREE.DoubleSide} ));
            mesh.userData.id=Math.floor(intersects[ 0 ].faceIndex/2);
            mesh["geometry"].computeVertexNormals();
            mesh.name="selects";
            this.scene.add(mesh);
            this.addTextLabel(label,label_xyz, Math.floor(intersects[ 0 ].faceIndex/2));
          }
        }
      }
      if(this.scenechildren[0].name=="All wires"){
        const path: gs.ITopoPathData = this.scene_and_maps.wires_map.get(Math.floor(intersects[ 0 ].index/2));
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
          var material=new THREE.LineBasicMaterial( { color:0xff0000,side:THREE.DoubleSide} );
          const line = new THREE.Line( geometry, material);
          line.userData.id=Math.floor(intersects[ 0 ].index/2);
          line["material"].needsUpdate=true;
          line.name="selects";
          this.scene.add(line);
          this.addTextLabel(label,label_xyz, Math.floor(intersects[ 0 ].index/2));
        }else{
          for(var j=0;j<this.scene.children.length;j++){
            if(Math.floor(intersects[ 0 ].index/2)===this.scene.children[j].userData.id){
              select=true;
              this.scene.remove(this.scene.children[j]);
            }
          }
          for(var j=0;j<this.textlabels.length;j++){
            if(Math.floor(intersects[ 0 ].index/2)===this.textlabels[j]["id"]){
              select=true;
              this.removeTextLabel(this.textlabels[j]["id"]);
            }
          }
          if(select==false){
            var geometry=new THREE.Geometry();
            for(var i=0;i<verts_xyz.length;i++){
              geometry.vertices.push(new THREE.Vector3(verts_xyz[i][0],verts_xyz[i][1],verts_xyz[i][2]));
            }
            var material=new THREE.LineBasicMaterial( { color:0xff0000,side:THREE.DoubleSide} );
            const line = new THREE.Line( geometry, material);
            line.userData.id=Math.floor(intersects[ 0 ].index/2);
            line["material"].needsUpdate=true;
            line.name="selects";
            this.scene.add(line);
            this.addTextLabel(label,label_xyz, Math.floor(intersects[ 0 ].index/2));
          }
        }
      }
      if(this.scenechildren[0].name=="All edges"){
        const path: gs.ITopoPathData = this.scene_and_maps.edges_map.get(Math.floor(intersects[ 0 ].index/2));
        const edge: gs.IEdge = this._model.getGeom().getTopo(path) as gs.IEdge;
        const label: string = edge.getLabel();
        const label_xyz: gs.XYZ = edge.getLabelCentroid();
        const verts: gs.IVertex[] = edge.getVertices();
        const verts_xyz: gs.XYZ[] = verts.map((v) => v.getPoint().getPosition());
        if(this.textlabels.length===0) {
          var geometry=new THREE.Geometry();
          for(var i=0;i<verts_xyz.length;i++){
            geometry.vertices.push(new THREE.Vector3(verts_xyz[i][0],verts_xyz[i][1],verts_xyz[i][2]));
          }
          var material=new THREE.LineBasicMaterial( { color:0xff0000,side:THREE.DoubleSide} );
          const line = new THREE.Line( geometry, material);
          line.userData.id=Math.floor(intersects[ 0 ].index/2);
          line["material"].needsUpdate=true;
          line.name="selects";
          this.scene.add(line);
          this.addTextLabel(label,label_xyz, Math.floor(intersects[ 0 ].index/2));
        }else{
          for(var j=0;j<this.scene.children.length;j++){
            if(Math.floor(intersects[ 0 ].index/2)===this.scene.children[j].userData.id){
              select=true;
              this.scene.remove(this.scene.children[j]);
            }
          }
          for(var j=0;j<this.textlabels.length;j++){
            if(Math.floor(intersects[ 0 ].index/2)===this.textlabels[j]["id"]){
              select=true;
              this.removeTextLabel(this.textlabels[j]["id"]);
            }
          }
          if(select==false){
            var geometry=new THREE.Geometry();
            for(var i=0;i<verts_xyz.length;i++){
              geometry.vertices.push(new THREE.Vector3(verts_xyz[i][0],verts_xyz[i][1],verts_xyz[i][2]));
            }
            var material= new THREE.LineBasicMaterial( { color:0xff0000,side:THREE.DoubleSide} );
            const line = new THREE.Line( geometry, material );
            line.userData.id=Math.floor(intersects[ 0 ].index/2);
            line.name="selects";
            this.scene.add(line);
            this.addTextLabel(label,label_xyz, Math.floor(intersects[ 0 ].index/2));
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
      //var sprite=[];
      //this.dataService.pushsprite(sprite);
      //var select=[];
      //this.dataService.addselecting(select);
    }
    //this.updateview();
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
  addTextLabel(label, label_xyz, id) {
    let container = this.myElement.nativeElement.children.namedItem("container");
    let star = this.creatStarGeometry(label_xyz);
    let textLabel=this.createTextLabel(label, star, id);
    this.starsGeometry.vertices.push( star );
    this.textlabels.push(textLabel);
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
    }
  }

  creatStarGeometry(label_xyz) {
    let star = new THREE.Vector3();
    star.x = label_xyz[0];
    star.y = label_xyz[1];
    star.z = label_xyz[2];
    return star;
  }

  createTextLabel(label, star, id) {
    let div = this.createLabelDiv();
    var self=this;
    let textLabel= {
      id: id,
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

    if ( parameters === undefined ) parameters = {};
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
