/*enum ControlTypes{
	FOR = "for each", 
	IF = "if else"
}*/

export interface IProcedure{

	isSelected(): boolean; 
	isDisabled(): boolean; 
	toggleDisabled(): boolean;

	toggle(): boolean; 
	getType(): string;
	getTitle(): string;
	getModule(): string;

	getName(): string;
	getCategory() :string;
	getMethod() :string;
	getParams(): any;
	getResult(): string;

	getNodes(): IProcedure[];
	getControlType(): string;

	getExpression(): any;

	setResult(value: string): void;
	setExpression(value: string): void;

}

export class ProcedureFactory{

	private static instance: ProcedureFactory; 

	constructor(){}

	static getInstance():	ProcedureFactory{
		if (ProcedureFactory.instance == undefined){
			ProcedureFactory.instance = new ProcedureFactory();
		}
		
		return ProcedureFactory.instance;
	}

	getProcedure(data: any){

		if(data.title == "Data"){
			return new DataProcedure(data);
		}
		else if(data.title == "Action"){
			return new ActionProcedure(data);
		}
		else if(data.title == "Control"){
			if(data.controlType == "if else" || data.controlType == "if" || data.controlType == "else") 
				return new IfElseControl(data);
			else if(data.controlType == "for each"){
				return new ForLoopControl(data);
			}
		}
		else{
			throw Error("Invalid control");
		}
	}

}

export abstract class Procedure implements IProcedure{

	private _id: number;
	private _selected: boolean; 
	private _type: string; 
	private _title: string;
	private _module : string;
	private _disabled: boolean; 
	private _allowDrag: boolean;

	constructor(d){
		this._id = d.id; 
		this._selected = d.selected; 
		this._title = d.title; 
		this._type = d.type; 
		this._module = d.module;
		this._disabled = false;
		this._allowDrag = d.allowDrag || true;
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

	getExpression(): any{
		return undefined;
	}

	setResult(value: string): void{

	}

	setExpression(expression: string): void{
		
	}
}

export abstract class ControlProcedure extends Procedure{

	private factory: ProcedureFactory = ProcedureFactory.getInstance();
	
	private _controlType: string;
	protected _children: IProcedure[] = [];

	private dataName: undefined;
	private forList: undefined;

	constructor(d){
		super(d);
		let _factory = this.factory;
		this._children = (d.nodes || []).map(function(node){
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

	addChild(prod: IProcedure){
		this._children.push(prod);
	}

}



//
//
//
//

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

export class ForLoopControl extends ControlProcedure{
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

export class IfElseControl extends ControlProcedure{
	private _ifExpression: string; 

	constructor(d){
		super(d);

		if(super.getNodes().length == 0 && d.controlType == "if else"){
			let if_control: IProcedure = new IfElseControl({title: "Control", controlType: "if", allowDrag: false })
			let else_control: IProcedure = new IfElseControl({title: "Control", controlType: "else", allowDrag: false})
			super.addChild(if_control);
			super.addChild(else_control);
		}

		// for loops
		this._ifExpression = d.ifExpression || undefined;
	}


	getExpression(): any{
		return this._ifExpression; 
	}

	setExpression(expression: string): void{
		this._ifExpression = expression;
	}

}