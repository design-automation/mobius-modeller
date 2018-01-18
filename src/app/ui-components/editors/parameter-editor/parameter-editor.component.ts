import { Component, Injector } from '@angular/core';

import { IGraphNode } from '../../../base-classes/node/NodeModule';
import { InputPort, OutputPort, InputPortTypes, OutputPortTypes } from '../../../base-classes/port/PortModule';

import { Viewer } from '../../../base-classes/viz/Viewer';
import { FlowchartService } from '../../../global-services/flowchart.service';

@Component({
  selector: 'app-parameter-editor',
  templateUrl: './parameter-editor.component.html',
  styleUrls: ['./parameter-editor.component.scss']
})
export class ParameterEditorComponent extends Viewer{

    isVisible: boolean = false;

    _node: IGraphNode;
    _inputs: InputPort[];
    _outputs: OutputPort[];

    // shift to iport
    inputPortOpts: InputPortTypes[] = [
        InputPortTypes.Input//, 
        // InputPortTypes.ColorPicker, 
        // InputPortTypes.FilePicker, 
        // InputPortTypes.Dropdown
    ]; 

    outputPortOpts: OutputPortTypes[] = [
        // OutputPortTypes.Three, 
        OutputPortTypes.Text, 
        OutputPortTypes.Code, 
        OutputPortTypes.Console 
    ]; 

	  constructor(injector: Injector){  super(injector, "parameter-editor"); }

    reset(){ 
      this._node = undefined;
      this._inputs = undefined;
      this._outputs = undefined;
      this.isVisible = false;
    }

    // addPort(nodeIndex: number, type: string): void{

    //   // add port 
    //   if(type == "in"){
    //       this._node.addInput();
    //   }
    //   else if(type == "out"){
    //       this._node.addOutput();
    //   }
    //   else{
    //     throw Error("Unknown Port Type");
    //   }  

    //   this.flowchartService.update();
    // }

    deletePort(event, type: string, portIndex: number): void{
      event.stopPropagation();
      this.flowchartService.deletePort(type, portIndex);
    } 

    updatePortName($event, port: InputPort|OutputPort): void{
      let name: string =  $event.srcElement.innerText; 

      // check for validity
      name = name.replace(/[^\w]/gi, '');

      if(name.trim().length > 0){
        // put a timeout on this update or something similar to solve jumpiness
        port.setName(name);
        this.flowchartService.update();
      }
    }

    updateType(type: InputPortTypes|OutputPortTypes, port: InputPort|OutputPort): void{
        port.setType(type);
    }

    updateDefaultValue($event, port: InputPort|OutputPort): void{
      let value: string = $event.srcElement.innerText;

      if(value.trim().length > 0){
        port.setDefaultValue(value)
        // put a timeout on this update or something similar to solve jumpiness
        this.flowchartService.update();
      }

    }

    getInputTypeName(type: InputPortTypes): string{
      if(type == InputPortTypes.ColorPicker){
        return "Color";
      }
      else if(type == InputPortTypes.Input){
        return "Simple Input";
      }
      else if(type == InputPortTypes.Dropdown){
        return "Dropdown";
      }
      else if(type == InputPortTypes.FilePicker){
        return "File";
      }
      else{
        return "Not Identifiable"
      }
    }

    getOutputTypeName(type: OutputPortTypes): string{
      if(type == OutputPortTypes.Three){
        return "Geometry";
      }
      else if(type == OutputPortTypes.Text){
        return "Text Viewer";
      }
      else if(type == OutputPortTypes.Code){
        return "Code Viewer";
      }
      else if(type == OutputPortTypes.Console){
        return "Console";
      }
      else{
        return "Not Identifiable"
      }
    }

  	//
  	//	this update runs when there is a message from other viewers that something changed; 
  	//  beware of updating flowchart here - it will go into an unending loop :/
  	//
  	update(): void{
  		this._node = this.flowchartService.getSelectedNode();
      if( this._node !== undefined ){
         this.isVisible = true;
  		   this._inputs = this._node.getInputs();
         this._outputs = this._node.getOutputs();
         this.isVisible = true;
      }
      else{
        this.isVisible = false;
      }
  	}

}
