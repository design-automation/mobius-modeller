import { Component, OnInit, Injector, Inject } from '@angular/core';
import { Viewer } from '../../../base-classes/viz/Viewer';
import { FlowchartService } from '../../../global-services/flowchart.service';

import { IGraphNode, IEdge, GraphNode } from '../../../base-classes/node/NodeModule';

@Component({
  selector: 'app-node-library',
  templateUrl: './node-library.component.html',
  styleUrls: ['./node-library.component.scss']
})
export class NodeLibraryComponent extends Viewer{

	_savedNodes: IGraphNode[]; 

	constructor(injector: Injector){  
		super(injector, "Node Library");  
		this._savedNodes = this.flowchartService.getSavedNodes();
	}

	reset(): void{
		this._savedNodes = this.flowchartService.getSavedNodes();
	}

	update(){ 
		this._savedNodes = this.flowchartService.getSavedNodes();
		console.log("updating");
	}

	addNode($event, type: number): void{
	    $event.stopPropagation();
	    if(type == undefined){
	      this.flowchartService.addNode();
	    }
	    else{
	      this.flowchartService.addNode(type);
	    }

	    this.update();
	}

	clearLibrary(){
		this.flowchartService.clearLibrary();
	}

	downloadLibrary(){
			// todo	
	}

	loadLibrary(){	
			// todo
	}	

}

