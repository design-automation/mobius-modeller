import {Port} from "./Port";
import {PortTypes} from "./PortTypes";

export class InputPort extends Port{
	
	// input type 
	// slider
	// input
	// color
	// file
	private _inputType: PortTypes = PortTypes.Default;

	constructor(name: string, type?: {name: PortTypes, value: any}){ 
		super(name);

		if(type !== undefined){
			this._inputType = type.name;
			this.setDefaultValue(type.value);
		}
	}

	getType(): PortTypes{
		return this._inputType;
	}

}
