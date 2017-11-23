/*import { CodeGenerator } from '../CodeGenerators';
import { IGraphNode } from "../IGraphNode";
import { InputPort, OutputPort } from "../IPort";
import { IFlowchart } from "../IFlowchart";
import { IProcedure } from "../IProcedure";

export class CodeGeneratorPY extends CodeGenerator{
	
		_language: string = "py";

		// required only for execution
		executeNode(node: IGraphNode, params: any): any{
			let result: any = eval("(function(){ " + this.getNodeCode(node) + "\n" + this.getFunctionCall(node, params) + "\n" + "return " + node.getName() + ";" + "})();");
			return result;// return result of the node
		}

		// required only for execution
		getDefinition(node: IGraphNode): string{
			let fn_def: string = "";

			let params :string[] = [];
			let inputs = node.getInputs();
			for(let i=0; i < inputs.length; i++ ){
				params.push(inputs[i].getName());
			}

			// make function
			fn_def += "function " + node.getName() + node.version() + "( " + params.join(", ") + " )() \n" ;
			
			return fn_def;
		}

		// required for code generation
		getNodeOutputCode(node: IGraphNode, output_idx: number): string{
			return  node.getName() + "[\"" + node.getOutputByIndex(output_idx).getName() + "\"]"; 
		}

		// required for code generation
		getFunctionCall(node: IGraphNode, params?: any): string{
			let fn_call: string = "";
			let param_values: string[] = [];

			let inputs = node.getInputs();
			for(let i=0; i < inputs.length; i++ ){
				if(inputs[i].isConnected() == true ){
					let input_name:string = inputs[i].getName();
					if( params ){
						console.log("params truthy");
						param_values.push( params[ input_name ] );
					}
					else{
						console.log("params falsy");
						param_values.push( input_name );
					}
				}
			}

			// make function call and assign to variable of same name prepended with fc
			fn_call = "fc_" + node.getName() +  "=" + node.getName() + node.version() + "( " + param_values.join(", ") + " )" ;
			
			return fn_call;
		}

		// required for code generation
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
				
				let input_code = this.generateInputPortCode(inp);
				if( input_code.length > 0){
					initializations.push( input_code );
				}

			}

			// make function
			fn_code += "def " + node.getName() + node.version() + "( " + params.join(", ") + " ) :\n" ;
			fn_code += initializations.join(";\n") + ( initializations.length > 0 ? ";" : "") + "\n";
			
			// add outputs 
			let results :string[]= [], opInits :string[] = [];
			let outputs : OutputPort[] = node.getOutputs();
			for( let o=0; o < outputs.length; o++ ){
				let oname = outputs[o].getName(); 
				results.push( "\"" + oname + "\"" + " : " + oname);

				let output_code = this.generateOutputPortCode(outputs[o]);
				if( output_code.length > 0){
					opInits.push( this.generateOutputPortCode(outputs[o]) );
				}
			}
			
			// add initialization for outputs
			console.log(opInits);
			fn_code += "\n" + opInits.join(";\n") + ";\n"; 

			// add procedure
			for( let line=0; line <  node.getProcedure().length; line ++ ){
				fn_code += "\n" +  this.generateProcedureCode(node.getProcedure()[line]); 
			}

			// add return object
			fn_code += "\n" + "return " + " { " + results.join(", ") + " } ";

			return fn_code;
		}

		//
		// get procedure code
		//
		generateProcedureCode(procedure: IProcedure){

			let code: string = ""; 
			if( procedure.getTitle() == "Data" ){
				code =  "\n" + procedure.getName() + " = " + procedure.getExpression() + ";";
			}

			return code;
		}


		// 
		//	required for code generation
		//
		generateConnectionLine(destination_node: IGraphNode, destination_port: number, source_node: IGraphNode, source_port: number): string{
			let code :string = destination_node.getInputByIndex(destination_port).getName() + "=" + "fc_" + this.getNodeOutputCode(source_node, source_port) + "\n";
			return code;
		}


		//
		//	required for code generation
		//
		generateInputPortCode(port: InputPort): string{
			if( port.isConnected() == true ) 
				return "";

			return port.getName() + " = " +  ( port.getValue() || "None" ); 
		}

		generateOutputPortCode(port: OutputPort): string{
			if( port.isConnected() == true ) 
				return "";

			return port.getName() + " = " + ( port.getValue()  || "None" ); 
		}

		//
		//	code generation
		// 	no need to alter for new languages
		//
		getCode(flow: IFlowchart){

			let fn_calls :string[]= [];
			let code_defs: string[] = [];
			let connector_lines: any = [];
			let code_block: string = "";

			let all_nodes = flow.getNodes();
			let all_conn = flow.getConnections();

			// connector lines
			for(let c=0; c < all_conn.length; c++){

				let connection_source = all_conn[c].source; 
				let connection_dest = all_conn[c].dest;

				// source is always output
				// dest is always input
				let srcNode = flow.getNode(connection_source.nodeID);
				let destNode = flow.getNode(connection_dest.nodeID);

				// create line assigning values
				let code = this.generateConnectionLine(destNode, connection_dest.connectorIndex, srcNode, connection_source.connectorIndex)

				if(connector_lines[connection_dest.nodeID] == undefined){
					connector_lines[connection_dest.nodeID] = [];
				} 
				connector_lines[connection_dest.nodeID].push(code);
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
};*/