import { Injector } from '@angular/core';
import { DataService } from "./data.service";
import { Subscription } from 'rxjs/Subscription';

export class DataSubscriber{

	protected dataService: DataService;
	private _subscription: Subscription;
	private _message: any;

	constructor(injector: Injector){ 
		this.dataService = injector.get(DataService);
		this._subscription = this.dataService.getMessage().subscribe(message => { 
	      this._message = message; 
	      this.notify();
	    });
	}

	notify(){ 
		console.warn("Notify function not Implemented");
	}
}