import {Port} from "./Port";

export class OutputPort extends Port{

	constructor(name: string){
		super(name);
	}

	getType(): string{
		return "output";
	}

}