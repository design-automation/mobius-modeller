import { Module } from "./Module";
import { INode } from "./INode";
import { ICodeGenerator, } from './CodeGenerators';
import { CodeGeneratorJS } from './code_generators/javascript_generator';
import { CodeGeneratorPY } from './code_generators/python_generator';

export interface IFlowchart{
	_module: Module;
	_author: string; 
	code_generator: ICodeGenerator;

	getNodes(): INode[];
	getConnections(): any;

	getNode(index: number): INode;

	getLanguage() :string;
	getDetails() :string;

	add(node: any): void;
	addLink(link: any): void;

	getExecutionCode() :string;
	execute(): boolean;

};

export class FlowchartFactory{
	constructor(){ }

	getFlowchart(type: string): IFlowchart{
		if(type == "js"){
			return new FlowchartJS();
		}
		else if(type == "py"){
			return new FlowchartPY();
		}
		else{
			console.error("Invalid language specified!");
		}
	}
}


class Flowchart implements IFlowchart{
	
	private _nodes: INode[] = []; 
	private _connections: any = [];
	private _node_order: number[];
	
	_author: string; 
	_module: null;
	code_generator: ICodeGenerator;	

	getLanguage(): string{
		return this.code_generator._language;
	}

	getDetails(): string{
		return "This is a " + this.getLanguage() + " flowchart, with " + this._nodes.length + " nodes, written by " + this._author;
	}

	getNodes(){ 
		return this._nodes;
	}

	getNode(index: number): INode{
		return this._nodes[index];
	}

	getConnections(){ 
		return this._connections;
	}

	add(node: INode): void{
		this._nodes.push(node);
	};

	addLink(link: any): void{
		// add dependency on the destination node
		this.getNode(link.dest.nodeID).addDependency([link.source.nodeID, link.source.connectorIndex, link.dest.connectorIndex]);
		this._connections.push(link);
	}

	getExecutionCode(): string{
		return this.code_generator.getCode(this);
	}

	resetAllNodes(): void{
		for(let n=0; n < this._nodes.length; n++){
			this._nodes[n].reset();
		}
	}

	executeNode(node: INode){
		
		let params :any = null;

		if( node.isIndependent() == false ){
			params = {};
			let dependencies :any = node.getDependencies();

			for(let d=0; d < dependencies.length; d++){
				// dependencies are stored as an array of arrays - [ [], [], [] ]
				// the 0th index stores the node, the 1st index stores the port number
				let parent_node = this.getNode(dependencies[d][0]); 
				if(parent_node.getStatus() == 1){
					let source_port = parent_node.getOutputByIndex(dependencies[d][1]);
					let my_port = node.getInputByIndex(dependencies[d][2]);
					params[my_port.getName()]  = source_port.getValue();
					my_port.setValue(source_port.getValue());
				}
			}
		}
		
		node.executeNode(this.code_generator, params);

	}

	execute() :any{

		// set all nodes to status not executed
		// future: cache results and set status based on changes
		this.resetAllNodes();

		// execute each node
		// provide input to next 
		let timeStarted	:number = (new Date()).getTime();
		for( let nc=0; nc < this._nodes.length; nc++ ){

			let node = this.getNode(nc); 

			// check status of the node; don't rerun
			if( node.getStatus() == 1 ){
				continue;
			}

			this.executeNode(node);
			console.log(node.getValue());

		}
		// run nodes by rank
		// supply output of one node to input of another node

		return true;
	}
}

class FlowchartJS extends Flowchart{
	_author: string = "AKM"; 
	code_generator: ICodeGenerator = new CodeGeneratorJS;
};

class FlowchartPY extends Flowchart{
	_author: string = "AKM"; 
	code_generator: ICodeGenerator = new CodeGeneratorPY;
}

