import { Component, Injector, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ModuleService } from '../../../global-services/module.service';

import { Viewer } from '../../../base-classes/viz/Viewer';

@Component({
  selector: 'app-flowchart-controls',
  templateUrl: './flowchart-controls.component.html',
  styleUrls: ['./flowchart-controls.component.scss']
})
export class FlowchartControlsComponent extends Viewer implements OnInit{

  // doesn't really need to extend viewer 
  constructor(injector: Injector, private http: HttpClient, private modules: ModuleService) { super(injector); }

  ngOnInit(): void{
    this.newfile();
  }

  newfile(): void{
    this.flowchartService.newFlowchart();
  }

  execute(): void{
    this.flowchartService.execute();
  }

  loadFile(): void{
  	let file = "../assets/examples/test_2.json";
  	this.http.get(file).subscribe(data => {
  	      	
            // Read the result field from the JSON response.
            // todo: check validity of data

            // load required module
            this.modules.loadModules(data["module"]);

  	      	// Load data in app service
            this.flowchartService.loadChartFromData(data, "js");
      });
  }

  save(): void{
    this.flowchartService.save();
  }

}
