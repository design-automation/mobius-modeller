import {Port} from "./Port";

export class InputPort extends Port{
	
	// input type 
	// slider
	// input
	// color
	// file
	private _inputType: { name: string, data: any, value: any };

	constructor(name: string, type ?: any){ 
		super(name);

		if(type !== undefined){
			this._inputType = type;
			this.setDefaultValue(type.value);
		}
	}

	getType(): string{
		return this._inputType.name;
	}

}
