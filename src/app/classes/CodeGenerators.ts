import { IFlowchart } from "./IFlowchart";
import { INode } from "./INode";
import { InputPort, OutputPort } from "./IPort";

export interface ICodeGenerator{

		_language: string;

		executeNode(node: INode, params: any): any;

		getFunctionCall(node: INode): string;
		getDefinition(node: INode): string;
		getNodeCode(node: INode): string;
		getNodeOutputCode(node: INode, output_idx: number): string;
		generateConnectionLine(destination_node: INode, destination_port: number, source_node: INode, source_port: number): string;

		// takes a flowchart and generates some code string 
		getCode(flowchart:IFlowchart) :string;

};


export class CodeGeneratorJS implements ICodeGenerator{
		_language: string = "js";

		executeNode(node: INode, params: any): any{

			let result: any;

			if( params == null ){
				result = eval("(function(){ " + this.getNodeCode(node) + "\n" + this.getFunctionCall(node) + "\n" + "return " + node.getName() + ";" + "})();");
			}
			else{
				
			}

			return result;// return result of the node
		}

		getFunctionCall(node: INode): string{
			let fn_call: string = "";

			let params :string[] = [];
			let inputs = node.getInputs();
			for(let i=0; i < inputs.length; i++ ){
				if(inputs[i].isConnected() == true )
					params.push(inputs[i].getName());
			}

			// make function call and assign to variable of same name
			fn_call = "let " + node.getName() +  "=" + node.getName() + node.version() + "( " + params.join(", ") + " )" ;
			
			return fn_call;
		}

		getDefinition(node: INode): string{
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

		getNodeCode(node: INode): string{
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
				
				initializations.push(inp.getCode());

			}

			// make function
			fn_code += "function " + node.getName() + node.version() + "( " + params.join(", ") + " ) { \n" ;
			fn_code += initializations.join(";\n") + ";\n";
			
			// add outputs 
			let results :string[]= [], opInits :string[] = [];
			let outputs : OutputPort[] = node.getOutputs();
			for( let o=0; o < outputs.length; o++ ){
				let oname = outputs[o].getName(); 
				results.push( oname + " : " + oname);
				opInits.push(outputs[o].getCode())
			}
			
			// add initialization for outputs
			fn_code += "\n" + opInits.join(";\n") + ";\n"; 

			// add procedure
			for( let line=0; line <  node.getProcedure().length; line ++ ){
				fn_code += "\n" +  node.getProcedure()[line].getCode(); 
			}

			// add return object
			fn_code += "\n" + "return " + " { " + results.join(", ") + " } " + ";";

			// ending
			fn_code += "\n }"

			return fn_code;
		}

		getNodeOutputCode(node: INode, output_idx: number): string{
			return node.getName() + "." + node.getOutputByIndex(output_idx).getName(); 
		}

		generateConnectionLine(destination_node: INode, destination_port: number, source_node: INode, source_port: number): string{
			let code :string = "let " + destination_node.getInputByIndex(destination_port).getName() + "=" + this.getNodeOutputCode(source_node, source_port) + "\n";
			return code;
		}

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
};

export class CodeGeneratorPY implements ICodeGenerator{
		_language: string = "py";

		executeNode(node: INode, params: any): any{
			return false;
		}
		getCode(flow: IFlowchart){
			return "py-code";
		}
		getFunctionCall(node: INode): string{ return null};
		getDefinition(node: INode): string{ return null};
		getNodeCode(node: INode): string{ return null};
		getNodeOutputCode(node: INode, output_idx: number): string{ return null; };
		generateConnectionLine(destination_node: INode, destination_port: number, source_node: INode, source_port: number): string{ return null; };
};