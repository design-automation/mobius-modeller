import { Component,  Injector } from '@angular/core';
import { FlowchartService } from '../../../global-services/flowchart.service';
import { Viewer } from '../../../base-classes/viz/Viewer';
import { IGraphNode } from '../../../base-classes/node/NodeModule';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent extends Viewer{
 
  _selectedNode: IGraphNode; 
  _moduleList = [];

  isVisible: boolean = false;

  constructor(injector: Injector){  
    super(injector, "Editor");  
  }

  update(){
    this._selectedNode = this.flowchartService.getSelectedNode();

    if(this._selectedNode == undefined){
      this.isVisible = false;
    }
    else{
      this.isVisible = true;
    }
  }

  reset(){
    this._selectedNode = this.flowchartService.getSelectedNode();
    if(this._selectedNode == undefined){
      this.isVisible = false;
    }
    else{
      this.isVisible = true;
    }
  }


  updateNodeName($event, node): void{
    let name: string =  $event.srcElement.value;

    name = name.replace(/[^\w]/gi, '');

    if(name.trim().length > 0){
      node.setName(name);
      this.flowchartService.update();
    }
  }

}
