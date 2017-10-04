import { InputPort, OutputPort } from "./IPort";
import { IProcedure, Procedure, ProcedureFactory } from "./IProcedure";

export interface INode{

	getID(): number;
	isDisabled(): boolean;
	hasError(): boolean; 
	getType(): string; 
	version(): number; 
	isSubgraph(): boolean;
	overwrite(): boolean;
	getName(): string; 
	isIndependent(): boolean;

	setStatus(code: number): number;	// 0 - not executed; 1 - executed
	getStatus(): number;

	getInputs(): InputPort[];
	getOutputs(): OutputPort[];
	getInputByIndex(idx:number): InputPort;
	getOutputByIndex(idx:number): OutputPort;
	addInput(name: string, connected: boolean, data?:any): number;
	addOutput(name: string, connected: boolean): number;
	removeInput(): number;
	removeOutput(): number;

	addDependency(node_port_idx: number[]): void;
	removeDependency(node_port_idx: number[]): void;
	getDependencies(): number[][];

	getProcedure(): any;
	addProcedureBlock(lines: any): void;
	addProcedureLine(line: IProcedure): void;
}

export class Node implements INode{

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

	private _prodFactory: ProcedureFactory = new ProcedureFactory();

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
		this._disabled = data.disabled || false; 
		this._error = data.error || false; 
		this._position = [data.x || 0, data.y || 0];
		this._type = data.type; 
		this._version = data.version || 1;
		this._subgraph = data.subgraph || false;

		this._inputs = [];
		this._outputs = [];
		this._procedure = [];
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

	addDependency(node_port_idx){
		this._dependencies.push(node_port_idx);
	}

	removeDependency(node_port_idx: number[]){
		
	}

	getDependencies(): number[][]{
		return this._dependencies;
	}

	addInput(name: string, connected:boolean, data?: any): number{
		let inp = new InputPort(this._id, name, connected, this._inputs.length, data);
		this._inputs.push(inp);
		return this._inputs.length; 
	}

	addOutput(name: string, connected: boolean): number{ 
		let oup = new OutputPort(this._id, name, connected, this._outputs.length);
		this._outputs.push(oup);
		return this._outputs.length; 
	}

	getInputByIndex(id:number): InputPort{
		return this._inputs[id];
	}

	getOutputByIndex(id:number): OutputPort{
		return this._outputs[id];
	}

	removeInput(): number{
		return this._inputs.length; 
	}

	removeOutput(): number{ 
		return this._outputs.length; 
	}

	addProcedureBlock(data: any): void{
		for(let p=0; p < data.length; p ++){
			let d = data[p];
			let prod = this._prodFactory.getProcedure(d);
			this._procedure.push(prod);
		}
	}		

	addProcedureLine(d: any): void{
		let prod = new Procedure(d.id, d.dataName, d.dataValue, d.selected, d.title, d.type);
		this._procedure.push(prod);
	}

}


