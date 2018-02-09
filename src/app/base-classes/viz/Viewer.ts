import { Component, OnInit, OnDestroy, Injector } from '@angular/core';
import { FlowchartService } from '../../global-services/flowchart.service';
import { Subscription } from 'rxjs/Subscription';

interface IViewer{
	update(message?: string): void;
	reset(): void;
}

export abstract class Viewer implements OnInit, OnDestroy, IViewer{

	private _name: string;
	private _description: string;
	private _author: string;

	private _subscription: Subscription;
	private _message: any;

	protected flowchartService: FlowchartService; 

	protected panelOpenState: boolean = true;

	constructor(injector: Injector, name?: string, description?: string, author?: string) { 
		this._name = name;
		this._description = description; 
		this._author = author;
		
		this.flowchartService = injector.get(FlowchartService);
		this._subscription = this.flowchartService.getMessage().subscribe(message => { 
			this._message = message; 
			this.notify(message.text);
		});
  	}

  	ngDoCheck(){
  		
  	}

  	//
  	//	checks if the flowchart service has a flowchart and calls update function for the viewer
  	//
  	notify(message?: string): void{
  		if ( this.flowchartService.hasFlowchart() && this.flowchartService.getNodes().length > 0 
  				&& this.flowchartService.getSelectedNode() ){
  			this.update(message);
  		}
  		else{
  			this.reset();  		
  		}
  	}

  	//
  	//	gets flowchart service
  	//
  	getService(): FlowchartService{
  		return this.flowchartService;
  	}

	ngOnInit() { this.notify(); }

	ngOnDestroy() {
	    // unsubscribe to ensure no memory leaks
	    this._subscription.unsubscribe();
	}

	reset(){
		console.log(this._name + " has not implemented the reset function!");
	}

	// 
	//	update function to be overriden by each viewer
	//
	update(message?:string){
		console.log(this._name + " has not implemented the update function!");
	}
}