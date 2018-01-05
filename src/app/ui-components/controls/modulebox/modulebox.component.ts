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
  	_procedureArr: IProcedure[] = [];

  	procedureTypes: ProcedureTypes[] = [
  			ProcedureTypes.Data, 
  			ProcedureTypes.ForLoopControl, 
  			ProcedureTypes.IfElseControl
  	];

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
		this._procedureArr = [];
	}

	update(){
		this._node = this.flowchartService.getSelectedNode();
		if(this._node !== undefined){
			this._procedureArr = this._node.getProcedure();
		}
		else{
			// do nothing
		}
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


	getImageForType(type: ProcedureTypes): string{

		let value:string = "";

		if(type == ProcedureTypes.Data){
			value = "assignment"
		}
		else if(type == ProcedureTypes.Action){
			value = "function"
		}
		else if(type == ProcedureTypes.IfElseControl){
			value = "if-else"
		}
		else if(type == ProcedureTypes.ForLoopControl){
			value = "for-loop"	
		}

		return value;
	}

	addProcedure($event, type: ProcedureTypes): void{

		$event.stopPropagation();

		if( type == ProcedureTypes.Data){
			let default_variable_name: string = "var" + this._procedureArr.length;
			let prod_data: {result: string, value: string} = {result: default_variable_name, value: "undefined"};
			let prod:IProcedure = ProcedureFactory.getProcedure( ProcedureTypes.Data, prod_data );
			this._node.addProcedure(prod);
		}
		else if (type == ProcedureTypes.IfElseControl){
			let prod_data : {if_condition: string, el_condition: string} = {if_condition: "undefined", el_condition: "undefined"};
			let prod:IProcedure = ProcedureFactory.getProcedure( ProcedureTypes.IfElseControl, prod_data);
			this._node.addProcedure(prod);
		}
		else if(type == ProcedureTypes.ForLoopControl){
			let prod_data :  {variable: string, array_name: string} = {variable: "i", array_name: "[]"};
			let prod:IProcedure = ProcedureFactory.getProcedure( ProcedureTypes.ForLoopControl, prod_data);
			this._node.addProcedure(prod);
		}
		else if(type == ProcedureTypes.Action){

		}
		else{
			throw Error("Procedure Type invalid");
		}

		this.flowchartService.update();
	}


}
