import { Component, OnInit, Injector } from '@angular/core';

import { Viewer } from '../../../base-classes/viz/Viewer';

@Component({
  selector: 'app-viewer-container',
  templateUrl: './viewer-container.component.html',
  styleUrls: ['./viewer-container.component.scss']
})
export class ViewerContainerComponent extends Viewer implements OnInit {

  	group = {value: 4};

	constructor(injector: Injector){ 
		super(injector, "Viewer Container", "Contains all the viewers");  
	}

	update() {
		let port = this.flowchartService.getSelectedPort(); 
		if(port == undefined){
			this.group.value = 4; 
		}
		else{
			this.group.value  = this.flowchartService.getSelectedPort().getType(); 
		}
	}

  	ngOnInit() {
  	}

}
