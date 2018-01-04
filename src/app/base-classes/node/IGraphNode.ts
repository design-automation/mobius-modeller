import {ICodeGenerator} from "../code/CodeModule";
import {InputPort, OutputPort} from "../port/PortModule";
import {IProcedure} from "../procedure/ProcedureModule";

export interface IGraphNode{

	position: number[];

	// prototype
	getName(): string; 
	getId(): string;
	getVersion(): number; 

	setName(name: string): void;

	getType(): string; // id of another node - if undefined, means not derived from another
	
	overwrite(node: IGraphNode): number; 
	update(nodeData: IGraphNode);

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
	addProcedureAtPosition(prod: IProcedure, index: number): void;
	deleteProcedure(prod: IProcedure);
	deleteProcedureAtPosition(lineIndex: number): void;

	//
	// flowchart specific
	//
	isDisabled(): boolean;
	disable(): void;
	enable(): void
	hasExecuted(): boolean;
	reset(): void;
	hasError(): void; 

	// ??
	/*addDependency(node_port_input_idx: number[]): void;
	removeDependency(node_port_idx: number[]): void;
	getDependencies(): number[][];
	getDependencyNodes(): number[];
	rank(): number;*/


	execute(code_generator: ICodeGenerator,  params ?:any): void;
	getResult(): Object;

}