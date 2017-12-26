import {Component, Injector} from '@angular/core';
import {FlowchartService} from '../../../global-services/flowchart.service';
import {ModuleUtils} from "../../../base-classes/code/CodeModule";
import {Viewer} from '../../../base-classes/viz/Viewer';
import {IProcedure, ProcedureFactory, ProcedureTypes} from '../../../base-classes/procedure/ProcedureModule';
import {IGraphNode} from '../../../base-classes/node/NodeModule';

@Component({
  selector: 'app-modulebox',
  templateUrl: './modulebox.component.html',
  styleUrls: ['./modulebox.component.scss']
})
export class ModuleboxComponent extends Viewer{

  	_moduleList = [];
  	_node: IGraphNode;

  	constructor(injector: Injector) { 
  		super(injector, "module-viewer"); 
  		this._moduleList = [];

		let modules = this.flowchartService.getModules();
		for(let mod=0; mod < modules.length; mod++){
			let user_module = modules[mod];
			this._moduleList = this._moduleList.concat(ModuleUtils.getFunctions(user_module));
		}
	}

	reset():void{
		this._node = undefined;
	}

	update(){
		this._node = this.flowchartService.getSelectedNode();
	}


	//
	//
	//
	addActionProcedure(fn: {name: string, params: string[], module: string}){

		if(this._node == undefined){
			alert("Oops.. No Node Selected");
			return;
		}


		let prod_data :  {result: string, module: string, function: any, params: string[]} = 
			{result: "__", module: fn.module, function: fn.name, params: fn.params};
		let prod:IProcedure = ProcedureFactory.getProcedure( ProcedureTypes.Action, prod_data);
		this._node.addProcedure(prod);
		this.flowchartService.update();
	}

}
