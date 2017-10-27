import { INode } from "./INode";
import { ICodeGenerator, } from './CodeGenerators';
import { CodeFactory } from './CodeFactory';

export interface IFlowchart{
	_author: string; 
	code_generator: ICodeGenerator;

	getNodes(): INode[];
	getConnections(): any;

	getNode(index: number): INode;

	getLanguage() :string;
	getDetails() :string;

	add(node: any): void;
	addLink(link: any): void;

	getDisplayCode() :string;
	execute(): boolean;
};

export class FlowchartFactory{

	private code_factory: CodeFactory = new CodeFactory();
	
	getFlowchart(type: string): IFlowchart{
		if(type == "js" || type == "py"){
			let code_generator: ICodeGenerator = this.code_factory.getCodeGenerator("js");
			return new Flowchart(code_generator);
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
	code_generator: ICodeGenerator;

	constructor(code_generator: ICodeGenerator){ this.code_generator = code_generator; };


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

	getDisplayCode(): string{
		return this.code_generator.getCode(this);
	}

	resetAllNodes(): void{
		for(let n=0; n < this._nodes.length; n++){
			this._nodes[n].reset();
		}
	}

	executeNode(node: INode){

		console.log("Executing ", node.getName());
		
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

	sortNodesByRank(nodes: INode[]): INode[]{

		let ranked: any[] = [];
		let sorted: INode[] = [];

		for(let i=0; i < nodes.length; i++){

			let node :INode = nodes[i];
			let rank :number = node.rank();
			console.log(node.getName(), rank)

			if( ranked[rank] == undefined){
				ranked[rank] = [];
			}
			ranked[rank].push(node);
		}

		let all_ranks = Object.keys(ranked).map(function(num){ return parseInt(num); }).sort();
		for( let r=0; r < all_ranks.length; r++){
			let rank = all_ranks[r];
			let nodes_with_rank = ranked[rank];
			sorted = sorted.concat(nodes_with_rank);
		}

		return sorted;
	}

	execute() :any{

		// set all nodes to status not executed
		// future: cache results and set status based on changes
		this.resetAllNodes();

		// sort nodes 
		let sorted_nodes: INode[] = this.sortNodesByRank(this._nodes);

		// execute each node
		// provide input to next 
		let timeStarted	:number = (new Date()).getTime();
		for( let nc=0; nc < sorted_nodes.length; nc++ ){

			let node = sorted_nodes[nc]

			// check status of the node; don't rerun
			if( node.getStatus() == 1 ){
				continue;
			}

			this.executeNode(node);
			console.log(node.getName(), node.getValue());
		}

		return true;
	}
}
