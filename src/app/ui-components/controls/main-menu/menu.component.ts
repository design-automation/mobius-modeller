import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { FlowchartService } from '../../../global-services/flowchart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent{
	
	@ViewChild('fileInput') fileInput: ElementRef;

	constructor(private flowchartService: FlowchartService) {}

	ngOnInit(): void{
		this.newfile();
	}

	newfile(): void{
		this.flowchartService.newFile();
	}

	execute(): void{
		this.flowchartService.execute();
	}

	openPicker(): void{
		let el: HTMLElement = this.fileInput.nativeElement as HTMLElement;
		el.click();
	}

	loadFile(): void{
		let file = this.fileInput.nativeElement.files[0];
		if (file) {
		    var reader = new FileReader();
		    reader.readAsText(file, "UTF-8");
		    let fs = this.flowchartService;
		    reader.onload = function (evt) {
		    	let fileString: string = evt.target["result"];
		    	fs.loadFile(fileString);
		    }
		    reader.onerror = function (evt) {
		        console.log("Error reading file");
		    }
		}
	}

	save(): void{
		this.flowchartService.saveFile();
	}

}
