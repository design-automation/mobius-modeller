import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ModuleService {

  _modules: any[] = [];

  constructor(private http: HttpClient) { }

  loadModules(module: any) :void{
  	console.log("loading ", module);
  	let file = "../assets/modules/" + module.name + ".js";
  	this.http.get(file).subscribe(data => {
  		this._modules.push(JSON.parse(file));
    });
  }	

  getModule(module: string): any{
  	return this._modules[module];
  } 

}
