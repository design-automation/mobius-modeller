import {Port} from "./Port";
import {OutputPortTypes} from "./OutputPortTypes";

export class OutputPort extends Port{

	private _viewer: OutputPortTypes;

	constructor(name: string, type?: OutputPortTypes){
		super(name);

		if(type !== undefined){
			this._viewer = type;
		}
		else{
			this._viewer = OutputPortTypes.Console;
		}
	}

	getType(): OutputPortTypes{
		return this._viewer;

	}

	setType(type: OutputPortTypes): void{
		super.setType(type);
		this._viewer = type;
	}

}