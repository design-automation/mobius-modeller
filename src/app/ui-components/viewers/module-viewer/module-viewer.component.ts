import { Component, OnInit, Injector } from '@angular/core';
import { ModuleService } from '../data/module.service'; 

@Component({
  selector: 'app-module-viewer',
  templateUrl: './module-viewer.component.html',
  styleUrls: ['./module-viewer.component.scss']
})
export class ModuleViewerComponent{

  module_service: ModuleService;
  functions: string[] = [];

  constructor(injector: Injector){ 
      this.module_service = injector.get(ModuleService);
      let modules = this.module_service.getModule("gis");
      let fn_names = Object.keys(Object.getPrototypeOf(modules)).filter(function(t){  return (t != "constructor"); });
      this.functions = this.functions.concat(fn_names); 
  };


}
