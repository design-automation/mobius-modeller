import {ProcedureTypes} from "./ProcedureTypes";
import {IComponent} from "./IComponent";
import {Procedure} from "./Procedure";
import {IProcedure} from "./IProcedure";

export class ForLoopControlProcedure extends Procedure{

	constructor(data ?: {variable: string, array_name: string}){
		super(ProcedureTypes.ForLoopControl, true);

		if(data == undefined){
			data = {variable: undefined, array_name: undefined}
		}

		let left: IComponent = { expression: data.variable, 
								 isAction: false, 
								 module: undefined, 
								 category: undefined, 
								 fn_name: undefined,
								 params: undefined
								}
		let right: IComponent = {
							     expression: data.array_name, 
								 isAction: false, 
								 module: undefined, 
								 category: undefined, 
								 fn_name: undefined,
								 params: undefined
								}
		super.setLeftComponent(left);
		super.setRightComponent(right);

	}

	update(prodData: any, parent: IProcedure): void{
		super.update(prodData, parent);

		this._leftComponent.expression = prodData._leftComponent.expression;
		this._rightComponent.expression = prodData._rightComponent.expression;
	}

}