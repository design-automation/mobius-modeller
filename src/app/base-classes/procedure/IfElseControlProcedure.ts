import {ControlProcedure} from "./ControlProcedure";
import {IProcedure} from "./IProcedure";

export class IfElseControlProcedure extends ControlProcedure{
	private _ifExpression: string; 

	constructor(d){
		super(d);

		if(super.getNodes().length == 0 && d.controlType == "if else"){
			let if_control: IProcedure = new IfElseControl({title: "Control", controlType: "if", allowDrag: false })
			let else_control: IProcedure = new IfElseControl({title: "Control", controlType: "else", allowDrag: false})
			super.addChild(if_control);
			super.addChild(else_control);
		}

		// for loops
		this._ifExpression = d.ifExpression || undefined;
	}


	getExpression(): any{
		return this._ifExpression; 
	}

	setExpression(expression: string): void{
		this._ifExpression = expression;
	}

}