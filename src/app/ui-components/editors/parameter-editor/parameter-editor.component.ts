import { Component, Injector } from '@angular/core';

import { IGraphNode } from '../../../base-classes/node/NodeModule';
import { InputPort, OutputPort, PortTypes } from '../../../base-classes/port/PortModule';

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
    private _outputs: OutputPort[];

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
      this._outputs = undefined;
    }


    //
    //
    //
    addPort(event, type: string): void{
      event.stopPropagation();

      if(type == "input"){
        this._node.addInput();
      }
      else if(type == "output"){
        this._node.addOutput();
      }
      else{
        throw Error("Unknown Port Type");
      }
    }

    deletePort(event, type: string, portIndex: number): void{
      event.stopPropagation();

      if(type == "input"){
        this._node.deleteInput(portIndex);
      }
      else if(type == "output"){
        this._node.deleteOutput(portIndex);
      }
      else{
        throw Error("Unknown port type");
      }
    } 

    updatePortName($event, port: InputPort|OutputPort): void{
      let name: string =  $event.srcElement.innerText; 
      port.setName(name);
      this.flowchartService.update();
    }

    updateInputType(type: PortTypes, input: InputPort){
      input.setType(type);
    }

    updateDefaultValue($event, port: InputPort|OutputPort): void{
      let value: string = $event.srcElement.innerText;
      port.setDefaultValue(value)

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
         this._outputs = this._node.getOutputs();
         this.isVisible = true;
      }
  	}

}
