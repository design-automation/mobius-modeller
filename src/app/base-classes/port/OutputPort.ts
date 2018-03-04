import {Port} from "./Port";
import {OutputPortTypes} from "./OutputPortTypes";

export class OutputPort extends Port{

	constructor(name: string, type?: OutputPortTypes, isFunction ?: boolean){

		super(name);

		if(isFunction == true){
			this._isFunction = true;
		}

		if(type !== undefined){
			this._type = type;
		}
		else{
			this._type = OutputPortTypes.Text;
		}
	}

}