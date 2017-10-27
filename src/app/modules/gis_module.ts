import { Module } from './Module';
import * as THREE from 'three'

//
//		Mobius Classes
//

class Point {
}

class Polyline {
    isPlanar():boolean {
        return true;
    }
}

class Polygon {
    isPlanar():boolean {
        return false;
    }
}

class Frame{
	xAxis: number[];
	yAxis: number[];
}

interface HasIsPlanar{
    isPlanar(): boolean;
}

export class gis_module extends Module{
	
	public srf : any;
	public sld : any;

	constructor(){
		super("gis", "akm");
	}

	getPoint(): Point{
		let pnt: Point = new Point();
		return pnt;
	}

	getPlane(): Polyline{
		let pln: Polyline = new Polyline();
		return pln;
	}

	isPlanar< T extends HasIsPlanar>(entity:T):boolean {
   		return entity.isPlanar();
	}

	byXYPoints(): Frame{
		return new Frame();
	}

	makeCube(size: number): any{
		return new THREE.Mesh(new THREE.BoxGeometry(size, size, size));
	}
}

