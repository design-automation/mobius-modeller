import {ProcedureTypes} from "./ProcedureTypes";
import {IComponent} from "./IComponent";
import {Procedure} from "./Procedure";

export class ForLoopControlProcedure extends Procedure{

	constructor(data ?: {variable: string, array_name: string}){
		super(ProcedureTypes.ForLoopControl, true);

		let left: IComponent = { expression: data.variable, 
								 isAction: false, 
								 module: undefined, 
								 category: undefined, 
								 fn_name: undefined,
								 params: undefined
								}
		let right: IComponent = { expression: data.array_name, 
								 isAction: false, 
								 module: undefined, 
								 category: undefined, 
								 fn_name: undefined,
								 params: undefined
								}
		super.setLeftComponent(left);
		super.setRightComponent(right);

	}

}