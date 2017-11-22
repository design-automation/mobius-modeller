//
// A flowchart is a collection of graph-nodes. A flowchart maintains the information about which nodes present, 
// how the nodes are connected,
// and is responsible for the execution of the nodes in the correct order.
//
// The execution of the flowchart is dependent on the code-generator provided to it.
//
// The code generated will be dependent on the code-generator being used by the flowchart-service
// 
//
import {IGraphNode, IEdge} from '../node/NodeModule';
import {ICodeGenerator}  from '../code/CodeModule';

export interface IFlowchart{

	// gets the author of the flowchart
	getAuthor(): string; 
	getSummary(): string;

	// icodegenerator

	// get / set
	addNode(node?: IGraphNode): number;
	addEdge(outputAddress: number[], inputAddress: number[]): number;
	deleteNode(nodeIndex: number): number;
	deleteEdge(edgeIndex: number): number;

	getNodes(): IGraphNode[];
	getEdges(): IEdge[];
	getNodeByIndex(index: number): IGraphNode;
	getEdgeByIndex(index: number): IEdge;


	//reset 
	reset(): void;

	// output related
	getDisplayCode(code_generator: ICodeGenerator) :string;
	execute(code_generator: ICodeGenerator): boolean;
	

	// read / write
	save(): void;
	readFromJSON(file: string): void;

};