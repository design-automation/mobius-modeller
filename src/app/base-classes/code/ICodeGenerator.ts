//
//	A Code Generator works directly on a graph-node containing procedures to generate the corresponding code in a particular language
//  It may or may not use custom modules
//  A code generator uses each element of a flowchart to string together code
//
import { IFlowchart } from "../flowchart/FlowchartModule";
import { IGraphNode } from "../node/NodeModule";
import { IProcedure } from "../procedure/ProcedureModule";
import { InputPort, OutputPort } from "../port/PortModule";
import { IModule } from "./computation-modules/IModule";

export interface ICodeGenerator{

		// gets the language in which the code is generated
		getLanguage(): string;
		setModules(modules: IModule[]): void;

		// takes a flowchart and generates some code string 
		getDisplayCode(flowchart: IFlowchart) :string;



		// various functions to generate different parts of the code
		getDefinition(node: IGraphNode): string;
		getFunctionCall(node: IGraphNode, params?: any): string;

		getNodeCode(node: IGraphNode): string;
		getNodeOutputCode(node: IGraphNode, output_idx: number): string;

		generateConnectionLine(input_node: IGraphNode, input_port: number, output_node: IGraphNode, output_port: number): string;
		generateProcedureCode(procedure: IProcedure): string;

		generateInputPortCode(port: InputPort): string;
		generateOutputPortCode(port: OutputPort): string;



		// takes a node and executes the code
		executeNode(node: IGraphNode, params: any, Modules: IModule): any;


};