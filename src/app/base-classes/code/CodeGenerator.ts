import { Injector } from '@angular/core';
import { ModuleService } from '../data/module.service'; 
import { IFlowchart } from "./IFlowchart";
import { IGraphNode } from "./IGraphNode";
import { InputPort, OutputPort } from "./IPort";
import { IProcedure } from "./IProcedure";

import {ICodeGenerator} from './ICodeGenerator';

export class CodeGenerator implements ICodeGenerator{

	private _language: string; 
	private module_service: ModuleService;

	constructor(module_service: ModuleService){ this.module_service = module_service;  };

	getLanguage(): string{
		return this._language; 
	}

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

	// takes a flowchart and generates some code string 
	getCode(flowchart:IFlowchart) :string{
		throw Error("Not implemented");
	};

}
