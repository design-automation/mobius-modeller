import {Procedure} from "./Procedure";
import {IProcedure} from "./IProcedure";

export abstract class ControlProcedure extends Procedure{

	private _controlType: string;
	protected _children: IProcedure[] = [];

	private dataName: undefined;
	private forList: undefined;

	constructor(d){
		super(d);
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
