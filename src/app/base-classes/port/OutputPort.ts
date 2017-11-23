import {Port} from "./Port";
import {PortTypes} from "./PortTypes";

export class OutputPort extends Port{

	constructor(name: string){
		super(name);
	}

	getType(): PortTypes{
		return PortTypes.Output;
	}

}