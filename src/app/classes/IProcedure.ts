export interface IProcedure{

	isSelected(): boolean; 
	isDisabled(): boolean; 
	toggleDisabled(): boolean;

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

	getNodes(): IProcedure[];
	getControlType(): string;

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
		else if(data.title == "Control"){
			return new Procedure_Control(data);
		}
	}

}

export class Procedure implements IProcedure{

	private _id: number;
	private _selected: boolean; 
	private _type: string; 
	private _title: string;
	private _module : string;
	private _disabled: boolean; 

	constructor(d){
		this._id = d.id; 
		this._selected = d.selected; 
		this._title = d.title; 
		this._type = d.type; 
		this._module = d.module;
		this._disabled = false;
	}

	isSelected(): boolean{
		return this._selected; 
	}

	isDisabled(): boolean{
		return this._disabled;
	}

	toggle(): boolean{
		this._selected = !this._selected; 
		return this._selected;
	}

	toggleDisabled(): boolean{
		this._disabled = !this._disabled;
		return this._disabled;
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

	getNodes(): IProcedure[]{
		return [];
	}

	getControlType(): string{
		return "undefined"
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

	private _controlType: string;
	private _children: IProcedure[];
	private factory: ProcedureFactory = new ProcedureFactory();

	constructor(d){
		super(d);
		let _factory = this.factory;
		this._children = d.nodes.map(function(node){
			return _factory.getProcedure(node);
		});
		this._controlType = d.controlType;
	}

	getControlType(): string{
		return this._controlType; 
	}

	getNodes(): IProcedure[]{
		return this._children;
	}
}