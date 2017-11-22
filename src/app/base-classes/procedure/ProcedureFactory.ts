import {ProcedureTypes} from "./IProcedure"; 
import {DataProcedure} from "./DataProcedure";
import {ActionProcedure} from "./ActionProcedure";
import {IfElseControlProcedure} from "./IfElseControlProcedure";
import {ForLoopControlProcedure} from "./ForLoopControlProcedure";

export class ProcedureFactory{

	private static instance: ProcedureFactory; 

	constructor(){}

	static getInstance():	ProcedureFactory{
		if (ProcedureFactory.instance == undefined){
			ProcedureFactory.instance = new ProcedureFactory();
		}
		
		return ProcedureFactory.instance;
	}

	getProcedure(type: ProcedureTypes, data: any){

		if(type == ProcedureTypes.Data){
			return new DataProcedure(data);
		}
		else if(type == ProcedureTypes.Action){
			return new ActionProcedure(data);
		}
		else if(type == ProcedureTypes.IfElseControl){
			return new IfElseControlProcedure(data);
		}
		else if(type == ProcedureTypes.IfControl){
			return new IfElseControlProcedure(data);
		}
		else if(type == ProcedureTypes.ElseControl){
			return new IfElseControlProcedure(data);
		}
		else if(type == ProcedureTypes.ForLoopControl){
			return new ForLoopControlProcedure(data);
		}
		else{
			throw Error("Invalid control");
		}
	}

}