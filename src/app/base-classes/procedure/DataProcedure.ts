import {Procedure} from "./Procedure";

export class DataProcedure extends Procedure{
	private _name: string; 
	private _value: string;

	constructor(d){
		super(d);
		this._name = name; 
		this._value = d.value;
	}

	getResult(): string{
		return this._name;
	}

	getExpression() : string{
		return this._value;
	}

	setResult(result: string){
		this._name = result;
	}

	setExpression(exp: string){
		this._value = exp;
	}

}