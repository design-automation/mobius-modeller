import { Component, Injector } from '@angular/core';
import { Viewer } from '../classes/Viewer';
import { INode } from '../classes/INode';

@Component({
  selector: 'app-geometry-viewer',
  templateUrl: './geometry-viewer.component.html',
  styleUrls: ['./geometry-viewer.component.scss']
})
export class GeometryViewerComponent extends Viewer {

	private _nodes: INode[];

	constructor(injector: Injector){  super(injector, "Geometry Viewer", "Displayed geometry with each node;");  }

	update() :void{
		this._nodes = this.flowchartService.getNodes();		
	}

	getGeometry(node: INode): string[]{

		let valueTypes: string[] = [];
		let valueObject: any = node.getValue();

		for( let key in valueObject ){
			valueTypes.push(typeof(valueObject[key]));
		}
			

		return valueTypes;
	}

}
