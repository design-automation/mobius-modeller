import * as THREE from 'three';
import { Component, OnInit, Injector, ElementRef } from '@angular/core';
import { AngularSplitModule } from 'angular-split';
import {DataSubscriber} from "../data/DataSubscriber";
import {MatExpansionModule} from '@angular/material/expansion';
import * as gs from "gs-json";

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
  constructor(injector: Injector, myElement: ElementRef){
  	super(injector);
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

      }catch(ex){
        console.error("Error displaying model:", ex);
      }
    }
  }



}