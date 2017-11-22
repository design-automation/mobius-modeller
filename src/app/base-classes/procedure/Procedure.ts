import {IProcedure} from "./IProcedure";

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