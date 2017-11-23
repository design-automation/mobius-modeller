import { CodeGenerator } from '../CodeGenerator';

import { IFlowchart } from "../../flowchart/FlowchartModule";
import { IGraphNode, IEdge } from "../../node/NodeModule";
import { IProcedure, ProcedureTypes, IComponent } from "../../procedure/ProcedureModule";
import { InputPort, OutputPort } from "../../port/PortModule";


import * as ts from "typescript";

export class CodeGeneratorJS extends CodeGenerator{

		constructor(){ 	super("js");	}

		//
		//	gets the display code for the flowchart
		//
		getDisplayCode(flow: IFlowchart){

			let fn_calls :string[]= [];
			let code_defs: string[] = [];
			let connector_lines: any = [];
			let code_block: string = "";

			let all_nodes: IGraphNode[] = flow.getNodes();
			let all_edges: IEdge[] = flow.getEdges();

			// connector lines
			for(let c=0; c < all_edges.length; c++){

				let edge: IEdge = all_edges[c];
				let input_node: IGraphNode = flow.getNodeByIndex(edge.input_address[0]);
				let output_node: IGraphNode = flow.getNodeByIndex(edge.output_address[0]);

				// create line assigning values
				let code = this.generateConnectionLine(input_node, edge.input_address[1], 
														output_node, edge.output_address[1]);

				if(connector_lines[edge.input_address[0]] == undefined){
					connector_lines[edge.input_address[0]] = [];
				} 

				connector_lines[edge.input_address[0]].push(code);
			}

			// get all the codes of the different functions and the function calls 
			
			for(let c=0; c < all_nodes.length; c++){
				// check inputs connected to outputs
				var node = all_nodes[c];
				code_defs.push(this.getNodeCode(node));

				if(connector_lines[c] !== undefined){
					fn_calls.push(connector_lines[c].join(";\n"));
				}

				fn_calls.push( this.getFunctionCall(node) );
			}

			code_block = code_defs.join(";\n") + fn_calls.join(";\n") + ";";

			// check if code works by uncommenting this line
			// eval(code_block);
			
			return code_block;
		}



		getFunctionCall(node: IGraphNode, params?: any): string{
			let fn_call: string = "";
			let param_values: string[] = [];

			let inputs = node.getInputs();
			for(let i=0; i < inputs.length; i++ ){
				if(inputs[i].isConnected() == true ){
					let input_name:string = inputs[i].getName();
					if( params ){
						param_values.push( params[ input_name ] );
					}
					else{
						param_values.push( input_name );
					}
				}
			}

			// make function call and assign to variable of same name
			fn_call = "let " + node.getName() +  "=" + node.getName() + node.getVersion() + "( " + param_values.join(", ") + " )" ;
			
			return fn_call;
		}

		getDefinition(node: IGraphNode): string{
			let fn_def: string = "";

			let params :string[] = [];
			let inputs = node.getInputs();
			for(let i=0; i < inputs.length; i++ ){
				params.push(inputs[i].getName());
			}

			// make function
			fn_def += "function " + node.getName() + node.getVersion() + "( " + params.join(", ") + " )() \n" ;
			
			return fn_def;
		}

		getNodeCode(node: IGraphNode): string{
			let fn_code :string = "";

			// add initializations
			// get params
			let params :string[] = [];
			let initializations :string[] = [];
			let inputs :InputPort[] = node.getInputs();
			for(let i=0; i < inputs.length; i++ ){
				let inp = inputs[i];

				if( inp.isConnected() == true ){
					params.push(inp.getName());
				}
				
				initializations.push( this.generateInputPortCode(inp) );

			}

			// make function
			fn_code += "function " + node.getName() + node.getVersion() + "( " + params.join(", ") + " ) { \n" ;
			fn_code += initializations.join(";\n") + ";\n";
			
			// add outputs 
			let results :string[]= [], opInits :string[] = [];
			let outputs : OutputPort[] = node.getOutputs();
			for( let o=0; o < outputs.length; o++ ){
				let oname = outputs[o].getName(); 
				results.push( oname + " : " + oname);
				opInits.push( this.generateOutputPortCode(outputs[o]) )
			}
			
			// add initialization for outputs
			fn_code += "\n" + opInits.join(";\n") + ";\n"; 

			// add procedure
			for( let line=0; line <  node.getProcedure().length; line ++ ){
				fn_code += "\n" +  this.generateProcedureCode(node.getProcedure()[line]); 
			}

			// add return object
			fn_code += "\n" + "return " + " { " + results.join(", ") + " } " + ";";

			// ending
			fn_code += "\n }"

			return fn_code;
		}

		getNodeOutputCode(node: IGraphNode, output_idx: number): string{
			return node.getName() + "." + node.getOutputByIndex(output_idx).getName(); 
		}

		generateConnectionLine(destination_node: IGraphNode, destination_port: number, source_node: IGraphNode, source_port: number): string{
			let code :string = "let " + destination_node.getInputByIndex(destination_port).getName() + "=" + this.getNodeOutputCode(source_node, source_port) + "\n";
			return code;
		}

		generateProcedureCode(procedure: IProcedure){

			// change based on type
			let code: string; 
			if(procedure.getType() == ProcedureTypes.Data){
				code =  "\n" + procedure.getLeftComponent().expression + " = " + procedure.getRightComponent().expression + ";";
			}
			else if(procedure.getType() == ProcedureTypes.Action){
				let paramList :string[]= [];
				let params  = procedure.getRightComponent().params;
				for( let p=0; p < params.length; p++){
					let param = params[p];
					if(param.value !== undefined)
						paramList.push(param.value)
					else
						paramList.push(param.type)
				}

				let right :IComponent = procedure.getRightComponent();
				code = procedure.getLeftComponent().expression 
						+ " = " + right.module.trim()
						+ "." + right.fn_name + "( " + paramList.join(",") + " );\n";
			}
			else if(procedure.getType() == ProcedureTypes.ForLoopControl){
				code = "";
				// todo
				throw Error("Not Implemeented")
			}
			else if(procedure.getType() == ProcedureTypes.IfElseControl){
				code = "";
				// todo
				throw Error("Not Implemeented")
			}
			else if(procedure.getType() == ProcedureTypes.IfControl){
				code = "";
				// todo
				throw Error("Not Implemeented")
			}
			else if(procedure.getType() == ProcedureTypes.ElseControl){
				code = "";
				// todo
				throw Error("Not Implemeented")
			}

			return code;
		}


		//
		//	required for code generation
		//
		generateInputPortCode(port: InputPort): string{
			if( port.isConnected() == true ) 
				return "";

			return "let " + port.getName() + " = " + port.getValue(); 
		}

		generateOutputPortCode(port: OutputPort): string{
			if( port.isConnected() == true ) 
				return "";

			return "let " + port.getName() + " = " + port.getValue(); 
		}

		executeNode(node: IGraphNode, params: any): any{
			//let gis = this._modules["gis"];

			let result: any = eval("(function(){ \
						" + this.getNodeCode(node) + "\n" + this.getFunctionCall(node, params) + "\n" + "return " + node.getName() + ";" + "})(); \
						");
			return result;//result;// return result of the node
		}

};