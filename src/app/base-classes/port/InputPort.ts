import {Port} from "./Port";
import {InputPortTypes} from "./InputPortTypes";

export class InputPort extends Port{
	
	// input type 
	// slider
	// input
	// color
	// file
	private _inputType: InputPortTypes = InputPortTypes.Default;

	constructor(name: string, type?: {name: InputPortTypes, value: any}){ 
		super(name);

		if(type !== undefined){
			this._inputType = type.name;
			this.setDefaultValue(type.value);
		}
	}

	getType(): InputPortTypes{
		return this._inputType;
	}

	setType(type: InputPortTypes): void{
		super.setType(type);
		this._inputType = type;
	}

}
