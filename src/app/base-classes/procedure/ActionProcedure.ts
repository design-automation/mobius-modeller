import {Procedure} from "./Procedure";

export class ActionProcedure extends Procedure{

	//private _module: IModule; 
	private _category: string;
	private _expression: string;
	private _method: string;
	private _params: any[];
	private _result: string;

	constructor(d){
		super(d);
		this._method = d.method;
		this._category = d.category; 
		this._expression = d.expression;
		this._params = d.parameters || [];
		this._result = d.result; 
	}

	getMethod(): string{
		return this._method;
	}

	getCategory(): string{
		return this._category;
	}

	getParams(): any{
		return this._params;
	}

	setResult(var_name: string){
		this._result = var_name;
	}

	getResult(): string{
		return this._result;
	}


}