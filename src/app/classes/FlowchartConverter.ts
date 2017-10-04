import { FlowchartFactory } from '../classes/IFlowchart';
import { IFlowchart } from '../classes/IFlowchart';
import { Node } from '../classes/INode';

export class FlowchartConverter{

	_factory = new FlowchartFactory();

	flowchartToData(flowchart: IFlowchart): string{
		return "";
	}

	dataToFlowchart(data: any): IFlowchart{

		// todo: check if data is valid

		// convert to flowchart
		let fc = this._factory.getFlowchart(data.language);

		for( let i=0; i < data.graph.nodes.length; i++ ){

			let node = data.graph.nodes[i];
			let nodeInst = new Node(node.id, node.name, node);

			// add inputs to node
			for( let p=0; p < node.inputConnectors.length; p++ ){
				let port = node.inputConnectors[p];
				nodeInst.addInput(port.name, port.connected, port);
			}

			// add outputs to node
			for( let p=0; p < node.outputConnectors.length; p++ ){
				let port = node.outputConnectors[p];
				nodeInst.addOutput(port.name, port.connected);
			}

			// add procedure to node
			nodeInst.addProcedureBlock(data.procedure[i])

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

}