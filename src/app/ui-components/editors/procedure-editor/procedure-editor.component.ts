import {Component, Injector, OnInit} from '@angular/core';
import {NgModel} from '@angular/forms';

import {IGraphNode} from '../../../base-classes/node/NodeModule';
import {IProcedure, ProcedureFactory, ProcedureTypes} from '../../../base-classes/procedure/ProcedureModule';
import {Viewer} from '../../../base-classes/viz/Viewer';

import {FlowchartService} from '../../../global-services/flowchart.service';
import {LayoutService} from '../../../global-services/layout.service';


import {ModuleUtils} from "../../../base-classes/code/CodeModule";

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-procedure-editor',
  templateUrl: './procedure-editor.component.html',
  styleUrls: ['./procedure-editor.component.scss']
})
export class ProcedureEditorComponent extends Viewer {

	isVisible: boolean = false;

  	_procedureArr: IProcedure[] = [];
  	_node: IGraphNode;

  	_showToolbox: boolean = false;

  	_tree = [];
	_tree_options = {
	  allowDrag: function(element){
	  	if(element.data.name == ProcedureTypes.IfControl || element.data.name == ProcedureTypes.ElseControl){
	  		return false;
	  	}
	  	else{
	  		return true;
	  	}
	 },
	  allowDrop:  (element, { parent, index }) => {
	    // return true / false based on element, to.parent, to.index. e.g.
	    return (parent.data.name !== this.getString(ProcedureTypes.IfElseControl) && 
	    	parent.data.name !== this.getString(ProcedureTypes.Data) && parent.data.name !== this.getString(ProcedureTypes.Action))/*(parent.data.name == this.getString(ProcedureTypes.IfControl) 
	    	|| parent.data.name == this.getString(ProcedureTypes.ElseControl
	    	|| parent.data.name == this.getString(ProcedureTypes.ForLoopControl));*/
	  }
	};

	
	getString(type: ProcedureTypes): string{
		return type.toString()
	}

	constructor(injector: Injector, public dialog: MatDialog, private layoutService: LayoutService){  
		super(injector, "procedure-editor"); 
	}

	openHelp($event, prod): void{
		$event.stopPropagation();

		if(prod.data.name == "Action"){
			let fn = prod.data.rightExpression.split("::");
			fn = { module: fn[0], name: fn[1] }
			this.layoutService.showHelp(fn);
		}
		
	}


	reset():void{
		this._procedureArr = [];
		this._node = undefined;
		this._tree = [];
	}

	update(){
		this._node = this.flowchartService.getSelectedNode();
		if(this._node !== undefined){
			this._procedureArr = this._node.getProcedure();
			this.updateProcedureTree();
			this.isVisible = true;
		}
		else{
			this.isVisible = false;
		}
	}


	//
	//
	//
	onMoveNode($event) {
		// get previous parent
		let moved_procedure: IProcedure = $event.node.model;
		let to_procedure: IProcedure = $event.to.parent.model;
		let moved_position: number = $event.to.index;

		let parent: IProcedure|IGraphNode = moved_procedure.getParent();

		// case: no parent and parent added
		// case: no parent and no parent
		// case: parent and different parent
		// case: parent and same parent
		// case: parent and no parent
		if( moved_procedure.getParent() === to_procedure ){
			if(parent === undefined){
				this._node.deleteProcedure(moved_procedure);
				this._node.addProcedureAtPosition(moved_procedure, moved_position);
			}
			else{
				to_procedure.deleteChild(moved_procedure);
				to_procedure.addChildAtPosition(moved_procedure, moved_position);
			}
		}
		else{
			
			if(parent === undefined){
				this._node.deleteProcedure(moved_procedure);
			}
			else{
				parent.deleteChild(moved_procedure);
			}

			if(to_procedure === undefined){
				this._node.addProcedureAtPosition(moved_procedure, moved_position)
			}
			else{
				to_procedure.addChildAtPosition(moved_procedure, moved_position);
			}

		}
		moved_procedure.setParent(to_procedure);


		this.flowchartService.update();

	}

	updateProcedureTree(){

		// converts the procedure into a tree item
		let getTreeItem = function(prod : IProcedure, index: number): Object{

			let procedure_type :ProcedureTypes = prod.getType();
			let treeItem = { 
				index: index,
				name: procedure_type, 
				children: [], 
				leftExpression: "undefined", 
				rightExpression: "undefined",
				model: prod
			};

			//let dataObj = { id: Math.random() , name: data.getTitle(), type: procedure_type, model: data } ; 

			// ProcedureType.Data
			if(procedure_type === ProcedureTypes.Data){
				treeItem["leftExpression"] = prod.getLeftComponent().expression;
				treeItem["rightExpression"] = prod.getRightComponent().expression;
			}
			else if(procedure_type === ProcedureTypes.Action ){
				treeItem["leftExpression"] = prod.getLeftComponent().expression;
				treeItem["rightExpression"] = prod.getRightComponent().expression;
				treeItem["params"] = prod.getRightComponent().params;
			}
			else if(prod.hasChildren() == true){
				treeItem["children"] = prod.getChildren().map(function(node, id){
					return getTreeItem(node, id) 
				})

				if(procedure_type == ProcedureTypes.ForLoopControl){
					treeItem["leftExpression"] = prod.getLeftComponent().expression;
					treeItem["rightExpression"] = prod.getRightComponent().expression;
				}
				else if(procedure_type == ProcedureTypes.IfControl){
					treeItem["leftExpression"] = prod.getLeftComponent().expression;
				}

			}
			else{
				throw Error("unknown procedure type");
			}

			return treeItem;
		}

		this._tree = this._procedureArr.map(function(prod, index){
			return getTreeItem(prod, index);
		})

	}


	updateProcedure($event: Event, prod: any, property: string){

		let procedure: IProcedure = prod.data.model;

		if(property == "left"){	
			let comp = procedure.getLeftComponent(); 
			comp.expression = prod.data.leftExpression;
			procedure.setLeftComponent(comp);
		}
		else if(property == "right"){
			let comp = procedure.getRightComponent(); 
			comp.expression = prod.data.rightExpression;
			comp.params = prod.data.params;
			procedure.setRightComponent(comp);
		}
		else{
			throw Error("Invalid procedure update");
		}

		this.flowchartService.update();

	}

	// todo:
	disableProcedure(prod: IProcedure): void{
		prod.disable();
		this.update();
	}

	deleteProcedure(prod: IProcedure): void{

		let parent: IProcedure = prod.getParent();
		if( parent ){
			parent.deleteChild(prod);
		}

		this._node.deleteProcedure(prod);

		this.flowchartService.update();
	}

}
