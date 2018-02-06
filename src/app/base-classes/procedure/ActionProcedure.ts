import {Procedure} from "./Procedure";
import {IProcedure} from "./IProcedure";
import {ProcedureTypes} from "./ProcedureTypes";
import {IComponent} from "./IComponent";

export class ActionProcedure extends Procedure{

	constructor(data ?: {result: string, module: string, function: string, params: any }){
		super(ProcedureTypes.Action, false); 

		if(data == undefined){
			data = {result: undefined, module: undefined, function: undefined, params: []} 
		}

		let left: IComponent = { expression: data.result, 
								 isAction: false, 
								 module: undefined, 
								 category: undefined, 
								 fn_name: undefined,
								 params: undefined
								}
		let right: IComponent = { expression: data.module + /*"." + data.category +*/ "." + data.function, 
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


	update(prodData: any, parent: IProcedure): void{
		super.update(prodData, parent);

		this._leftComponent = 	{ 
									expression: prodData._leftComponent.expression,
								 	isAction: false, 
								 	module: undefined, 
								 	category: undefined, 
								 	fn_name: undefined,
								 	params: undefined
								};


		this._rightComponent =  {  
								  expression: prodData._rightComponent.expression, 
								  isAction: true, 
								  module: prodData._rightComponent.module, 
								  category: undefined,//data.category, 
								  fn_name: prodData._rightComponent.fn_name, 
								  params: prodData._rightComponent.params.map(function(p){ return { type: p.type, value: p.value }; })
								};
	}

}