import { InputPort, OutputPort } from "./IPort";
import { ICodeGenerator } from "./CodeGenerators";
import { IProcedure, Procedure, ProcedureFactory } from "./IProcedure";

export interface IGraphNode{

	getID(): number;
	isDisabled(): boolean;
	hasError(): boolean; 
	getType(): string; 
	version(): number; 
	isSubgraph(): boolean;
	overwrite(): boolean;
	getName(): string; 
	isIndependent(): boolean;

	reset(): void;

	setStatus(code: number): number;	// 0 - not executed; 1 - executed
	getStatus(): number;

	getInputs(): InputPort[];
	getOutputs(): OutputPort[];
	getInputByIndex(idx:number): InputPort;
	getOutputByIndex(idx:number): OutputPort;

	addInput(): InputPort;
	addOutput(name: string, connected: boolean): number;
	removeInput(port: InputPort): number;
	removeOutput(): number;

	addDependency(node_port_input_idx: number[]): void;
	removeDependency(node_port_idx: number[]): void;
	getDependencies(): number[][];

	getDependencyNodes(): number[];
	rank(): number;

	getProcedure(): any;
	addProcedureBlock(lines: any): void;
	addProcedureLine(prod: IProcedure): void;
	removeProcedureLine(lineIndex: number): void;

	executeNode(code_generator: ICodeGenerator, params?: any): void;
	getValue(): any;
}

export class GraphNode implements IGraphNode{

	private _id: number; 
	private _name: string;
	private _status: number = 0;
	private _disabled: boolean = false; 
	private _error: boolean = false;
	private _type: string;
	private _inputs: InputPort[];
	private _outputs: OutputPort[];
	private _position: number[];
	private _subgraph: boolean;
	private _overwrite: boolean;
	private _version: number;
	private _procedure: IProcedure[];
	private _dependencies: any = [];
	private _dependencyNodes: number[] = [];

	private portCounter: number = 0;

	private _prodFactory: ProcedureFactory = ProcedureFactory.getInstance();

	getID(): number { return this._id; };
	isDisabled(): boolean{ return this._disabled; };
	hasError(): boolean{ return this._error; };
	getType(): string{ return this._type };
	version(): number{ return 1 };
	isSubgraph(): boolean{ return this._subgraph; };
	overwrite(): boolean{ return this._overwrite; };
	getName(): string{ return this._name; };

	getInputs(): InputPort[]{ return this._inputs };
	getOutputs(): OutputPort[]{ return this._outputs };

	getProcedure(): any{ return this._procedure; };


	constructor(id: number, name: string, data?: any){ 
		this._id = id;
		this._name = name;
		 
		this._disabled = data ? data.disabled || false : false; 
		this._error = data ? data.error || false : false; 
		this._position = data ? [data.x || 0, data.y || 0] : [0,0];
		this._type = data ? data.type : undefined; 
		this._version = data ? data.version || 1 : 1;
		this._subgraph = data ? data.subgraph || false : false;

		this._inputs = [];
		this._outputs = [];
		this._procedure = [];
	}

	reset(): void{
		this._status = 0; 
		for(let c=0; c < this._outputs.length; c++){
			this._outputs[c].reset();
		}
	}

	isIndependent(): boolean{
		if(this._dependencies.length > 0)
			return false; 
		return true;
	}

	setStatus(code: number){ 
		this._status = code; 
		return this._status; 
	}

	getStatus(): number{
		return this._status;
	}

	addDependency(node_port_input_idx : number[]){

		if( this._dependencyNodes.indexOf( node_port_input_idx[0] ) == -1){
			this._dependencyNodes.push(node_port_input_idx[0]);
		}

		this._dependencies.push(node_port_input_idx);
	}

	removeDependency(node_port_idx: number[]){
		
	}

	rank(): number{ return this._dependencyNodes.length };
	getDependencyNodes(): number[]{ return this._dependencyNodes };

	getDependencies(): number[][]{
		return this._dependencies;
	}

	addInput(): InputPort{
		let default_name = this._name + "_in" + this.portCounter; 
		let inp = new InputPort(this._id, default_name, this.portCounter);
		this._inputs.push(inp);
		this.portCounter++;
		return inp;
	}

	addOutput(name: string, connected: boolean): number{ 
		let default_name = this._name + "_out" + this.portCounter; 
		let oup = new OutputPort(this._id, default_name, this.portCounter);
		this._outputs.push(oup);
		this.portCounter++;
		return this._outputs.length; 
	}

	getInputByIndex(id:number): InputPort{
		for(let i=0; i < this._inputs.length; i++){
			let inp = this._inputs[i]
			if(inp.getId() == id){
				return inp;
			}
		}
	}

	getOutputByIndex(id:number): OutputPort{
		for(let i=0; i < this._outputs.length; i++){
			let out = this._outputs[i]
			if(out.getId() == id){
				return out;
			}
		}
	}

	removeInput(port: InputPort): number{
		let index = port.getId();
		for(let i=0; i < this._inputs.length; i++){
			let inp = this._inputs[i]
			if(inp.getId() == index){
				this._inputs.splice(i, 1);
				break;
			}
		}
		return this._inputs.length; 
	}

	removeOutput(): number{ 
		return this._outputs.length; 
	}

	addProcedureBlock(data: any, module ?: string): void{
		for(let p=0; p < data.length; p ++){
			let d = data[p];
			d.module = module;
			let prod = this._prodFactory.getProcedure(d);
			this._procedure.push(prod);
		}
	}	

	addProcedureLine(prod: IProcedure): void{
		this._procedure.push(prod);
	}

	removeProcedureLine(index: number): void{
		this._procedure.splice(index, 1);
	}

	executeNode(code_generator: ICodeGenerator, params ?:any ): void{

		// use code generator to execute code
		let result: any  = code_generator.executeNode(this, params);

		// add results to this node
		for( let n=0;  n < this._outputs.length; n++ ){
			let output_port = this._outputs[n];
			output_port.setDValue(result[output_port.getName()]);
		}

		// change status of the node
		this.setStatus(1);
		
	}

	getValue():any{
		let final_values :any = {};
		for(let o=0; o < this._outputs.length; o++ ){
			let output :OutputPort = this._outputs[o];
			final_values[output.getName()] = output.getValue();
		}

		return final_values;
	}

}


