import {IdGenerator} from '../misc/GUID';

import {IProcedure, ProcedureFactory, ProcedureTypes} from "../procedure/ProcedureModule";
import {InputPort, OutputPort} from "../port/PortModule";
import {ICodeGenerator} from "../code/CodeModule";

import {IGraphNode} from './IGraphNode';

export class GraphNode implements IGraphNode{

	private portCounter: number = 0;

	private _name: string;
	private _id: string; 
	private _version: number = 1; 

	private _type: string = undefined;

	private _inputs: InputPort[] = [];
	private _outputs: OutputPort[] = [];
	private _procedure: IProcedure[] = [];

	private _hasExecuted: boolean = false;
	private _isDisabled: boolean = false; 
	private _hasError: boolean = false;


	private _position: any;

	private _dependencies: any = [];
	private _dependencyNodes: number[] = [];


	public position: number[] = [0,0];

	constructor(name: string, type?: string){
		this._id = IdGenerator.getId();
		this._name = name;

		if(type !== undefined){
			// find in library and copy properties
		}
	}

	//	
	//
	//
	getName(): string{ 
		return this._name; 
	};

	getId(): string { 
		return this._id; 
	};

	getVersion(): number{
		return this._version;
	}

	
	getType(): string{
		return this._type;
	}

	overwrite(node: IGraphNode): number{
		this._inputs = node.getInputs(); 
		this._outputs = node.getOutputs();
		this._procedure = node.getProcedure();
		return this._version++;
	}

	update(nodeData: IGraphNode): void{

		this._id = nodeData["_id"];

		// map direct properties
		this.portCounter = nodeData["portCounter"];
		this.position = nodeData["position"];
		this._isDisabled = nodeData["_isDisabled"];

		// add inputs
		let inputs: InputPort[] = nodeData["_inputs"];
		for( let input_index in inputs ){
			let inp_data :InputPort = inputs[input_index];
			let input :InputPort = new InputPort(inp_data["_name"]);

			input.update(inp_data);
			this._inputs.push(input);
		}

		// add outputs
		let outputs: OutputPort[] = nodeData["_outputs"];
		for( let output_index in outputs ){
			let output_data: OutputPort = outputs[output_index];
			let output: OutputPort = new OutputPort(output_data["_name"]);

			output.update(output_data);
			this._outputs.push(output);
		}

		// add procedure
		let procedureArr: IProcedure[] = nodeData["_procedure"];
		for( let prodIndex in procedureArr ){
			let procedure: IProcedure = ProcedureFactory.getProcedureFromData(procedureArr[prodIndex], undefined);
			this._procedure.push(procedure);
		}

	}

	//
	//
	//
	addInput(name?: string): number{

		let default_name = this._name + "_in" + this.portCounter; 

		if( name !== undefined ){
			default_name = name;
		}

		let inp = new InputPort(default_name);
		this._inputs.push(inp);

		this.portCounter++;
		
		return this._inputs.length;
	}

	addOutput(name?: string): number{ 

		let default_name = this._name + "_out" + this.portCounter; 

		if(name !== undefined){
			default_name = name;
		}

		let oup = new OutputPort(default_name);
		this._outputs.push(oup);
		
		this.portCounter++;
		
		return this._outputs.length; 
	}

	deleteInput(input_port_index: number): number{
		this._inputs.splice(input_port_index, 1);
		return this._inputs.length; 
	}

	deleteOutput(output_port_index: number): number{ 
		this._outputs.splice(output_port_index, 1);
		return this._inputs.length; 
	}

	getInputs(): InputPort[]{
		return this._inputs;
	}

	getOutputs(): OutputPort[]{
		return this._outputs;
	}

	getInputByIndex(input_port_index: number): InputPort{
		return this._inputs[input_port_index];
	}

	getOutputByIndex(output_port_index: number): OutputPort{
		return this._outputs[output_port_index];
	}

	getProcedure(): IProcedure[]{
		return this._procedure;
	}

	addProcedure(prod: IProcedure): void{
		this._procedure.push(prod);
	}

	addProcedureAtPosition(prod: IProcedure, index: number): void{
		this._procedure.splice(index, 0, prod);
	}

	deleteProcedure(prod: IProcedure): void{
		this._procedure = this._procedure.filter(function(child: IProcedure){ 
			if(child === prod){
				return false; 
			}
			else{
				return true;
			}
		});
	}

	deleteProcedureAtPosition(index: number): void{
		this._procedure.splice(index, 1);
	}


	//
	//
	//
	isDisabled(): boolean{
		return this._isDisabled;
	}

	enable(): void{
		this._isDisabled = false; 
	}

	disable(): void{
		this._isDisabled = true;
	}


	hasExecuted(): boolean{
		return this._hasExecuted; 
	}

	reset(): boolean{
		this._hasExecuted = false;
		this._hasError = false;
		return (this._hasExecuted == false); 
	}

	hasError(): boolean{
		return this._hasError; 
	}

	//
	//
	//
	/*isIndependent(): boolean{
		if(this._dependencies.length > 0)
			return false; 
		return true;
	}

	addDependency(node_port_input_idx : number[]){

		if( this._dependencyNodes.indexOf( node_port_input_idx[0] ) == -1){
			this._dependencyNodes.push(node_port_input_idx[0]);
		}

		this._dependencies.push(node_port_input_idx);
	}
	
	removeDependency(node_port_idx: number[]){
		
	}

	getDependencies(): number[][]{
		return this._dependencies;
	}

	
	getDependencyNodes(): number[]{ 
		return this._dependencyNodes 
	};
	
	rank(): number{ 
		return this._dependencyNodes.length 
	};*/


	//
	//
	//
	execute(code_generator: ICodeGenerator, params ?:any ): void{

		// use code generator to execute code
		let result: any  = code_generator.executeNode(this, params);

		// add results to this node
		for( let n=0;  n < this._outputs.length; n++ ){
			let output_port = this._outputs[n];
			output_port.setComputedValue(result[output_port.getName()]);
		}

		this._hasExecuted = true;

	}

	getResult():any{
		let final_values :any = {};
		for(let o=0; o < this._outputs.length; o++ ){
			let output :OutputPort = this._outputs[o];
			final_values[output.getName()] = output.getValue();
		}

		return final_values;
	}

}
