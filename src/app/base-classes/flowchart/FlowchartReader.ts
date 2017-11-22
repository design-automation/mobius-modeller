/*import { FlowchartFactory } from '../classes/IFlowchart';
import { IFlowchart } from '../classes/IFlowchart';
import { GraphNode } from '../classes/IGraphNode';

export class FlowchartConverter{

	_factory = new FlowchartFactory();

	flowchartToData(flowchart: IFlowchart): string{
		return "";
	}

	dataToFlowchart(data: any, language?: string): IFlowchart{

		// todo: check if data is valid

		// convert to flowchart
		let fc = this._factory.getFlowchart(language);

		for( let i=0; i < data.graph.nodes.length; i++ ){

			let node = data.graph.nodes[i];
			let nodeInst = new GraphNode(node.id, node.name, node);

			// add inputs to node
			for( let p=0; p < node.inputConnectors.length; p++ ){
				let port = node.inputConnectors[p];
				let inp = nodeInst.addInput();
				inp.setName(port.name)
				inp.setConnected(port.connected)
			}

			// add outputs to node
			for( let p=0; p < node.outputConnectors.length; p++ ){
				let port = node.outputConnectors[p];
				nodeInst.addOutput(port.name, port.connected);
			}

			// add procedure to node
			nodeInst.addProcedureBlock(data.procedure[i], data.module.name);

			// add node to flowchart
			fc.add(nodeInst);

		}

		// add connections between nodes in flowchart
		for( let c=0; c < data.graph.connections.length; c++ ){
			let conn = data.graph.connections[c];
			fc.addLink(conn);
		}

		return fc;
	}

}*/