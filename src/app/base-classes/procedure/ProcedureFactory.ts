import {ProcedureTypes} from "./ProcedureTypes"; 
import {DataProcedure} from "./DataProcedure";
import {ActionProcedure} from "./ActionProcedure";
import {IfElseControlProcedure} from "./IfElseControlProcedure";
import {ForLoopControlProcedure} from "./ForLoopControlProcedure";
import {IProcedure} from "./IProcedure";

export class ProcedureFactory{

	static getProcedure(type: ProcedureTypes, data?: any): IProcedure{

		if(type == ProcedureTypes.Data){
			return new DataProcedure(data);
		}
		else if(type == ProcedureTypes.Action){
			return new ActionProcedure(data);
		}
		else if(type == ProcedureTypes.IfElseControl){
			return new IfElseControlProcedure(ProcedureTypes.IfElseControl, data);
		}
		else if(type == ProcedureTypes.ForLoopControl){
			return new ForLoopControlProcedure(data);
		}
		else{
			throw Error("Invalid control");
		}
	}

	static getProcedureFromData(procedureData: any, parent: IProcedure): IProcedure{
		
		let procedure: IProcedure;

		
		if(procedureData["_type"] == ProcedureTypes.IfControl){
			procedure = new IfElseControlProcedure( ProcedureTypes.IfControl)
		}
		else if (procedureData["_type"] == ProcedureTypes.ElseControl){
			procedure = new IfElseControlProcedure( ProcedureTypes.ElseControl)
		}
		else{
			procedure = ProcedureFactory.getProcedure(procedureData["_type"]);
		}

		procedure.update(procedureData, undefined);

		if(procedureData._children !== undefined){
			for(let child=0; child < procedureData._children.length; child++){
				let childProd :IProcedure = procedureData._children[child];
				
				procedure.addChildFromData(ProcedureFactory.getProcedureFromData(childProd, procedure));
			}
		}
		return procedure;
	}

}