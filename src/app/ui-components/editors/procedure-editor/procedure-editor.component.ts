import { Component, Injector, OnInit } from '@angular/core';
import { Viewer } from '../classes/Viewer';
import { IGraphNode } from '../classes/IGraphNode';
import { IProcedure, Procedure, ProcedureFactory } from '../classes/IProcedure';

@Component({
  selector: 'app-procedure-editor',
  templateUrl: './procedure-editor.component.html',
  styleUrls: ['./procedure-editor.component.scss']
})
export class ProcedureEditorComponent extends Viewer {

	private _prodFactory: ProcedureFactory = ProcedureFactory.getInstance();
	private isVisible: boolean = false;

  	_procedureArr: IProcedure[] = [];
  	_node: IGraphNode;

  	_tree = [];
	_tree_options = {
	  allowDrag: true,
	  allowDrop:  (element, { parent, index }) => {
	    // return true / false based on element, to.parent, to.index. e.g.
	    return  (parent.data.type === "Control" || parent.hasChildren);
	  }
	};

	constructor(injector: Injector){  super(injector, "procedure-editor"); }

	updateProcedure($event, prod, property){
		let procedure : IProcedure = prod.data.model;
		let value: string = $event.srcElement.innerText;
		console.log(value);
		if( property == -1){
			procedure.setResult(value);
		}
		else if(property == 1){
			procedure.setExpression(value);
		}
		else{
			throw Error("Invalid Procedure Update");
		}
	}

	reset():void{
		this._procedureArr = [];
		this._node = undefined;
		this._tree = [];
	}

	expandAll(tree){
		tree.treeModel.expandAll();
	}

	updateProcedureTree(){

		let getTreeItem = function(data : IProcedure): any{

			let procedure_type = data.getTitle();
			let dataObj = { id: Math.random() , name: data.getTitle(), type: procedure_type, model: data } ; 
			dataObj["result"] = data.getResult();
			dataObj["expression"] = data.getExpression();
			
			if(procedure_type === "Data"){
			}
			else if(procedure_type == "Action"){
				dataObj.name = data.getCategory() + "::" + data.getMethod();
				dataObj["params"] = data.getParams();
			}
			else if(procedure_type == "Control"){
				// if else (if else)
				// for 
				dataObj.name = data.getControlType();
				dataObj["children"] = data.getNodes().map(function(node){
					return getTreeItem(node)
				})
			}
			else{
				throw Error("unknown procedure type");
			}
			
			return dataObj;
		}

		this._tree = this._procedureArr.map(function(prod, index){
			return getTreeItem(prod);
		})

	}

	update(){
		this._node = this.flowchartService.getSelectedNode();
		this._procedureArr = this._node.getProcedure();
		this.updateProcedureTree();
		this.isVisible = true;
	}


	addOutput(): void{
	  // add an output port
	  let default_output_name: string = "output" + this._node.getOutputs().length;
      this._node.addOutput(default_output_name, false);

      // add corresponding data line
	  /*let prod:IProcedure = this._prodFactory.getProcedure({ id: this._procedureArr.length, title: "Data" });
	  prod.setResult(default_output_name);
	  this._node.addProcedureLine(prod);*/

      this.flowchartService.update();
    }


	addProcedure(type: number): void{
		if(type == 0){
			let prod:IProcedure = this._prodFactory.getProcedure({ id: this._procedureArr.length, title: "Data" });
			this._node.addProcedureLine(prod);
		}
		else if(type == 1){
			let prod:IProcedure = this._prodFactory.getProcedure({ id: this._procedureArr.length, title: "Action" });
			this._node.addProcedureLine(prod);
		}
		else if(type == 2){
			let prod:IProcedure = this._prodFactory.getProcedure({ id: this._procedureArr.length, title: "Control", controlType: "for each" });
			this._node.addProcedureLine(prod);
		}
		else if(type == 3){
			let prod:IProcedure = this._prodFactory.getProcedure({ id: this._procedureArr.length, title: "Control", controlType: "if else" });
			this._node.addProcedureLine(prod);
		}
		else{
			throw Error("Invalid Procedure Type")
		}

		this.flowchartService.update();
	}

	/*ddVariable():void{
		// create the procedure
		// data name
		// data value
	}

	addAction(): void{

	}

	addControl(type: string):void{
		// create the procedure
		let prod:IProcedure = this._prodFactory.getProcedure({ id: this._procedureArr.length, title: type, dataName: "Enter a name...", dataValue: "Enter a value..." });
		this._node.addProcedureLine(prod);
		this.update();		
	}*/

	// todo:
	disableProcedure(prod: IProcedure): void{
		prod.toggleDisabled();
		this.update();
	}

	deleteProcedure(index: number): void{
		this._node.removeProcedureLine(index);
		this.flowchartService.update();
	}

}
