import { Component, Injector, OnInit } from '@angular/core';

import { Viewer } from '../../../base-classes/viz/Viewer';
import { IPort } from '../../../base-classes/port/PortModule';

import * as gs from 'gs-json';

@Component({
  selector: 'app-geometry-viewer',
  templateUrl: './geometry-viewer.component.html',
  styleUrls: ['./geometry-viewer.component.scss']
})
export class GeometryViewerComponent extends Viewer implements OnInit{

	_port: IPort;
	gs_dummy_data: any;

	constructor(injector: Injector){ 
		super(injector, "Geometry Viewer", "Displayed geometry with each node;");  
	}

	reset(){ 
	}

	ngOnInit(){
      this.gs_dummy_data = gs.genModelTorus();
	}	

	update() :void{
      this._port = this.flowchartService.getSelectedPort();
      this.gs_dummy_data = this._port.getValue();
      console.log(this.gs_dummy_data);  
	}

}


  // this.gs_dummy_data =  {
  //               attribs: null,
  //               geom: {
  //                   objs: [
  //                       [
  //                           [
  //                               [0, 1, 2, 3, -1],
  //                           ],
  //                           [
  //                               [1, 5, 4, 0, -1],
  //                               [2, 6, 5, 1, -1],
  //                               [3, 7, 6, 2, -1],
  //                               [0, 4, 7, 3, -1],
  //                               [5, 6, 7, 4, -1],
  //                           ],
  //                           [200],
  //                       ],
  //                   ],
  //                   points: [
  //                       [0, 1, 2, 3, 4, 5, 6, 7],
  //                       [
  //                           [-0.7, -1.0, 0.0],
  //                           [0.2, -1.0, 0.0],
  //                           [0.2, -1.0, 3.0],
  //                           [-0.7, -1.0, 3.0],
  //                           [-0.7, 1.0, 0.0],
  //                           [0.2, 1.0, 0.0],
  //                           [0.2, 1.0, 3.0],
  //                           [-0.7, 1.0, 3.0],
  //                       ],
  //                   ],
  //               },
  //               groups: [
  //                   {
  //                       name: "building_obj",
  //                       objs: [0],
  //                       props: [["descr", "The building object, that has wire and faces."]],
  //                   },
  //                   // groups with topo
  //                   {
  //                       name: "building_all_faces",
  //                       topos: [
  //                           [[0, [0, 1, 2, 3, 4]]],
  //                           [],
  //                           [],
  //                           [],
  //                           [],
  //                           [],
  //                       ],
  //                   },
  //                   {
  //                       name: "walls",
  //                       parent: "building_obj",
  //                       props: [["descr", "Three walls."], ["material", "brick"], ["thickness", 300]],
  //                       topos: [
  //                           [[0, [1, 3, 4]]],
  //                           [],
  //                           [],
  //                           [],
  //                           [],
  //                           [],
  //                       ],
  //                   },
  //                   {
  //                       name: "floor",
  //                       parent: "building_obj",
  //                       topos: [
  //                           [[0, [0]]],
  //                           [],
  //                           [],
  //                           [],
  //                           [],
  //                           [],
  //                       ],
  //                   },
  //                   {
  //                       name: "roof",
  //                       parent: "building_obj",
  //                       topos: [
  //                           [[0, [2]]],
  //                           [],
  //                           [],
  //                           [],
  //                           [],
  //                           [],
  //                       ],
  //                   },
  //                   {
  //                       name: "winodw_openings",
  //                       parent: "building_obj",
  //                       topos: [
  //                           [],
  //                           [[0, [0]]],
  //                           [],
  //                           [],
  //                           [],
  //                           [],
  //                       ],
  //                   },
  //                   {
  //                       name: "vertical_edges_of_faces",
  //                       parent: "building_obj",
  //                       topos: [
  //                           [
  //                               [0,
  //                                   [
  //                                       [1, [1, 3]],
  //                                       [3, [1, 3]],
  //                                       [4, [0, 2]],
  //                                   ],
  //                               ],
  //                           ],
  //                           [],
  //                           [],
  //                           [],
  //                           [],
  //                           [],
  //                       ],
  //                   },
  //                   {
  //                       name: "vertices_on_ground",
  //                       parent: "building_obj",
  //                       topos: [
  //                           [
  //                               [0,
  //                                   [
  //                                       [0, [0, 1, 2, 3]],
  //                                       [1, [2, 3]],
  //                                       [3, [0, 1]],
  //                                       [4, [0, 3]],
  //                                   ],
  //                               ],
  //                           ],
  //                           [
  //                               [0,
  //                                   [
  //                                       [0, [0, 1]],
  //                                   ],
  //                               ],
  //                           ],
  //                           [],
  //                           [],
  //                           [],
  //                           [],
  //                       ],
  //                   },
  //                   {
  //                       name: "points_on_ground",
  //                       parent: "building_obj",
  //                       points: [0, 1, 4, 5],
  //                   },
  //               ],
  //               metadata: {
  //                   crs: { epsg: 3857 },
  //                   filetype: "gs-json",
  //                   location: "+0-0",
  //                   version: "0.1.1",
  //               },
  //               skins: null,
  //           };