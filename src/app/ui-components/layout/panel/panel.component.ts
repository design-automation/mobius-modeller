import { Component, Input, OnInit } from '@angular/core';
import { LayoutService } from '../../../global-services/layout.service';
import { Subscription } from 'rxjs/Subscription';
import {EViewer} from '../../viewers/EViewer';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit{

  layout;
  _subscription: Subscription;
  heading: string;

  EV = EViewer;

  @Input() panel_id: string;

  constructor(private layoutService: LayoutService) { 
	  this._subscription = this.layoutService.getMessage().subscribe(message => { 
			this.refresh();
	  });

	  this.refresh();
  }

  refresh(){ 
  	this.layout = this.layoutService.getAssets(); 
  	this.refreshContent()
  }

  refreshContent(){
  	if(this.panel_id == "main"){
  		this.heading = this.layout.content.main; 
  	}
  	else{
  		this.heading = this.layout.content.side[this.panel_id];
  	}
  }

  ngOnInit(){
  	this.refreshContent();
  }

  // shifts component to main panel
  maximize(): void{
  	this.layoutService.maximize(this.panel_id);
  }

  // reduces size of component
  minimize(): void{
  	this.layoutService.minimize(this.panel_id);
  }

  // refreshes size of component
  restore(): void{
  	this.layoutService.restore(this.panel_id);
  }

}
