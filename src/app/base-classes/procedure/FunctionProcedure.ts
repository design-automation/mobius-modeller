import {Procedure} from "./Procedure";
import {IProcedure} from "./IProcedure";
import {ProcedureTypes} from "./ProcedureTypes";
import {IComponent} from "./IComponent";
import {IGraphNode} from "../node/IGraphNode";
import {InputPort} from "../port/InputPort";

export class FunctionProcedure extends Procedure{

	private node: IGraphNode = undefined;
	private port: InputPort = undefined;

	constructor(data?: {node: IGraphNode, port: InputPort}){

		super(ProcedureTypes.Function, false); 

		if(data){
			this.node = data.node;
			this.port = data.port;
		}

		let left: IComponent = { 
									expression: "new_variable", 
									isAction: false, 
									module: undefined, 
									category: undefined, 
									fn_name: undefined,
									params: undefined
								};

		let right: IComponent = { 
									expression: undefined, 
									isAction: true, 
									module: undefined, 
									category: undefined,
									fn_name: undefined,
									params: this.node ? [this.node.getInputs().map(function(inp){ return " "; })] : []
								}

		super.setLeftComponent(left);
		super.setRightComponent(right);
	}

	getFunctionName(): string{
		return this.port.getName();		
	}

	updateParams(): string[]{
		let inp_range = this.node.getInputs().map(function(inp){
			return " ";
		})
		return inp_range;
	}

	getOutputs(): string[]{
		let outputs = this.node.getOutputs().filter(function(o){
			return !o.isFunction();
		}).map(function(output){
			return output.getName();
		});


		//this._rightComponent.category = outputs[0];

		return outputs;
	}	

	update(prodData: any, parent: IProcedure): void{
		super.update(prodData, parent);

		this._leftComponent = 	{ 
									expression: prodData._leftComponent.expression,
								 	isAction: false, 
								 	module: undefined, 
								 	category: undefined, 
								 	fn_name: undefined,
								 	params: undefined
								};


		this._rightComponent =  {  
									expression: prodData._rightComponent.expression, 
									isAction: true, 
									module: undefined, 
									category: prodData._rightComponent.category, 
									fn_name: undefined,
									params: prodData._rightComponent.params
								};
	}

}