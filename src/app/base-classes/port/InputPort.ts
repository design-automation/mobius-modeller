import {Port} from "./Port";
import {IPort} from "./IPort";
import {IGraphNode} from "../node/IGraphNode";
import {InputPortTypes} from "./InputPortTypes";

export class InputPort extends Port{
	
	// input type 
	// slider
	// input
	// color
	// file
	private _fnValue: IGraphNode;

	constructor(name: string, type?: {name: InputPortTypes, value: any}){ 
		super(name);

		if(type !== undefined){
			this._type = type.name;
			this.setDefaultValue(type.value);
		}
		else{
			this._type = InputPortTypes.Input;
		}
	}

	setOpts(opts: any){
		this.opts = opts;

		//todo: check if options valid for type
	}

	getOpts(): any{
		return this.opts;
	}

	disconnect(): void{
		this._isFunction = false;
		super.disconnect();
	}

	getFnValue(): IGraphNode{
		return this._fnValue;
	}

	setFnValue(_fnValue: IGraphNode): void{
		this._fnValue = _fnValue;
	}

}
