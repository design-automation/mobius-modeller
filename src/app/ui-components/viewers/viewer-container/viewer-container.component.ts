import { Component, OnInit, Injector } from '@angular/core';

import { Viewer } from '../../../base-classes/viz/Viewer';

import { LayoutService } from '../../../global-services/layout.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-viewer-container',
  templateUrl: './viewer-container.component.html',
  styleUrls: ['./viewer-container.component.scss']
})
export class ViewerContainerComponent extends Viewer implements OnInit {

  	group = {value: 3};
  	_lock: boolean = false;

  	private _layout_subscription: Subscription;

	constructor(injector: Injector, private layoutService: LayoutService){ 
		super(injector, "Viewer Container", "Contains all the viewers");  

		this._layout_subscription = this.layoutService.getMessage().subscribe(message => { 
          	if(message.text.startsWith("Module: ")){
  			    this.switchToHelp();
          	}
          	else if(message.text == "console"){
          		this.switchToConsole();
          	}
  		});
	}

	switchToHelp(): void{
		this.group.value = 4; 
		this._lock = true;
	}

	switchToConsole(): void{
		this.group.value = 3; 
		this._lock = true;
	}

	update() {
		if(!this._lock){
			let port = this.flowchartService.getSelectedPort(); 
			if(port == undefined){
				this.group.value = 4; 
			}
			else{
				this.group.value  = this.flowchartService.getSelectedPort().getType(); 
			}
		}
	}

	lock(){
		this._lock = !this._lock;
	}

  	ngOnInit() {
  	}

  	changed(): void{
  		this._lock = false;
  	}


}
