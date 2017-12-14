import { Component,  Injector } from '@angular/core';
import { FlowchartService } from '../../../global-services/flowchart.service';
import { LayoutService } from '../../../global-services/layout.service';
import { Viewer } from '../../../base-classes/viz/Viewer';
import { IGraphNode } from '../../../base-classes/node/NodeModule';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent extends Viewer{
 
  private _selectedNode: IGraphNode; 

  constructor(injector: Injector, private layoutService: LayoutService){  
    super(injector, "FlowchartViewer");  
  }

  update(){
    this._selectedNode = this.flowchartService.getSelectedNode();
  }


  updateNodeName($event, node): void{
    let name: string =  $event.srcElement.value;

    if(name.trim().length > 0){
      node.setName(name);
      this.flowchartService.update();
    }
  }

  saveNode(node: IGraphNode): void{
    this.flowchartService.saveNode(node);
  }

  close(): void{
    this.layoutService.hideEditor();
  }


}
