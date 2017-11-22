import {ControlProcedure} from "./ControlProcedure";

export class ForLoopControlProcedure extends ControlProcedure{
	private _dataName: string; 
	private _forList: string;

	constructor(d){
		super(d);

		// for loops
		this._dataName = d.dataName || undefined;
		this._forList = d.forList || [];
	}

	getResult() :string{
		return this._dataName; 
	}

	getExpression(): any{
		return this._forList;
	}

	setResult(result: string): void{
		this._dataName = result;
	}

	setExpression(expression: string): void{
		this._forList = expression;
	}

}