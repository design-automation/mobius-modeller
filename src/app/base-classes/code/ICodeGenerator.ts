//
//	A Code Generator works directly on a graph-node containing procedures to generate the corresponding code in a particular language
//  It may or may not use custom modules from a module service
//  A code generator is used by a Flowchart to generate code
//
import { IFlowchart } from "../flowchart/IFlowchart";
import { IGraphNode } from "../nodes/IGraphNode";
import { IProcedure } from "./procedure/IProcedure";

export interface ICodeGenerator{

		// gets the language in which the code is generated
		getLanguage(): string;

		// takes a flowchart and generates some code string 
		getCode(flowchart: IFlowchart) :string;

		// takes a node and executes the code
		executeNode(node: IGraphNode, params: any): any;

		// various functions to generate different parts of the code
		getDefinition(node: IGraphNode): string;
		getFunctionCall(node: IGraphNode, params?: any): string;

		getNodeCode(node: IGraphNode): string;
		getNodeOutputCode(node: IGraphNode, output_idx: number): string;

		generateConnectionLine(destination_node: IGraphNode, destination_port: number, source_node: IGraphNode, source_port: number): string;
		generateProcedureCode(procedure: IProcedure): string;

		generateInputPortCode(port: InputPort): string;
		generateOutputPortCode(port: OutputPort): string;

};