import { IFlowchart } from './IFlowchart';
import { Flowchart } from './Flowchart';

import { IGraphNode, GraphNode, IEdge } from '../node/NodeModule';

export abstract class FlowchartReader{


	static readFlowchartFromData(data: IFlowchart): IFlowchart{

	    // recreate the flowchart from data
	    let fc: IFlowchart = new Flowchart(data["author"]);

	    let nodes: IGraphNode[] = data["_nodes"];
	    let edges: IEdge[] = data["_edges"];

	    // add nodes
	    for(let index in nodes){
	      let n_data = nodes[index];
	      let node: IGraphNode = new GraphNode(n_data["name"], n_data["type"]);

	      node.update(n_data);

	      fc.addNode(node);

	    }  

	    // add edges
	    for(let index in edges){
	    	let e_data :IEdge = edges[index];
	    	fc.addEdge(e_data.output_address, e_data.input_address);
	    }

	    return fc;
	}

}