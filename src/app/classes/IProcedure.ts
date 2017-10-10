export interface IProcedure{

	isSelected(): boolean; 
	toggle(): boolean; 
	getType(): string;
	getTitle(): string;

	getName(): string;
	getValue(): string;
}

export class ProcedureFactory{

	constructor(){ }

	getProcedure(data: any){
		if(data.title == "Data"){
			return new Procedure_Data(data.id, data.selected, data.title, data.type, data.dataName, data.dataValue);
		}
		else if(data.title == "Action"){
			return new Procedure_Action(data.id, data.selected, data.title, data.type, data.method, data.category, data.expression, data.parameters);
		}
	}

}

export class Procedure implements IProcedure{

	private _id: number;
	private _selected: boolean; 
	private _type: string; 
	private _title: string;

	constructor(id: number, selected: boolean, title: string, type: string, name?: string, value?: any){
		this._id = id; 
		this._selected = selected; 
		this._title = title; 
		this._type = type; 
	}

	isSelected(): boolean{
		return this._selected; 
	}

	toggle(): boolean{
		this._selected = !this._selected; 
		return this._selected;
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

}

export class Procedure_Data extends Procedure{
	private _name: string; 
	private _value: string;

	constructor(id: number, selected: boolean, title: string, type: string, name?: string, value?: any){
		super(id, selected, title, type);
		this._name = name; 
		this._value = value;
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

	constructor(id: number, selected: boolean, title: string, type: string, method:string, category?: string, expression?: any, params?: any[]){
		super(id, selected, title, type);
		this._method = method;
		this._category = category; 
		this._expression = expression;
		this._params = params;
	}

}

export class Procedure_Control extends Procedure{

}