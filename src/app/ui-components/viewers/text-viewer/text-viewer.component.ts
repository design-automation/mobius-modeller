import { Component, Injector, OnInit } from '@angular/core';

import { Viewer } from '../../../base-classes/viz/Viewer';
import { IGraphNode } from '../../../base-classes/node/NodeModule';

@Component({
  selector: 'app-text-viewer',
  templateUrl: './text-viewer.component.html',
  styleUrls: ['./text-viewer.component.scss']
})
export class TextViewerComponent extends Viewer implements OnInit {

	_selectedNode: IGraphNode;

	constructor(injector: Injector){ 
		super(injector, "Text Viewer", "Displayed geometry with each node;");  
	}

	ngOnInit() {
		this.update();
	}

	update() :void{
		this._selectedNode = this.flowchartService.getSelectedNode();	
	}
}
