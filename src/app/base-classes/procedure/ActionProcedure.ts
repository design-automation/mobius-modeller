import {Procedure} from "./Procedure";
import {ProcedureTypes} from "./ProcedureTypes";
import {IComponent} from "./IComponent";

export class ActionProcedure extends Procedure{

	constructor(data ?: {result: string, module: string, function: string, params: [{type: string, value: string}] }){
		super(ProcedureTypes.Action, false); 

		if(data == undefined){
			data = {result: undefined, module: undefined, function: undefined, params: []} 
		}

		console.log(data.params);

		let left: IComponent = { expression: data.result, 
								 isAction: false, 
								 module: undefined, 
								 category: undefined, 
								 fn_name: undefined,
								 params: undefined
								}
		let right: IComponent = { expression: data.module + /*"." + data.category +*/ "::" + data.function, 
								  isAction: true, 
								  module: data.module, 
								  category: undefined,//data.category, 
								  fn_name: data.function,
								  params: data.params.map(function(p){ return { type: p.type, value: p.value }; })
								}

		if(data.result !== undefined){
			super.setLeftComponent(left);
		}

		super.setRightComponent(right);
	}

}