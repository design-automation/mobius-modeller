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

	setPosition(pos: any): void;
	getPosition(): any;
}



