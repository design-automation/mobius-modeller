import {Procedure} from "./Procedure";
import {ProcedureTypes} from "./ProcedureTypes";
import {IComponent} from "./IComponent";

export class ActionProcedure extends Procedure{

	constructor(data ?: any){
		super(ProcedureTypes.Action, false); 
		let left: IComponent = { expression: data.result, 
								 isAction: false, 
								 module: undefined, 
								 category: undefined, 
								 fn_name: undefined,
								 params: undefined
								}
		let right: IComponent = { expression: data.module + "." + data.category + "::" + data.function, 
								 isAction: true, 
								 module: data.module, 
								 category: data.category, 
								 fn_name: data.function,
								 params: data.params
								}

		if(data.result !== undefined){
			super.setLeftComponent(left);
		}

		super.setRightComponent(right);
	}

}