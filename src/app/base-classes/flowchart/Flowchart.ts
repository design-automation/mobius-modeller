//
//	Flowchart class 
//  Implement IFlowchart
//	
//
//

import {IFlowchart} from './IFlowchart';
import {IGraphNode, IEdge} from '../node/NodeModule';
import {ICodeGenerator, IModule} from '../code/CodeModule';

import * as gs from 'gs-json';

export class Flowchart implements IFlowchart{

	private _author: string; 

	private _nodes: IGraphNode[] = [];
	private _edges: IEdge[] = [];

	private _sortOrder: number[];
	private _selected: number;

	private _lastSaved: Date;

	//
	//	constructor needs 2 arguments  - username and icodegenerator
	//
	constructor(username: string){ 
		this._author = username; 
	};

	setSavedTime(date: Date){
		this._lastSaved = date;
	}

	getSavedTime(): Date{
		return this._lastSaved;
	}

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

		let oNode = this.getNodeByIndex(outputAddress[0]);
     	let iNode = this.getNodeByIndex(inputAddress[0]);

     	// dont remove previous edges for outputs
		let output = oNode.getOutputByIndex(outputAddress[1]);
		let input = iNode.getInputByIndex(inputAddress[1]);
		if( iNode.hasFnOutput() || ( oNode.hasFnOutput() && !output.isFunction() ) ){
          throw Error("Non-functional inputs/outputs of higher-order nodes cannot be connected");
      	}

      	if (input.isConnected()){
	        this.deleteEdges(this.disconnectEdgesWithPortIndex(inputAddress[0], inputAddress[1], "input"));
	    }

		if( this.getNodeByIndex(outputAddress[0]).isDisabled() ||  this.getNodeByIndex(inputAddress[0]).isDisabled() ){
			console.log("Cannot connect to disabled nodes");
		}
		else{
			let edge: IEdge = { output_address: outputAddress, input_address: inputAddress };

			input.setComputedValue({port: outputAddress});
		    output.connect();
		    input.connect();
			
			if(output.isFunction()){
        		input.setIsFunction();
        		input.setFnValue( oNode );
      		}

			// todo: check for valid input/output addresses and port address
			this._edges.push(edge);
		}

		return this._edges.length;
	};

	disconnectEdgesWithNode(node_index: number): number[]{
	      let splicedEdges: number[] = [];
	      let edges = this.getEdges();
	      for(let e=0; e < edges.length; e++){
	        let edge = edges[e];
	        if( edge.output_address[0] == node_index){
	            let port = this.getNodeByIndex(edge.input_address[0]).getInputByIndex(edge.input_address[1]);
	            port.disconnect();
	            port.setComputedValue(undefined);
	            splicedEdges.push(e);
	        }
	        else if(edge.input_address[0] == node_index){
	            let port = this.getNodeByIndex(edge.output_address[0]).getOutputByIndex(edge.output_address[1]);
	            port.disconnect();
	            port.setComputedValue(undefined);
	            splicedEdges.push(e);
	        }
	      }
	      return splicedEdges;
	}

	deleteNode(nodeIndex: number): number{

		this.disconnectNode(nodeIndex);
		
		this._nodes.splice(nodeIndex, 1);

		//this.deleteEdges(this.disconnectEdgesWithNode(nodeIndex));

		for(let e=0; e < this._edges.length; e++){

			let edge = this._edges[e];

			let input_node = edge.input_address[0];
			let output_node = edge.output_address[0];

			if(input_node == nodeIndex || output_node == nodeIndex){
				this.deleteEdge(e);
			}

			if(input_node > nodeIndex){
				edge.input_address[0] = input_node - 1;
			}

			if(output_node > nodeIndex){
				edge.output_address[0] = output_node - 1;
			}

		}


		// todo: check for valid node index
		// delete this._nodes[nodeIndex];

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

	disconnectEdgesWithPortIndex(nodeIndex: number, portIndex: number, type: string): number[]{
      let splicedEdges: number[] = [];
      let edges = this.getEdges();
      
      for(let e=0; e < edges.length; e++){
        let edge = edges[e];

        // if type == "input"
        if( type == "input" && edge.input_address[0] == nodeIndex && edge.input_address[1] == portIndex ){
            let port = this.getNodeByIndex(edge.output_address[0]).getOutputByIndex(edge.output_address[1]);
            port.disconnect();
            port.setComputedValue(undefined);
            splicedEdges.push(e);
        }
        else if( type == "output" && edge.output_address[0] == nodeIndex && edge.output_address[1] == portIndex ){
            let port = this.getNodeByIndex(edge.input_address[0]).getInputByIndex(edge.input_address[1]);
            port.disconnect();
            port.setComputedValue(undefined);
            splicedEdges.push(e);
        }
      }

      return splicedEdges;
  	}

  	disconnectNode(nodeIndex: number): void{
  		let _node = this.getNodeByIndex(nodeIndex);

  		_node.getInputs().map(function(input){
  			input.disconnect();
  			input.setComputedValue(undefined);
  		})

  		_node.getOutputs().map(function(output){
  			output.disconnect();
  			output.setComputedValue(undefined);
  		})

  		this.deleteEdges(this.disconnectEdgesWithNode(nodeIndex));

  		// for(let i=0; i < _node.getInputs().length; i++){
  		// 	this.disconnectPort("input", i, nodeIndex)
  		// }	

  		// for(let i=0; i < _node.getOutputs().length; i++){
  		// 	this.disconnectPort("output", i, nodeIndex)
  		// }

  	}


  	disconnectPort(type: string, portIndex: number, nodeIndex: number): void{
  		let edges = this._edges;

	    /// disconnect the edges related to this port
	    let edgesArr: number[] = this.disconnectEdgesWithPortIndex(nodeIndex, portIndex, type); 
	    this.deleteEdges(edgesArr);

	    /// update indices of edges
	    /// delete port
	    for(let e=0; e < edges.length; e++){

	        let input_node: number = edges[e].input_address[0];
	        let input_port: number = edges[e].input_address[1];

	        if(type == "input"){
	           let input_node: number = edges[e].input_address[0];
	           let input_port: number = edges[e].input_address[1];

	            if(input_node == nodeIndex && input_port >= portIndex){
	              edges[e].input_address[1] = edges[e].input_address[1] - 1;
	            }
	        }
	        else if(type == "output"){
	           let output_node: number = edges[e].output_address[0];
	           let output_port: number = edges[e].output_address[1];

	            if(output_node == nodeIndex && output_port >= portIndex){
	              edges[e].output_address[1] = edges[e].output_address[1] - 1;
	            }
	        }
	        else{
	           console.warn("reached 358");
	        }
	    }
  	}

	deletePort(type: string, portIndex: number, nodeIndex: number): void{
	    
	    this.disconnectPort(type, portIndex, nodeIndex);

		let _node = this.getNodeByIndex(nodeIndex);

		if(type == "input"){
			_node.deleteInput(portIndex);
		}
		else if(type == "output"){
			_node.deleteOutput(portIndex);
		}
		else{
			throw Error("Unknown port type");
		}

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
	//	Returns an ordering of the node IDs in order or execution
	//
	getNodeOrder(): number[]{

		let n_map = [];

		n_map = this._nodes.map(function(node, index){
			return {prevArr: [], nextArr: [], id: index};
		});

		for(let c=0; c < this._edges.length; c++){
			let edge: IEdge = this._edges[c];
			let out_nodeIndex = edge.output_address[0];
			let in_nodeIndex = edge.input_address[0]; 

			if(n_map[out_nodeIndex].nextArr.indexOf(in_nodeIndex) == -1){
				n_map[out_nodeIndex].nextArr.push(in_nodeIndex);
			}

			if(n_map[in_nodeIndex].prevArr.indexOf(out_nodeIndex) == -1){
				n_map[in_nodeIndex].prevArr.push(out_nodeIndex);
			}

		}

		let sortO = n_map[0].prevArr.concat([n_map[0].id]).concat(n_map[0].nextArr);
		for(let i=1; i < n_map.length; i++){

			let o = n_map[i];
			
			// if id of current node is not found in the sort array already 
			// push it into the array
			if(sortO.indexOf(o.id) == -1){
				sortO.push(o.id);
			}
			
			// find the index of the id of the current node
			let el_pos = sortO.indexOf(o.id);

			// if previous array length of this node is 0 and it is not already at the head of the array
			// add it to the beginning of the array
			if(o.prevArr.length == 0 && el_pos !== 0){
				sortO.splice(el_pos, 1);
				sortO.unshift(o.id);
			}

			o.prevArr.map(function(r){

				// find an element in the previous array in the sortO
				let index = sortO.indexOf(r);

				if(index == -1){
					// if not found, add it to the 
					sortO.splice(el_pos, 0,  r);
				}
				else{
					if(index > el_pos){
						sortO.splice(index, 1);
						sortO.splice(el_pos, 0, r);
					}
					else{
						// do nothing
					}
				}
				
			});

		}

		return sortO;
	}


	//
	//	clears all the cached results
	//
	reset(): void{
		for(let n=0; n < this._nodes.length; n++){
			let node: IGraphNode = this._nodes[n];
			node.reset();

			if(node.isDisabled()){
				this.disconnectNode(n);
			}
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


			let outVal = outputPort.getValue();
			if(outVal && outVal.constructor.name == "Model"){
				let modelData: string = outVal.toJSON();
				let model = new gs.Model(JSON.parse(modelData));
				// todo: change in kernel
        		//model["_kernel"]._objs = JSON.parse(JSON.stringify(outVal["_kernel"]._objs));
        		//model["_kernel"]._points = JSON.parse(JSON.stringify(outVal["_kernel"]._points));
				// console.log( JSON.stringify(model["_kernel"]["_objs"]) );
				inputPort.setComputedValue( model );
			}
			else{
				inputPort.setComputedValue( outVal );
			}

			


			// let value = outputPort.getValue();
			// if( value["_kernel"] && value["_id"] ){

			// 	console.log(value);

			// 	let obj: gs.Model = outputPort.getValue().getModel();
				
			// 	let objStr: string = obj.toJSON();
				
			// 	let entity = value.constructor;
			// 	let new_obj = new entity();
			// 	new_obj["_id"] = value["_id"];

			// 	let new_model = new gs.Model(JSON.parse(objStr));

			// 	inputPort.setComputedValue(new_obj);
			// }
			// else{
			// 	inputPort.setComputedValue(value);
			// }



			// create a new object
			//let entity = obj.constructor;
			// let kernelCons = obj["_kernel"].constructor;
			// let new_obj = new entity();
			// new_obj["_id"] = obj["_id"];
			
			// new_obj["_kernel"] = new kernelCons();
			// new_obj["_kernel"]["_model"]  = new kernelCons();
			// ["_attribs", "_groups", "_metadata", "_objs", "_points", "_topos_trees"].map(function(prop: string){
			// 	new_obj["_kernel"]["_model"][prop] = obj["_kernel"][prop];
			// })
			// console.log(new_obj);

		}
	}

	//
	//	executes the flowchart
	//
	execute(code_generator: ICodeGenerator, modules: IModule[], print: Function) :any{

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
			if( node.isDisabled() || node.hasFnOutput() ){
				continue;
			}

			node.execute(code_generator, modules, print);

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

