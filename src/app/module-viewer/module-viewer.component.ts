import { Component, OnInit, Injector } from '@angular/core';
import { ModuleService } from '../data/module.service'; 

@Component({
  selector: 'app-module-viewer',
  templateUrl: './module-viewer.component.html',
  styleUrls: ['./module-viewer.component.scss']
})
export class ModuleViewerComponent implements OnInit {

  module_service: ModuleService;
  functions: string[] = [];

  constructor(injector: Injector){ this.module_service = injector.get(ModuleService) };

  ngOnInit() {
  	this.functions.push("function1");
  	this.functions.push("function2");
  	this.functions.push("function3");
  	console.log(this.module_service.getModule("gis"));
  }

}
