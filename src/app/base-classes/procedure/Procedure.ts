import {IProcedure} from "./IProcedure";
import {ProcedureTypes} from "./ProcedureTypes";
import {IComponent} from "./IComponent";
import {ICodeGenerator} from "../code/CodeModule";

export abstract class Procedure implements IProcedure{

	private _type: ProcedureTypes; 
	private _hasChildren: boolean;
	private _selected: boolean; 
	private _disabled: boolean = false; 
	private _allowDrag: boolean = true;

	protected _leftComponent: IComponent; 
	protected _rightComponent: IComponent; 

	protected _children: IProcedure[] = []; 

	constructor(type: ProcedureTypes, hasChildren: boolean){
		this._type = type; 
		this._hasChildren = hasChildren;
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




	hasChildren():  boolean{
		return this._hasChildren;
	}

	getChildren(): IProcedure[]{
		if( this._hasChildren == false){
			throw Error("This Procedure Type is not a container");
		}
		else{
			throw Error(" No Children ");
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