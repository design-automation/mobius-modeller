import { Component, Injector, OnInit } from '@angular/core';

import { Viewer } from '../../../base-classes/viz/Viewer';
import { IGraphNode } from '../../../base-classes/node/NodeModule';

import * as THREE from 'three';

@Component({
  selector: 'app-geometry-viewer',
  templateUrl: './geometry-viewer.component.html',
  styleUrls: ['./geometry-viewer.component.scss']
})
export class GeometryViewerComponent extends Viewer implements OnInit{

	isVisible: boolean = false;
	_nodes: IGraphNode[];
	private scene = new THREE.Scene();

	constructor(injector: Injector){ 
		super(injector, "Geometry Viewer", "Displayed geometry with each node;");  
	}

	reset(){ 
		this._nodes = [];
		let scene = this.scene;
		while(scene.children.length > 0){ 
		    scene.remove(scene.children[0]); 
		}
	}

	ngOnInit(){
		var scene = this.scene;
		var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

		var renderer = new THREE.WebGLRenderer();
		renderer.setSize( 300, 300 );
		document.getElementById("app-geometry-viewer").appendChild( renderer.domElement );

		camera.position.z = 5;

		function animate() {
			requestAnimationFrame( animate );
			renderer.render( scene, camera );
		}
		
		animate();

	}	

	update() :void{
		this._nodes = this.flowchartService.getNodes();	
		this.isVisible = this._nodes.length > 0 ? true : false;
	}

	getGeometry(node: IGraphNode): string[]{

		let valueTypes: string[] = [];
		let valueObject: any = node.getResult();

		for( let key in valueObject ){
			valueTypes.push(valueObject[key]);
		}


		return valueTypes;
	}

}
