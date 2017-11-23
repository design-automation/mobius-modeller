import {IProcedure} from "./IProcedure";
import {Procedure} from "./Procedure";
import {ProcedureTypes} from "./ProcedureTypes";

export class IfElseControlProcedure extends Procedure{

	private _title: ProcedureTypes.IfControl|ProcedureTypes.ElseControl|ProcedureTypes.IfElseControl 
			= ProcedureTypes.IfElseControl; 

	constructor(title?: ProcedureTypes.IfControl|ProcedureTypes.ElseControl, 
		data ?: {if_condition: string, el_condition: string}){
		
		super(ProcedureTypes.IfElseControl, true);

		if (title !== undefined){
			this._title = title;

			if(title == ProcedureTypes.IfControl){

			}
			else if(title == ProcedureTypes.ElseControl){

			}


		}
		else{
			let if_control: IProcedure = new IfElseControlProcedure( ProcedureTypes.IfControl, data )
			let else_control: IProcedure = new IfElseControlProcedure( ProcedureTypes.ElseControl, data)
			
			super.addChild(if_control);
			super.addChild(else_control);
		}

	}

	addChild(procedure: IProcedure): void{
		if(this._title = ProcedureTypes.IfElseControl){
			throw Error("Cannot add child to if-else block.");
		}
		else{
			super.addChild(procedure);
		}
	}

}
