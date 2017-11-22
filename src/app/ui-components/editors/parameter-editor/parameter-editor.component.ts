import { Component, Injector } from '@angular/core';

import { IGraphNode } from '../../../base-classes/node/NodeModule';
import { InputPort } from '../../../base-classes/port/PortModule';

import { Viewer } from '../../../base-classes/viz/Viewer';
import { FlowchartService } from '../../../global-services/flowchart.service';

@Component({
  selector: 'app-parameter-editor',
  templateUrl: './parameter-editor.component.html',
  styleUrls: ['./parameter-editor.component.scss']
})
export class ParameterEditorComponent extends Viewer{

	  private _node: IGraphNode;
	  private _inputs: InputPort[];
    private isVisible: boolean = false;

    // shift to iport
    private portOpts: any[] = [
      {name: "default", id: 0},
      {name: "input", id: 1},
      {name: "colorpicker", id: 2}, 
      {name: "dropdown", id: 3}
    ]

	  constructor(injector: Injector){  super(injector, "parameter-editor"); }

    reset(){ 
      this._node = undefined;
      this._inputs = undefined;
    }

  	addInput(): void{
      console.log(this._node.addInput());
  		this.flowchartService.update();
	  }

    deleteInput(inp: InputPort) :void{
      this._node.removeInput(inp);
      this.flowchartService.update();
    }

    updateInputName($event, input): void{
      let name: string = $event.srcElement.innerText;
      input.setName(name);


      // put a timeout on this update or something similar to solve jumpiness
      this.flowchartService.update();
    }

    updateInputType(type:number, input: InputPort){
       input.setType( this.portOpts[type] )
       this.flowchartService.update();
    }

    updateInputDValue($event, input: InputPort): void{
      let value: string = $event.srcElement.innerText;
      input.setDValue(value);

      // put a timeout on this update or something similar to solve jumpiness
      this.flowchartService.update();
    }

  	//
  	//	this update runs when there is a message from other viewers that something changed; 
  	//  beware of updating flowchart here - it will go into an unending loop :/
  	//
  	update(): void{
  		this._node = this.flowchartService.getSelectedNode();
      if( this._node !== undefined ){
  		   this._inputs = this._node.getInputs();
         this.isVisible = true;
      }
  	}

}
