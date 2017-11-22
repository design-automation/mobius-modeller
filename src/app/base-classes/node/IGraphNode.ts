import {ICodeGenerator} from "../code/CodeModule";
import {InputPort, OutputPort} from "../port/PortModule";
import {IProcedure} from "../procedure/ProcedureModule";

export interface IGraphNode{

	// prototype
	getName(): string; 
	getId(): string;
	getVersion(): number; 

	getType(): string; // id of another node - if undefined, means not derived from another
	
	overwrite(node: IGraphNode): number; 

	// get / set
	addInput(name?: string): number;
	addOutput(name?: string): number;
	deleteInput(inputIndex: number): number;
	deleteOutput(outputIndex): number;

	getInputs(): InputPort[];
	getOutputs(): OutputPort[];
	getInputByIndex(input_port_index: number): InputPort;
	getOutputByIndex(output_port_index: number): OutputPort;


	getProcedure(): IProcedure[];
	addProcedure(prod: IProcedure): void;
	deleteProcedure(lineIndex: number): void;

	//
	// flowchart specific
	//
	toggle(): boolean;
	isDisabled(): boolean;
	hasExecuted(): boolean;
	reset(): void;
	hasError(): boolean; 

	// ??
	isIndependent(): boolean;
	addDependency(node_port_input_idx: number[]): void;
	removeDependency(node_port_idx: number[]): void;
	getDependencies(): number[][];
	getDependencyNodes(): number[];
	rank(): number;

	setPosition(pos: any): void;
	getPosition(): any;
	
	execute(code_generator: ICodeGenerator,  params ?:any): void;
	getResult(): Object;

}