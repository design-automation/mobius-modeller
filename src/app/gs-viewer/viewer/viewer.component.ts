import { Component, OnInit, Injector, ElementRef } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';
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
  scene:any;
  renderer:any;
  container:any;
  camera:any;
  width:any;
  height:any;
  light:any;
  controls:any;
  view:any;
  raycaster:any;
  mouse:any;
  settingVisible: boolean=false;
  Visible:string="rotate";
  model:any;
  boxes:any;
  geometry:THREE.Geometry;
  INTERSECTED:any;
  INTERSECTEDcolor:any;
  selecting:any;
  canvas:any;

  myElement;
  
  constructor(injector: Injector, myElement: ElementRef) { 
    super(injector);
    this.scene=new THREE.Scene();
    this.dataService.addScene(this.scene);
    this.renderer = new THREE.WebGLRenderer( {antialias: true} );
    this.dataService.addRender(this.renderer);
    this.dataService.addAmbientLight();
    
    this.geometry = new THREE.Geometry();
    this.dataService.addGeom(this.geometry);
    this.mouse=new THREE.Vector2();
    this.raycaster = new THREE.Raycaster();
    this.selecting=[];
    this.myElement = myElement;
  }

  //
  //  checks if the flowchart service has a flowchart and calls update function for the viewer
  //
  notify(): void{
    //while(this.scene.children.length > 0){ 
        //this.scene.remove(this.scene.children[0]); 
    //}
    //this.updateViewer();

  }


  ngOnInit() {
    this.updateViewer();
  }

  updateViewer(){ 
    this.model= this.dataService.getGsModel(); 
    if(this.model == undefined){
      return;
    }
    const scene_data: gs.IThreeScene = gs.genThreeModel(this.model);
    let loader = new THREE.ObjectLoader();
    let object = loader.parse( scene_data );
    for(var i =0;i<object.children.length;i++){
      if(object.children[i].children!==undefined){
        for(var j=0;j<object.children[i].children.length;j++){
          if(object.children[i].children[j].type==="Mesh"){
            object.children[i].children[j]["geometry"].computeVertexNormals();
          }
        }
      }
    }
    
    this.scene.add( object );

    this.scene.background = new THREE.Color( 0xcccccc );
    this.container= this.myElement.nativeElement.children[0];//document.getElementById( 'container' );
    this.width=this.container.clientWidth || 600;
    this.height=this.container.clientHeight;    

    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize( this.width, this.height );
      
    this.container.appendChild( this.renderer.domElement );

    var self=this;
    // window.addEventListener( 'resize', function() {
    //   self.width=self.container.clientWidth;
    //   self.height=self.container.clientHeight;
    //   self.renderer.setPixelRatio( window.devicePixelRatio );
    //   self.camera.aspect = self.width / self.height;
    //   self.camera.updateProjectionMatrix();
    //   self.renderer.setSize( self.width, self.height );
    //   self.render();
    // }, false );

    this.camera = new THREE.PerspectiveCamera( 50, this.width / this.height, 0.01, 1000 );
    this.camera.position.z = 10;
    this.camera.updateMatrixWorld();
    this.camera.lookAt(this.scene.position);

    self.light = new THREE.DirectionalLight( 0xffffff,0.5);
    self.light.castShadow = false; 
    //self.light.position.set(10,10,10);
    //self.light.target.position.set( 0, 0, 0 );
    this.controls=new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.mouseButtons={ORBIT:THREE.MOUSE.LEFT};

    self.light.position.copy( self.camera.position );
    this.controls.addEventListener( 'change',  function() {
      self.light.position.copy( self.camera.position );
    } );
    self.light.target.position.set( 0, 0, 0 );
    this.scene.add( self.light );
    this.geometry=this.pushGSGeometry();
    /*for ( var i = 0; i < 50; i ++ ) {
      var material = new THREE.MeshPhongMaterial( { color: 0xffffff,side:THREE.DoubleSide} );
      var mesh = new THREE.Mesh( this.geometry, material );
      mesh.position.x = ( Math.random() - 0.5 ) * 50;
      mesh.position.y = ( Math.random() - 0.5 ) * 50;
      mesh.position.z = ( Math.random() - 0.5 ) * 50;
      mesh.updateMatrix();
      mesh.matrixAutoUpdate = false;
      this.scene.add( mesh );
    }*/
    this.render();
  }


  pushGSGeometry(){
    var geom=new THREE.Geometry();
    var material = new THREE.MeshPhongMaterial( { color: 0xffffff,side:THREE.DoubleSide} );
    for (const p of this.model.getGeom().getPoints()) {
      const xyz: number[] = p.getPosition();
      geom.vertices.push(new THREE.Vector3(xyz[0], xyz[1], xyz[2]));
    }
    for (const polymesh of this.model.getGeom().getObjs(gs.EObjType.polymesh)) {
      const faces: gs.IFace[] = polymesh.getFaces();
        for (const face of faces) {
          const point_IDs: number[] = face.getVertices().map((v, i) => v.getPoint().getID());
          geom.faces.push(new THREE.Face3(point_IDs[0],point_IDs[1],point_IDs[2]));
          geom.faces.push(new THREE.Face3(point_IDs[0],point_IDs[2],point_IDs[3]));
        }
    }
    return geom;
  }

  onDocumentMouseMove(event) {
    event.preventDefault();
    this.mouse=new THREE.Vector2();
    this.mouse.x = ( event.offsetX / this.width) * 2 - 1;
    this.mouse.y =-( event.clientY / this.height ) * 2 + 1;
  }

  onDocumentMouseDown(event){
    console.log(this.scene.children);
    var scenechildren=[];
    for(var i=0;i<this.scene.children.length;i++){
      if(this.scene.children[i].name!="GridHelper"||this.scene.children[i].name!="AxisHelper"){
        scenechildren.push(this.scene.children[i]);
        console.log();
      }
    }
    this.INTERSECTEDcolor=this.dataService.getINTERSECTEDColor();
    this.selecting=this.dataService.selecting;
    var INTERSECTED;
    this.raycaster.setFromCamera(this.mouse,this.camera);
      var intersects = this.raycaster.intersectObjects(this.scene.children[1].children);
      if ( intersects.length > 0 ) {
        if ( INTERSECTED!= intersects[ 0 ].object ) {
          if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
          INTERSECTED= intersects[ 0 ].object;
          INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
          var flagInArr = false; 
          for(var i=0;i<this.selecting.length;i++){
              if(this.selecting[i].uuid==INTERSECTED.uuid){
                flagInArr = true;
                this.selecting[i].material.color.setHex(this.INTERSECTEDcolor);
                this.selecting.splice(i,1);
                i=i-1;
              }
          }

          if(flagInArr == false){
            INTERSECTED.material.color.setHex( 0x2E9AFE);
            this.selecting.push(INTERSECTED);
          }
        }
      } else {
        if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
        INTERSECTED = null;
        for(var i=0;i<this.selecting.length;i++){
          this.selecting[i].material.color.setHex(this.INTERSECTEDcolor);
        }
        this.selecting=[];
      }

      this.dataService.addselecting(this.selecting);
  }

  render():void {
    let self = this;
    (function render(){
      self.raycaster.setFromCamera(self.mouse,self.camera);
      var intersects = self.raycaster.intersectObjects(self.scene.children[1].children);
      if ( intersects.length > 0 ) {
        if ( self.INTERSECTED != intersects[ 0 ].object ) {
          if ( self.INTERSECTED ) self.INTERSECTED.material.color.setHex( self.INTERSECTED.currentHex );
          self.INTERSECTED = intersects[ 0 ].object;
          self.INTERSECTED.currentHex = self.INTERSECTED.material.color.getHex();
          self.dataService.addINTERSECTEDColor(self.INTERSECTED.currentHex);
          self.INTERSECTED.material.color.setHex( 0xFF0000);
        }
      } else {
        if ( self.INTERSECTED ) {
          if(self.INTERSECTED.currentHex!=16711680){
            self.INTERSECTED.material.color.setHex( self.INTERSECTED.currentHex );
          }
        }
        self.INTERSECTED = null;
      }
      requestAnimationFrame(render);
      self.renderer.render(self.scene, self.camera);
    }());
    this.renderer.render( this.scene, this.camera );

  }

  zoom(Visible){
    document.body.style.cursor = "crosshair";
    this.controls.mouseButtons={ZOOM:THREE.MOUSE.LEFT};
    this.controls.enabled=true;
    this.controls.enableZoom=true;
    this.Visible="zoom";
  }

  zoomfit(Visible){
    document.body.style.cursor = "crosshair";
    this.controls.mouseButtons={ZOOM:THREE.MOUSE.LEFT};
    this.controls.enabled=true;
    this.controls.enableZoom=true;
    this.Visible="zoomfit";
  }

  pan(Visible){
    document.body.style.cursor = "-webkit-grab";
    this.controls.mouseButtons={PAN:THREE.MOUSE.LEFT};
    this.controls.enabled=true;
    this.controls.enablePan=true;
    this.Visible="pan";
  }

  rotate(Visible){
    document.body.style.cursor = " -webkit-grab";
    this.controls.mouseButtons={ORBIT:THREE.MOUSE.LEFT};
    this.controls.enabled=true;
    this.controls.enableOrbit=true;
    this.Visible="rotate";
  }

  select(Visible){
    document.body.style.cursor ="default";
    this.controls.enabled=false;
    this.controls.enableOrbit=false;
    this.Visible="select";
  }
 
}
