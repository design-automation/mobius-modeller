import {Procedure} from "./Procedure";
import {ProcedureTypes} from "./ProcedureTypes";
import {IComponent} from "./IComponent";

export class DataProcedure extends Procedure{

	constructor(data ?: {result: string, value: string}){
		super(ProcedureTypes.Data, false); 

		if(data == undefined){
			data = {result: undefined, value: undefined}
		}

		let left: IComponent = { expression: data.result, 
								 isAction: false, 
								 module: undefined, 
								 category: undefined, 
								 fn_name: undefined,
								 params: undefined
								}
		let right: IComponent = { expression: data.value, 
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