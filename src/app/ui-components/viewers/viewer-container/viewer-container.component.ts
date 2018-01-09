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

  	group = {value: undefined};
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

	updateGroupValue(value: number): void{
		this.group.value = value;
		this.layoutService.setViewContainer(value); 
	}

	switchToHelp(): void{
		
		this.updateGroupValue(4);
		this._lock = true;
	}

	switchToConsole(): void{
		this.updateGroupValue(3);
		this._lock = true;
	}

	update() {
		if(!this._lock){
			let port = this.flowchartService.getSelectedPort(); 
			if(port == undefined){
				this.updateGroupValue(this.layoutService.getViewContainer());
			}
			else{
				this.updateGroupValue( this.flowchartService.getSelectedPort().getType());
			}
		}
	}

	lock(){
		this._lock = !this._lock;
	}

  	ngOnInit() {
  		this.updateGroupValue(this.layoutService.getViewContainer());
  	}

  	changed(): void{
  		this._lock = false;
  		this.layoutService.setViewContainer(this.group.value);
  	}


}
