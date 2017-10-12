import { Component, Injector } from '@angular/core';
import { Viewer } from '../classes/Viewer';

@Component({
  selector: 'app-code-viewer',
  templateUrl: './code-viewer.component.html',
  styleUrls: ['./code-viewer.component.scss']
})
export class CodeViewerComponent extends Viewer {

	code: string;

	constructor(injector: Injector) { 
		super(injector, "Code viewer", "Displays the code associated with flowchart");
	}

	update(): void{
		if( this.flowchartService.hasFlowchart() )
			this.code = this.flowchartService.getCode();
	}

}
