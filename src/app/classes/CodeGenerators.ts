import { IFlowchart } from "./IFlowchart";
import { INode } from "./INode";
import { InputPort, OutputPort } from "./IPort";
import { IProcedure } from "./IProcedure";

export interface ICodeGenerator{

		_language: string;

		executeNode(node: INode, params: any): any;

		getFunctionCall(node: INode, params?: any): string;
		getDefinition(node: INode): string;
		getNodeCode(node: INode): string;
		getNodeOutputCode(node: INode, output_idx: number): string;
		generateConnectionLine(destination_node: INode, destination_port: number, source_node: INode, source_port: number): string;
		generateProcedureCode(procedure: IProcedure): string;
		generateInputPortCode(port: InputPort): string;
		generateOutputPortCode(port: OutputPort): string;

		// takes a flowchart and generates some code string 
		getCode(flowchart:IFlowchart) :string;

};

