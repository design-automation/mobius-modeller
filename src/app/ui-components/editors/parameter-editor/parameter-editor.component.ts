import { Component, Injector } from '@angular/core';

import { IGraphNode } from '../../../base-classes/node/NodeModule';
import { InputPort, PortTypes } from '../../../base-classes/port/PortModule';

import { Viewer } from '../../../base-classes/viz/Viewer';
import { FlowchartService } from '../../../global-services/flowchart.service';


@Component({
  selector: 'app-parameter-editor',
  templateUrl: './parameter-editor.component.html',
  styleUrls: ['./parameter-editor.component.scss']
})
export class ParameterEditorComponent extends Viewer{

    private isVisible: boolean = false;

    private _node: IGraphNode;
    private _inputs: InputPort[];

    // shift to iport
    private portOpts: PortTypes[] = [
        PortTypes.Default, 
        PortTypes.Input, 
        PortTypes.ColorPicker, 
        PortTypes.FilePicker, 
        PortTypes.Dropdown
    ]; 

	  constructor(injector: Injector){  super(injector, "parameter-editor"); }

    reset(){ 
      this._node = undefined;
      this._inputs = undefined;
    }


    //
    //
    //
  	addInput(): void{
      this._node.addInput();
  		this.flowchartService.update();
	  }

    deleteInput(portIndex: number) :void{
      this._node.deleteInput(portIndex);
      this.flowchartService.update();
    }

    updateInputName($event, input: InputPort): void{
      let name: string = $event.srcElement.innerText;
      input.setName(name);
      // put a timeout on this update or something similar to solve jumpiness
      this.flowchartService.update();
    }

    updateInputType(type: PortTypes, input: InputPort){
      input.setType(type);
    }

    updateDefaultValue($event, input: InputPort): void{
      let value: string = $event.srcElement.innerText;
      input.setDefaultValue(value)

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
