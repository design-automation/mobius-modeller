import { IFlowchart } from './IFlowchart';
import { Flowchart } from './Flowchart';

import { IGraphNode, GraphNode, IEdge } from '../node/NodeModule';

export abstract class FlowchartReader{


	static readFlowchartFromData(data: IFlowchart): IFlowchart{

	    // recreate the flowchart from data
	    let fc: IFlowchart = new Flowchart(data["author"]);
	    fc.setSavedTime(data["_lastSaved"]);

	    let nodes: IGraphNode[] = data["_nodes"];
	    let edges: IEdge[] = data["_edges"];

	    // add nodes
	    for(let index=0; index < nodes.length; index++ ){
	      let n_data = nodes[index];
	      let node: IGraphNode = new GraphNode(n_data["name"], n_data["type"]);
	      node.update(n_data);
	      fc.addNode(node);
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


	    return fc;
	}

}