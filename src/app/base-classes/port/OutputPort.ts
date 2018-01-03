import {Port} from "./Port";
import {OutputPortTypes} from "./OutputPortTypes";

export class OutputPort extends Port{

	constructor(name: string, type?: OutputPortTypes){
		super(name);

		if(type !== undefined){
			this._type = type;
		}
		else{
			this._type = OutputPortTypes.Console;
		}
	}

}