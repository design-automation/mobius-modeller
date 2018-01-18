import {Component, Injector, OnInit, ViewChild} from '@angular/core';
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
export class ProcedureEditorComponent extends Viewer implements OnInit{

	@ViewChild('tree') tree;

	_focusedProd;

  	_procedureArr: IProcedure[] = [];
  	_node: IGraphNode;

  	//_treeNodes = [];
	_tree_options = {
	  allowDrag: function(element){
	  	if(element.data._type == ProcedureTypes.IfControl || element.data._type == ProcedureTypes.ElseControl){
	  		return false;
	  	}
	  	else{
	  		return true;
	  	}
	 },
	  allowDrop:  (element, { parent, index }) => {
	    // return true / false based on element, to.parent, to.index. e.g.
	    return (	parent.data._type !== ProcedureTypes.IfElseControl 
	    			&& parent.data._type !== ProcedureTypes.Data 
	    			&& parent.data._type !== ProcedureTypes.Action)/*(parent.data._type == ProcedureTypes.IfControl) 
	    	|| parent.data._type == ProcedureTypes.ElseControl
	    	|| parent.data._type == ProcedureTypes.ForLoopControl));*/
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

		if(prod.data._type == "Action"){
			let fn = prod.data.getRightComponent().expression.split(".");
			fn = { module: fn[0], name: fn[1] };
			this.layoutService.showHelp(fn);
		}
		
	}

	reset():void{
		this._procedureArr = [];
		this._node = undefined;
		//this._treeNodes = [];
	}

	update(message: string){
		if(message == "procedure"){
			this.tree.treeModel.update();
			//this.tree.treeModel.expandAll();
		}
		else{
			this._node = this.flowchartService.getSelectedNode();
			this._procedureArr = this._node.getProcedure();
			//this.updateProcedureTree();
		}
	}		

	ngOnInit(){
		this._node = this.flowchartService.getSelectedNode();
		this._procedureArr = this._node.getProcedure();
		//this._treeNodes = this._procedureArr; 
		this.tree.treeModel.update();

	}

	ngAfterViewInit() {
    	this.tree.treeModel.expandAll();
  	}

	toggle(prod: IProcedure): void{
		if (prod.isDisabled()){
			prod.enable();
		}
		else{
			prod.disable();
		}
	}

	togglePrint(prod: IProcedure): void{
		if (prod.printToConsole()){
			prod.disablePrint();
		}
		else{
			prod.enablePrint();
		}
	}

	focus($event, prod): void{
		this._focusedProd = prod;
		this.flowchartService.selectProcedure(prod.data);
	}

	//
	//
	//
	onMoveNode($event) {
		// get previous parent
		let moved_procedure: IProcedure = $event.node;
		let to_procedure: IProcedure = $event.to.parent;
		let moved_position: number = $event.to.index;

		moved_procedure.setParent(to_procedure);

		// case: no parent and parent added
		// case: no parent and no parent
		// case: parent and different parent
		// case: parent and same parent
		// case: parent and no parent
		// if( moved_procedure.getParent() === to_procedure ){
		// 	if(parent === undefined){
		// 		this._node.deleteProcedure(moved_procedure);
		// 		this._node.addProcedureAtPosition(moved_procedure, moved_position);
		// 	}
		// 	else{
		// 		to_procedure.deleteChild(moved_procedure);
		// 		to_procedure.addChildAtPosition(moved_procedure, moved_position);
		// 	}
		// }
		// else{
			
		// 	if(parent === undefined){
		// 		this._node.deleteProcedure(moved_procedure);
		// 	}
		// 	else{
		// 		parent.deleteChild(moved_procedure);
		// 	}

		// 	if(to_procedure === undefined){
		// 		this._node.addProcedureAtPosition(moved_procedure, moved_position)
		// 	}
		// 	else{
		// 		to_procedure.addChildAtPosition(moved_procedure, moved_position);
		// 	}

		// }

		//this.flowchartService.update();

	}

	// converts the procedure into a tree item
	// getTreeItem(prod : IProcedure, index: number): Object{

	// 	let self = this;

	// 	let procedure_type :ProcedureTypes = prod.getType();
	// 	let treeItem = { 
	// 		index: index,
	// 		name: procedure_type, 
	// 		expanded: true,
	// 		children: [], 
	// 		leftExpression: "undefined", 
	// 		rightExpression: "undefined",
	// 		model: prod
	// 	};

	// 	//let dataObj = { id: Math.random() , name: data.getTitle(), type: procedure_type, model: data } ; 

	// 	// ProcedureType.Data
	// 	if(procedure_type === ProcedureTypes.Data){
	// 		treeItem["leftExpression"] = prod.getLeftComponent().expression;
	// 		treeItem["rightExpression"] = prod.getRightComponent().expression;
	// 	}
	// 	else if(procedure_type === ProcedureTypes.Action ){
	// 		treeItem["leftExpression"] = prod.getLeftComponent().expression;
	// 		treeItem["module"] = prod.getRightComponent().module;
	// 		treeItem["function"] = prod.getRightComponent().fn_name;
	// 		treeItem["params"] = prod.getRightComponent().params;
	// 	}
	// 	else if(prod.hasChildren() == true){
	// 		treeItem["children"] = prod.getChildren().map(function(node, id){
	// 			return self.getTreeItem(node, id) 
	// 		})

	// 		if(procedure_type == ProcedureTypes.ForLoopControl){
	// 			treeItem["leftExpression"] = prod.getLeftComponent().expression;
	// 			treeItem["rightExpression"] = prod.getRightComponent().expression;
	// 		}
	// 		else if(procedure_type == ProcedureTypes.IfControl){
	// 			treeItem["leftExpression"] = prod.getLeftComponent().expression;
	// 		}

	// 	}
	// 	else{
	// 		throw Error("unknown procedure type");
	// 	}

	// 	return treeItem;
	// }

	// updateProcedureTree(){
	// 	let self = this;
	// 	this._treeNodes = this._procedureArr.map(function(prod, index){
	// 		return self.getTreeItem(prod, index);
	// 	})
	// }

	updateProcedure($event: Event, prod: any, property: string){

		//
		// todo: change this string attachment!
		if(property == 'left' && prod.data._type !== "If"){
			prod.data.getLeftComponent().expression = 
				prod.data.getLeftComponent().expression.replace(/[^\w\[\]]/gi, '');
		}

		// let procedure: IProcedure = prod.data;

		// if(property == "left"){	
		// 	let comp = procedure.getLeftComponent(); 
		// 	//comp.expression = prod.data.leftExpression;
		// 	//procedure.setLeftComponent(comp);
		// }
		// else if(property == "right"){
		// 	let comp = procedure.getRightComponent(); 
		// 	comp.expression = prod.data.rightExpression;
		// 	comp.params = prod.data.params;
		// 	procedure.setRightComponent(comp);
		// }
		// else{
		// 	throw Error("Invalid procedure update");
		// }

		//this.tree.treeModel.update();
		/// check if valid procedure was generated
		// this.flowchartService.updateProcedure(prod.data);

	}

	deleteProcedure(node): void{

		let parent = node.parent;
		if(parent.data.virtual){
			this._node.deleteProcedure(node.data);
			this._procedureArr = this._node.getProcedure();
		}
		else{
			parent.data.deleteChild(node.data);
			this.tree.treeModel.update();
		}

		this.flowchartService.selectProcedure(undefined);

		// let prod: IProcedure = node.data;
		// if(prod.getParent()){
		// 	prod.getParent().deleteChild(prod);
		// 	this.tree.treeModel.update();
		// }
		// else{
		// }

		// this.update("procedure");
		
		//this.flowchartService.update();
	}

}
