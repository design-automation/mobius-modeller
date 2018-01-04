import { Component, OnInit, Input } from '@angular/core';
import {DataService} from './data/data.service';

@Component({
  selector: 'gs-viewer',
  templateUrl: './gs-viewer.component.html',
  styleUrls: ['./gs-viewer.component.scss']
})
export class GSViewerComponent {

	// gs model data passed to the viewer
	@Input() data;

	constructor(private dataService: DataService){};

	ngOnInit() {
		this.dataService.setGsModel(this.data);
	}

}