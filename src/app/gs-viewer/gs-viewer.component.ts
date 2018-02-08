import { Component, OnInit, Input } from '@angular/core';
import {DataService} from './data/data.service';
import * as gs from "gs-json";

@Component({
  selector: 'gs-viewer',
  templateUrl: './gs-viewer.component.html',
  styleUrls: ['./gs-viewer.component.scss']
})
export class GSViewerComponent {

	// gs model data passed to the viewer
	@Input() data: gs.IModel;

	constructor(private dataService: DataService){};

	setModel(data: gs.IModel): void{
		try{
			this.dataService.setGsModel(data);
		}
		catch(ex){
			this.data = undefined;
			console.error("Error generating model");
		}
	}

	ngOnInit() {
		this.setModel(this.data);
	}

	ngDoCheck(){
		if(this.dataService.getGsModel() !== this.data){
			this.setModel(this.data);
		}
	}

}