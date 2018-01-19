import { Component, Input, OnInit, Injector } from '@angular/core';
import { LayoutService } from '../../../global-services/layout.service';
import { Subscription } from 'rxjs/Subscription';
import {EViewer} from '../../viewers/EViewer';


import {Viewer} from '../../../base-classes/viz/Viewer';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent extends Viewer implements OnInit{

  layout;
  _lsubscription: Subscription;
  heading: string;

  _selectedNodeName: string;

  EV = EViewer;

  @Input() panel_id: string;

  constructor(injector: Injector, private layoutService: LayoutService) { 

    super(injector);

	  this._lsubscription = this.layoutService.getMessage().subscribe(message => { 
			this.refresh();
	  });

	  this.refresh();

  }

  update(): void{
    this._selectedNodeName = ":" + " " + this.flowchartService.getSelectedNode().getName();
  }

  reset(): void{
    this._selectedNodeName = "";
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
