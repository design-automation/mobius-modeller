import { Component, Injector } from '@angular/core';
import { Viewer } from '../classes/Viewer';
import { IGraphNode } from '../classes/IGraphNode';
import { InputPort } from '../classes/IPort';

@Component({
  selector: 'app-parameter-viewer',
  templateUrl: './parameter-viewer.component.html',
  styleUrls: ['./parameter-viewer.component.scss']
})
export class ParameterViewerComponent extends Viewer {

	  private _node: IGraphNode;
	  private _inputs: InputPort[];

  	constructor(injector: Injector){  super(injector, "parameter-viewer"); }

  	ngOnInit() {
  	}

    reset(): void{
      this._node = undefined; 
      this._inputs = [];
    }

  	addInput(): void{
      	this._node.addInput();
  		this.flowchartService.update();
	  }

    updateInputName($event, input): void{
      let name: string = $event.srcElement.innerText;
      input.setName(name);


      // put a timeout on this update or something similar to solve jumpiness
      this.flowchartService.update();
    }

    updateInputType( type:string ){
      alert(type);
    }

    updateInputDataValue($event, input): void{
      let value: string = $event.srcElement.innerText;
      input.setDataValue(value);

      // put a timeout on this update or something similar to solve jumpiness
      this.flowchartService.update();
    }

  	//
  	//	this update runs when there is a message from other viewers that something changed; 
  	//  beware of updating flowchart here - it will go into an unending loop :/
  	//
  	update(): void{
  		this._node = this.flowchartService.getSelectedNode();
      this._inputs = this._node.getInputs();
  	}

}
