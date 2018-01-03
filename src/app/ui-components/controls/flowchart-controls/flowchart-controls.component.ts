import { Component, Injector, OnInit } from '@angular/core';

import { ModuleService } from '../../../global-services/module.service';

import { Viewer } from '../../../base-classes/viz/Viewer';

@Component({
  selector: 'app-flowchart-controls',
  templateUrl: './flowchart-controls.component.html',
  styleUrls: ['./flowchart-controls.component.scss']
})
export class FlowchartControlsComponent extends Viewer implements OnInit{

  // doesn't really need to extend viewer 
  constructor(injector: Injector, private modules: ModuleService) { super(injector, "flowchart-controls"); }

  ngOnInit(): void{
    this.newfile();
  }

  newfile(): void{
    this.flowchartService.newFile();
  }

  execute(): void{
    this.flowchartService.execute();
  }


  loadFile(url ?:string): void{
    this.flowchartService.loadFile(url);
  }

  save(): void{
    this.flowchartService.saveFile();
  }

}
