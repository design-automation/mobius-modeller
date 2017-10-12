export interface IProcedure{

	isSelected(): boolean; 
	toggle(): boolean; 
	getType(): string;
	getTitle(): string;
	getModule(): string;

	getName(): string;
	getValue(): string;
	getCategory() :string;
	getMethod() :string;
	getParams(): any;
	getResult(): string;

}

export class ProcedureFactory{

	constructor(){ }

	getProcedure(data: any){
		if(data.title == "Data"){
			return new Procedure_Data(data);
		}
		else if(data.title == "Action"){
			return new Procedure_Action(data);
		}
	}

}

export class Procedure implements IProcedure{

	private _id: number;
	private _selected: boolean; 
	private _type: string; 
	private _title: string;
	private _module : string;

	constructor(d){
		this._id = d.id; 
		this._selected = d.selected; 
		this._title = d.title; 
		this._type = d.type; 
		this._module = d.module;
	}

	isSelected(): boolean{
		return this._selected; 
	}

	toggle(): boolean{
		this._selected = !this._selected; 
		return this._selected;
	}

	getModule(): string{
		return this._module;
	}

	getType(): string{
		return this._type; 
	}

	getTitle(): string{
		return this._title; 
	}

	getName(): string{
		return "";
	}

	getValue(): string{
		return "";
	}

	getCategory(): string{
		return undefined;
	}

	getMethod(): string{
		return undefined;
	}

	getParams(): any{
		return undefined;
	}

	getResult(): string{
		return undefined;
	}


}

export class Procedure_Data extends Procedure{
	private _name: string; 
	private _value: string;

	constructor(d){
		super(d);
		this._name = name; 
		this._value = d.value;
	}

	getName(): string{
		return this._name;
	}

	getValue() : string{
		return this._value;
	}

}

export class Procedure_Action extends Procedure{

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
		this._params = d.parameters;
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

	getResult(): string{
		return this._result;
	}


}

export class Procedure_Control extends Procedure{

}