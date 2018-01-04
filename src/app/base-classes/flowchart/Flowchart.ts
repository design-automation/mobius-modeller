//
//	Flowchart class 
//  Implement IFlowchart
//	
//
//

import {IFlowchart} from './IFlowchart';
import {IGraphNode, IEdge} from '../node/NodeModule';
import {ICodeGenerator, IModule} from '../code/CodeModule';


export class Flowchart implements IFlowchart{

	private _author: string; 

	private _nodes: IGraphNode[] = [];
	private _edges: IEdge[] = [];

	private _sortOrder: number[];
	private _selected: number;

	//
	//	constructor needs 2 arguments  - username and icodegenerator
	//
	constructor(username: string){ 
		this._author = username; 
	};

	//	gets author of the flowchart
	getAuthor(): string{
		return this._author;
	}

	//	Summary of flowchart
	getSummary(): string{
		return "This is a flowchart, with " + this._nodes.length + " nodes, written by " + this._author;
	}

	//
	//	Maintains the node order for execution
	//
	addNode(node?: IGraphNode): number{

		if( node == undefined ){
			//todo: create new node
		}

		// a new node will have no dependencies - hence push index to end of _nodeTree
		this._nodes.push(node);

		return this._nodes.length;
	};

	addEdge(outputAddress: number[], inputAddress: number[]): number{

		if(outputAddress.length !== 2 || inputAddress.length !== 2){
			console.log("inputAddress", inputAddress);
			console.log("outputAddress", outputAddress);
			throw Error("Invalid arguments for edge");
		}

		let edge: IEdge = { output_address: outputAddress, input_address: inputAddress };
		
		// todo: check for valid input/output addresses and port address
		this._edges.push(edge);

		return this._edges.length;
	};

	deleteNode(nodeIndex: number): number{

		// todo: check for valid node index
		this._nodes.splice(nodeIndex, 1);

		return this._nodes.length;
	}

	deleteEdge(edgeIndex: number): number{

		// todo: check for valid edge index
		this._edges.splice(edgeIndex, 1);

		return this._edges.length;
	}

	deleteEdges(edgeArr: number[]): void{
		this._edges = this._edges.filter(function(edge, index){
			return ( edgeArr.indexOf(index) == -1 );
		})
	}

	getNodes(): IGraphNode[]{ 
		return this._nodes;
	}

	getEdges(): IEdge[]{ 
		return this._edges;
	}

	//
	//	Get node by index in flowchart
	//	todo: fix
	//
	getNodeByIndex(index: number): IGraphNode{
		return this._nodes[index];
	}

	getEdgeByIndex(index: number): IEdge{
		return this._edges[index];
	}

	//todo: provide a more efficient sort
	getNodeOrder(): number[]{

		let rankedNodeOrder: number[] = [];
		let incoming = [];

		this._nodes.map(function(node, index){
			incoming[index] = {count: 0, id: index};
		})

		for(let c=0; c < this._edges.length; c++){
			let edge: IEdge = this._edges[c];
			let in_nodeIndex = edge.input_address[0]; 
			let out_nodeIndex = edge.output_address[0];
			incoming[in_nodeIndex].count++;
			incoming[out_nodeIndex].count--;
		}

		let an = this._nodes;
		rankedNodeOrder = incoming.sort(function(a: any, b: any){
			return a.count - b.count;
		}).map(function(obj){ 
			return obj.id;
		});

		return rankedNodeOrder;
	}


	//
	//	clears all the cached results
	//
	reset(): void{
		for(let n=0; n < this._nodes.length; n++){
			this._nodes[n].reset();
		}
	}


	//
	// todo: should this happen realtime?
	//
	/*private sortNodesByRank(nodes: IGraphNode[]): IGraphNode[]{

		let ranked: any[] = [];
		let sorted: IGraphNode[] = [];

		for(let i=0; i < nodes.length; i++){

			let node :IGraphNode = nodes[i];
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
	}*/

	updateDependentInputs(node: IGraphNode, originalRank: number): void{

		let selectedEdges: IEdge[] = this.getEdges().filter(function(edge){
			return edge.output_address[0] == originalRank;
		});

		for( let e=0;  e < selectedEdges.length; e++ ){

			let edge: IEdge = selectedEdges[e];
			let inputNode: IGraphNode = this.getNodeByIndex(edge.input_address[0]);

			// set computed value of port
			// should this be from within the node?
			let outputPort = node.getOutputByIndex(edge.output_address[1]);
			let inputPort = inputNode.getInputByIndex(edge.input_address[1]);
			inputPort.setComputedValue(outputPort.getValue());
		}
	}

	//
	//	executes the flowchart
	//
	execute(code_generator: ICodeGenerator, modules: IModule[]) :any{

		// set all nodes to status not executed
		// future: cache results and set status based on changes
		this.reset();

		// sort nodes 
		let all_nodes = this.getNodes();
		let sortOrder: number[] = this.getNodeOrder();

		// execute each node
		// provide input to next 
		let timeStarted	:number = (new Date()).getTime();
		for( let nc=0; nc < sortOrder.length; nc++ ){

			let originalRank = sortOrder[nc];
			let node = all_nodes[originalRank];

			// check status of the node; don't rerun
			if( node.hasExecuted() == true ){
				continue;
			}

			node.execute(code_generator, modules);
			console.log(node.getName(), node.getResult());

			this.updateDependentInputs(node, originalRank); 

			//todo: print time taken
		}

		return true;
	}

	/*executeNode(node: IGraphNode){

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

	}*/

	save(): string{
		throw Error("Not implemented");
		/*this.reset();
		//todo:
		console.log(CircularJSON.stringify(this));
		return CircularJSON.stringify(this);*/
	}

	readFromJSON(filename: string): void{
		// todo:
		// read the nodes and edges and add to the flowchart
	}

}
