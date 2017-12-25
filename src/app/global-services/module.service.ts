import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IModule } from '../base-classes/code/computation-modules/IModule'
import { gis_module } from '../geometry-modules/gis_module'

@Injectable()
export class ModuleService {

  private _modules: any[] = [];

  constructor() { 
  }


}
