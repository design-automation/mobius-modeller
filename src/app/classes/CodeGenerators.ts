import { Injector } from '@angular/core';
import { ModuleService } from '../data/module.service'; 
import { IFlowchart } from "./IFlowchart";
import { INode } from "./INode";
import { InputPort, OutputPort } from "./IPort";
import { IProcedure } from "./IProcedure";

export interface ICodeGenerator{

		_language: string;
		module_service: ModuleService;

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


export class CodeGenerator implements ICodeGenerator{

	_language: string; 
	module_service: ModuleService;

	constructor(module_service){ this.module_service = module_service;  };

	executeNode(node: INode, params: any): any{
		throw Error("Not implemented");
	};

	getFunctionCall(node: INode, params?: any): string{
		throw Error("Not implemented");
	};

	getDefinition(node: INode): string{
		throw Error("Not implemented");
	};
	
	getNodeCode(node: INode): string{
		throw Error("Not implemented");
	};

	getNodeOutputCode(node: INode, output_idx: number): string{
		throw Error("Not implemented");
	};

	generateConnectionLine(destination_node: INode, destination_port: number, source_node: INode, source_port: number): string{
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

	// takes a flowchart and generates some code string 
	getCode(flowchart:IFlowchart) :string{
		throw Error("Not implemented");
	};

}
