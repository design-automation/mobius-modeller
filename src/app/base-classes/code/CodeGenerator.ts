import { IModule } from './computation-modules/IModule'; 

import { ICodeGenerator } from "./ICodeGenerator";

import { IFlowchart } from "../flowchart/FlowchartModule";
import { IGraphNode } from "../node/NodeModule";
import { IProcedure } from "../procedure/ProcedureModule";
import { InputPort, OutputPort } from "../port/PortModule";

export abstract class CodeGenerator implements ICodeGenerator{

	private _language: string; 
	private _modules: IModule[];

	constructor(language: string){ 
		this._language = language;
	};

	setModules(modules: IModule[]){
		this._modules = modules;
	}

	getLanguage(): string{
		return this._language; 
	}

	// takes a flowchart and generates some code string 
	getDisplayCode(flowchart:IFlowchart) :string{
		throw Error("Not implemented");
	};

	executeNode(node: IGraphNode, params: any): any{
		throw Error("Not implemented");
	};

	getFunctionCall(node: IGraphNode, params?: any): string{
		throw Error("Not implemented");
	};

	getDefinition(node: IGraphNode): string{
		throw Error("Not implemented");
	};
	
	getNodeCode(node: IGraphNode): string{
		throw Error("Not implemented");
	};

	getNodeOutputCode(node: IGraphNode, output_idx: number): string{
		throw Error("Not implemented");
	};

	generateConnectionLine(destination_node: IGraphNode, destination_port: number, source_node: IGraphNode, source_port: number): string{
		throw Error("Not implemented");
	};

	generateProcedureCode(procedure: IProcedure): string{
		throw Error("Not implemented");
	};

	generateInputPortCode(port: InputPort): string{
		throw Error("Not implemented");
	};

	generateOutputPortCode(port: OutputPort): string{
		throw Error("Not implemented");
	};



}
