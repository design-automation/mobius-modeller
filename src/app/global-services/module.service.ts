import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IModule } from '../base-classes/code/computation-modules/IModule'
import { gis_module } from '../geometry-modules/gis_module'

@Injectable()
export class ModuleService {

  private _modules: any[] = [];

  constructor() { 
      let gis = new gis_module();
      this._modules["gis"] = gis;
  }

  loadModules(module: any) :void{
  	let file = "../assets/modules/" + module.name + ".js" + '?hash_id=' + Math.random();
    let gis = new gis_module();
    this._modules["gis"] = gis;
  }	

  getModule(module: string): any{
  	return this._modules[module];
  } 

}
