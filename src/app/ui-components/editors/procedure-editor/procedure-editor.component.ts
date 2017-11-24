import { Component, Injector, OnInit } from '@angular/core';

import { IGraphNode } from '../../../base-classes/node/NodeModule';
import { IProcedure, ProcedureFactory, ProcedureTypes } from '../../../base-classes/procedure/ProcedureModule';
import { Viewer } from '../../../base-classes/viz/Viewer';

import { FlowchartService } from '../../../global-services/flowchart.service';

@Component({
  selector: 'app-procedure-editor',
  templateUrl: './procedure-editor.component.html',
  styleUrls: ['./procedure-editor.component.scss']
})
export class ProcedureEditorComponent extends Viewer {

	private isVisible: boolean = false;

  	private _procedureArr: IProcedure[] = [];
  	private _node: IGraphNode;

  	private procedureTypes: ProcedureTypes[] = [
  			ProcedureTypes.Data, 
  			ProcedureTypes.Action, 
  			ProcedureTypes.ForLoopControl, 
  			ProcedureTypes.IfElseControl
  	];

  	private _tree = [];
	private _tree_options = {
	  allowDrag: true,
	  allowDrop:  (element, { parent, index }) => {
	    // return true / false based on element, to.parent, to.index. e.g.
	    return  parent.getType() == ProcedureTypes.IfElseControl;
	  }
	};

	constructor(injector: Injector){  super(injector, "procedure-editor"); }

	reset():void{
		this._procedureArr = [];
		this._node = undefined;
		this._tree = [];
	}

	updateProcedureLeft($event, prod){

	}

	updateProcedureRight($event, prod){

	}

	updateProcedure($event: Event, prod: IProcedure, property: number){

		if(property == -1){

		}
		else if(property == 1){

		}

		/*let value: string = $event.srcElement.innerText;
		if( property == -1){
			procedure.setResult(value);
		}
		else if(property == 1){
			procedure.setExpression(value);
		}
		else{
			throw Error("Invalid Procedure Update");
		}*/
	}



	expandAll(tree){
		tree.treeModel.expandAll();
	}

	getString(type: ProcedureTypes): string{
		console.log(type.toString())
		return type.toString()
	}

	updateProcedureTree(){

		// converts the procedure into a tree item
		let getTreeItem = function(prod : IProcedure, index: number): 
												{ id: number,   
												  type: ProcedureTypes
												  leftExpression: string, 
												  rightExpression: string
												}{

			let procedure_type :ProcedureTypes = prod.getType();
			let treeItem = {id: index, type: procedure_type, 
							leftExpression: undefined, 
							rightExpression: undefined};

			//let dataObj = { id: Math.random() , name: data.getTitle(), type: procedure_type, model: data } ; 

			// ProcedureType.Data
			if(procedure_type === ProcedureTypes.Data){
				// do nothing
				treeItem["leftExpression"] = prod.getLeftComponent().expression;
				treeItem["rightExpression"] = prod.getRightComponent().expression;
				console.log(treeItem);
			}
			else if(procedure_type === ProcedureTypes.Action ){
				// todo
			}
			else if(prod.hasChildren() == true){

				// todo
				// if prod type is if or else individually, disallow drag

				// if else (if else)
				// for 
				/*dataObj.name = data.getControlType();
				dataObj["children"] = data.getNodes().map(function(node){
					return getTreeItem(node)
				})*/
			}
			else{
				throw Error("unknown procedure type");
			}

			console.log(treeItem);
			
			return treeItem;
		}

		this._tree = this._procedureArr.map(function(prod, index){
			return getTreeItem(prod, index);
		})

	}

	update(){
		this._node = this.flowchartService.getSelectedNode();
		this._procedureArr = this._node.getProcedure();
		this.updateProcedureTree();
		this.isVisible = true;
	}


	addProcedure(type: ProcedureTypes): void{

		if( type == ProcedureTypes.Data){
			let default_variable_name: string = "var" + this._procedureArr.length;
			let prod:IProcedure = ProcedureFactory.getProcedure( ProcedureTypes.Data, {result: default_variable_name, value: "undefined"});
			this._node.addProcedure(prod);
		}

		//todo

		/*if(type == 0){
			
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
		}*/

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
		prod.disable();
		this.update();
	}

	deleteProcedure(index: number): void{
		this._node.deleteProcedure(index);
		this.flowchartService.update();
	}

}
