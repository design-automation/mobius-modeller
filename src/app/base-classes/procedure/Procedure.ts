import {IProcedure} from "./IProcedure";
import {ProcedureTypes} from "./ProcedureTypes";
import {IComponent} from "./IComponent";
import {ICodeGenerator} from "../code/CodeModule";

export abstract class Procedure implements IProcedure{


	private _type: ProcedureTypes; 
	private _hasChildren: boolean;
	private _selected: boolean; 
	private _disabled: boolean = false; 
	private _printToConsole: boolean = false;
	
	private _parent: IProcedure;

	protected _leftComponent: IComponent; 
	protected _rightComponent: IComponent; 

	protected _children: IProcedure[] = []; 

	constructor(type: ProcedureTypes, hasChildren: boolean){
		this._type = type; 
		this._hasChildren = hasChildren;
	}	

	update(prodData: any, parent: IProcedure): void{
		this._hasChildren = prodData._hasChildren;
		this._disabled = prodData._disabled; 
		this._leftComponent = prodData._leftComponent;
		this._rightComponent = prodData._rightComponent;

		this._parent = parent;
		this._children = [];
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
	}

	disable(): void{
		this._disabled = true;
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
		this._parent = parent;
	}


	hasChildren():  boolean{
		return this._hasChildren;
	}

	getChildren(): IProcedure[]{
		if( this._hasChildren == false){
			throw Error("This Procedure Type is not a container");
		}
		else{
			return this._children;
		}
		
	}	

	addChild(child: IProcedure): void{
		if( this._hasChildren ){
			this._children.push(child);
		}
		else{
			throw Error("Cannot add child to this procedure");
		}
	}

	addChildFromData(child: IProcedure): void{
		if( this._hasChildren ){
			this._children.push(child);
		}
		else{
			throw Error("Cannot add child to this procedure");
		}
	}

	addChildAtPosition(child: IProcedure, index: number): void{
		this._children.splice(index, 0, child);
	}

	deleteChild(procedure: IProcedure): void{
		this._children = this._children.filter(function(child: IProcedure){ 
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