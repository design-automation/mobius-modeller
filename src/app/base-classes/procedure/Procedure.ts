import {IProcedure} from "./IProcedure";
import {ProcedureTypes} from "./ProcedureTypes";
import {IComponent} from "./IComponent";
import {ICodeGenerator} from "../code/CodeModule";

export abstract class Procedure implements IProcedure{

	private _error: boolean = false;

	private _level: number;

	private _type: ProcedureTypes; 
	private _selected: boolean; 
	private _disabled: boolean = false; 
	private _printToConsole: boolean = false;
	
	private _parent: IProcedure;

	protected _leftComponent: IComponent; 
	protected _rightComponent: IComponent; 

	public hasChildren: boolean;
	public children: IProcedure[] = []; 

	constructor(type: ProcedureTypes, hasChildren: boolean){
		this._type = type; 
		this._level = 0;

		this.hasChildren = hasChildren;
		
		this.hasChildren = this.hasChildren;
		this.children = this.children;
	}	

	update(prodData: any, parent: IProcedure): void{
		this._disabled = prodData._disabled; 
		this._leftComponent = prodData._leftComponent;
		this._rightComponent = prodData._rightComponent;

		this._parent = parent;
		this._level = prodData._level;
		
		this.hasChildren = prodData.hasChildren;
		this.children = [];
	}

	reset(): void{
		this._error = false;
		this.children.map(function(p){
			p.reset();
		})
	}

	setError(value: boolean): void{
		this._error = value;
	}

	getError(): boolean{
		return this._error;
	}

	getLevel(): number{
		return this._level;
	}

	getType(): ProcedureTypes{
		return this._type; 
	}

	isSelected(): boolean{
		return this._selected; 
	}

	select(): void{
		this._selected = true;
	}

	unselect(): void{
		this._selected = false;
	}

	isDisabled(): boolean{
		return this._disabled;
	}

	enable(): void{
		this._disabled = false;
		if(this.children.length){
			for(let i=0; i < this.children.length; i++){
				this.children[i].enable();
			}
		}
	}

	disable(): void{
		this._disabled = true;

		if(this.children.length){
			for(let i=0; i < this.children.length; i++){
				this.children[i].disable();
			}
		}
	}

	printToConsole(): boolean{
		return this._printToConsole;
	}

	enablePrint(): void{
		this._printToConsole = true;
	}

	disablePrint(): void{
		this._printToConsole = false;
	}


	hasParent(): boolean{
		if(this._parent == undefined){
			return false;
		}
		else{
			return true;
		}
	}

	getParent(): IProcedure{
		return this._parent;
	}

	setParent(parent: IProcedure): void{
		console.log(parent["_level"]);
		if(parent && (parent["_level"]!==undefined)){
			this._level = parent["_level"] + 1;
		}
		else{
			this._level = 0;
		}

		this._parent = parent;
	}



	getChildren(): IProcedure[]{
		if( this.hasChildren == false){
			throw Error("This Procedure Type is not a container");
		}
		else{
			return this.children;
		}
		
	}	

	addChild(child: IProcedure): void{
		if( this.hasChildren ){
			this.children.push(child);
			child.setParent(this);
		}
		else{
			throw Error("Cannot add child to this procedure");
		}
	}

	addChildFromData(child: IProcedure): void{
		if( this.hasChildren ){
			this.children.push(child);
			child.setParent(this);
		}
		else{
			throw Error("Cannot add child to this procedure");
		}
	}

	addChildAtPosition(child: IProcedure, index: number): void{
		this.children.splice(index, 0, child);
		child.setParent(this);
	}

	deleteChild(procedure: IProcedure): void{
		this.children = this.children.filter(function(child: IProcedure){ 
			if(child === procedure){
				return false; 
			}
			else{
				return true;
			}
		});
	}

	getLeftComponent(): IComponent{
		return this._leftComponent; 
	}

	setLeftComponent(component: IComponent): void{
		this._leftComponent = component;
	}

	getRightComponent(): IComponent{
		return this._rightComponent; 
	}

	setRightComponent(component: IComponent): void{
		this._rightComponent = component;
	}

	getCodeString(code_generator: ICodeGenerator): string{
		return code_generator.generateProcedureCode(this);
	}

}