import { IFlowchart } from './IFlowchart';
import { Flowchart } from './Flowchart';

import { IGraphNode, GraphNode, IEdge } from '../node/NodeModule';
import { FunctionProcedure } from '../procedure/FunctionProcedure';
import { ProcedureTypes } from '../procedure/ProcedureTypes';

export abstract class FlowchartReader{


	static readFlowchartFromData(data: IFlowchart): IFlowchart{

	    // recreate the flowchart from data
	    let fc: IFlowchart = new Flowchart(data["author"]);
	    fc.setSavedTime(data["_lastSaved"]);

	    let nodes: IGraphNode[] = data["_nodes"];
	    let edges: IEdge[] = data["_edges"];

	    let nodeMap = [];

	    let higherOrderFn = [];
	    let normalNodes = [];

	    // split nodesS
	    for(let index=0; index < nodes.length; index++ ){
	      let n_data = nodes[index];

	      // check from outputs 
	      let outputs = n_data["_outputs"];
	      let flag: boolean = false;
	      for(let oIdx=0; oIdx < outputs.length; oIdx++){
	      	let oData = outputs[oIdx];

	      	// if output is function	
	      	if ( oData["_isFunction"] ){
		      higherOrderFn.push(n_data);
		      flag = true;
		      break;
	      	}

	      }

	      if(!flag){
	      	normalNodes.push(n_data);
	      }


	    } 

	    // create nodes - higher order first
	    let orderedNodes = higherOrderFn.concat(normalNodes);
	    for(let index=0; index < orderedNodes.length; index++ ){
	      let n_data = orderedNodes[index];
	      let node: IGraphNode = new GraphNode(n_data["name"], n_data["type"]);
	      node.update(n_data, nodeMap);

	      nodeMap[node.getId()] = node;
	    }

	    // add nodes in order to the flowchart
	    for(let n=0; n < nodes.length; n++){
	    	let createdNode = nodeMap[nodes[n]["_id"]];
	    	fc.addNode(createdNode)
	    }  

	    // add edges
	    for(let index in edges){
	    	let e_data :IEdge = edges[index];
	    	let in_node = e_data.input_address[0];
	    	let out_node = e_data.output_address[0];
	    	
	    	let valid_input: boolean = (in_node  >= 0 && in_node < nodes.length);
	    	let valid_output: boolean = (out_node  >= 0 && out_node < nodes.length);
	    	if( valid_input && valid_output ){
	    		fc.addEdge(e_data.output_address, e_data.input_address);
	    	}
	    	else{

	    	}
	    }

	    /*let allNodes = fc.getNodes();
	    for(let i=0; i < allNodes.length; i++){
	    	let n = allNodes[i];

	    	let p = n.getProcedure();

	    	for(let pr=0; pr < p.length; pr++){
	    		let prod = p[pr];

	    		if(prod.getType() == ProcedureTypes.Function){
	    			let fn_prod: FunctionProcedure = prod as FunctionProcedure;
	    			let node_id = fn_prod.getNode().getId();
	    			let actual_node = nodeMap[node_id];
	    			fn_prod.setNode(actual_node);
	    		}

	    	}
	    }
*/
	    // relink procedure lines
	    /*nodes.map(function(node){

	    	let procedure_arr = node.getProcedure();

	    	procedure_arr.map(function(prod){

	    		if(prod.getType() == "Function"){
	    			console.log(prod);
	    		}

	    	})

	    })*/


	    return fc;
	}

}