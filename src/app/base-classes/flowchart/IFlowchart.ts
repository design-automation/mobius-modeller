//
// A flowchart is a collection of graph-nodes. A flowchart maintains the information about how the nodes are connected,
// is responsible for the execution of the nodes in the correct order and maintaining the state of the various flowchart components - 
// if a node is disabled, node positions etc. 
//
// The code generated will be dependent on the code-generator being used by the flowchart-service
// 
//
import {IGraphNode} from '../nodes/IGraphNode';
import {ICodeGenerator}  from '../code/ICodeGenerator';

export interface IFlowchart{

	// gets the author of the flowchart
	getAuthor(): string; 
	getDetails(): string;

	// get / set
	addNode(node?: IGraphNode): number;
	addEdge(outputNode: number[], inputNode: number[]): number;
	deleteNode(nodeIndex: number): number;
	deleteEdge(edgeIndex: number): number;

	getNodes(): IGraphNode[];
	getEdges(): [number[]];
	getNodeByIndex(index: number): IGraphNode;

	// output related
	getDisplayCode(code_generator: ICodeGenerator) :string;
	execute(code_generator: ICodeGenerator): boolean;
	save(code_generator: ICodeGenerator): string;

};