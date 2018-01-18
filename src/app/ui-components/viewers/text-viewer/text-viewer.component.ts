import { Component, Injector, OnInit } from '@angular/core';

import { Viewer } from '../../../base-classes/viz/Viewer';
import { IGraphNode } from '../../../base-classes/node/NodeModule';
import { IPort } from '../../../base-classes/port/PortModule';

@Component({
  selector: 'app-text-viewer',
  templateUrl: './text-viewer.component.html',
  styleUrls: ['./text-viewer.component.scss']
})
export class TextViewerComponent extends Viewer implements OnInit {

	_selectedNode: IGraphNode;
	_selectedPort: IPort;

	constructor(injector: Injector){ 
		super(injector, "Text Viewer", "Displayed geometry with each node;");  
	}

	ngOnInit() {
		this.update();
	}

	reset(): void{
		this.update();
	}

	getPortContent(): string{

		if(this._selectedPort == undefined){
			return "";
		}

		let value = this._selectedPort.getValue();
		if(typeof(value) == "object"){
			value = JSON.stringify(value);
		}

		return value;
	}

	update() :void{
		try{
			this._selectedNode = this.flowchartService.getSelectedNode();	
			this._selectedPort = this.flowchartService.getSelectedPort();
		}
		catch(ex){

		}
	}
}
