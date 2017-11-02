import { Component, Injector, OnInit } from '@angular/core';
import { Viewer } from '../classes/Viewer';
import { IGraphNode } from '../classes/IGraphNode';
import * as THREE from 'three';

@Component({
  selector: 'app-geometry-viewer',
  templateUrl: './geometry-viewer.component.html',
  styleUrls: ['./geometry-viewer.component.scss']
})
export class GeometryViewerComponent extends Viewer implements OnInit{

	_nodes: IGraphNode[];

	constructor(injector: Injector){ 
		super(injector, "Geometry Viewer", "Displayed geometry with each node;");  
	}

	ngOnInit(){
		var scene = new THREE.Scene();
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
		console.log("updated");
	}

	getGeometry(node: IGraphNode): string[]{

		let valueTypes: string[] = [];
		let valueObject: any = node.getValue();

		for( let key in valueObject ){
			valueTypes.push(valueObject[key]);
		}


		return valueTypes;
	}

}
