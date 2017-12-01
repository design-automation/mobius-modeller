import { Component, Injector } from '@angular/core';
import { AceEditorModule } from 'ng2-ace-editor';

import { Viewer } from '../../../base-classes/viz/Viewer';

import * as js_beautify from 'js-beautify';

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
		this.code = js_beautify.js_beautify(this.flowchartService.getCode());
	}

	reset(): void{
		this.code = "";
	}

}
