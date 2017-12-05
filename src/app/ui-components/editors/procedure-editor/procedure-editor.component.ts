import { Component, Injector, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { IGraphNode } from '../../../base-classes/node/NodeModule';
import { IProcedure, ProcedureFactory, ProcedureTypes } from '../../../base-classes/procedure/ProcedureModule';
import { Viewer } from '../../../base-classes/viz/Viewer';

import { FlowchartService } from '../../../global-services/flowchart.service';

import { ModuleboxComponent } from '../../controls/modulebox/modulebox.component';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

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

	constructor(injector: Injector, public dialog: MatDialog){  super(injector, "procedure-editor"); }

	reset():void{
		this._procedureArr = [];
		this._node = undefined;
		this._tree = [];
	}

	update(){
		this._node = this.flowchartService.getSelectedNode();
		this._procedureArr = this._node.getProcedure();
		this.updateProcedureTree();
		this.isVisible = true;
	}

	getImageForType(type: ProcedureTypes): string{
		return this.getString(type)[0];
	}

	getString(type: ProcedureTypes): string{
		return type.toString()
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
				model: prod,
				isExpandedField: 'expanded'
			};

			//let dataObj = { id: Math.random() , name: data.getTitle(), type: procedure_type, model: data } ; 

			// ProcedureType.Data
			if(procedure_type === ProcedureTypes.Data){
				treeItem["leftExpression"] = prod.getLeftComponent().expression;
				treeItem["rightExpression"] = prod.getRightComponent().expression;
			}
			else if(procedure_type === ProcedureTypes.Action ){
				// todo
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


	//
	//
	//

	addProcedure($event, type: ProcedureTypes): void{

		$event.stopPropagation();

		if( type == ProcedureTypes.Data){
			let default_variable_name: string = "var" + this._procedureArr.length;
			let prod_data: {result: string, value: string} = {result: default_variable_name, value: "undefined"};
			let prod:IProcedure = ProcedureFactory.getProcedure( ProcedureTypes.Data, prod_data );
			this._node.addProcedure(prod);
		}
		else if (type == ProcedureTypes.IfElseControl){
			let prod_data : {if_condition: string, el_condition: string} = {if_condition: "undefined", el_condition: "undefined"};
			let prod:IProcedure = ProcedureFactory.getProcedure( ProcedureTypes.IfElseControl, prod_data);
			this._node.addProcedure(prod);
		}
		else if(type == ProcedureTypes.ForLoopControl){
			let prod_data :  {variable: string, array_name: string} = {variable: "i", array_name: "[]"};
			let prod:IProcedure = ProcedureFactory.getProcedure( ProcedureTypes.ForLoopControl, prod_data);
			this._node.addProcedure(prod);
		}
		else if(type == ProcedureTypes.Action){
		    /*let dialogRef = this.dialog.open(ModuleboxComponent, {
			  height: '400px',
			  width: '600px',
			});

			dialogRef.afterClosed().subscribe(result => {
			  console.log(`Dialog result: ${result}`); // Pizza!
			});

			dialogRef.close('Pizza!');*/
		}
		else{
			throw Error("Procedure Type invalid");
		}

		this.flowchartService.update();
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
		// remove child from parent, if any
		this._node.deleteProcedure(prod);
		this.flowchartService.update();
	}

}
