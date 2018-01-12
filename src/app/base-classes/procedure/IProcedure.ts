/*enum ControlTypes{
	FOR = "for each", 
	IF = "if else"
}*/

//
//	 A procedure is a line of code that gets inserted into a node
// 	 A procedure can be of three types - data, action or control
//   Data Procedure -> Has a left side and a right side: 
// 			<some-variable-name> = <some-expression>
//   Action Procedure -> Has a left side (optional) and a right side derieved from modules and params: 
// 			<some-variable-name> = <some-expression-derieved-from-module-and-params>
//   Control Procedure -> Doesn't have a left side, but has conditional statements and contains procedures inside itself
//
//

import {ICodeGenerator} from "../code/CodeModule";
import {ProcedureTypes} from "./ProcedureTypes";
import {IComponent} from "./IComponent"; 

export interface IProcedure{

	getType(): ProcedureTypes; 

	update(prodData: any, parent: IProcedure): void;

	isSelected(): boolean; 
	select(): void;
	unselect(): void;
	isDisabled(): boolean; 
	enable(): void;
	disable(): void;

	printToConsole(): boolean;
	enablePrint(): void;
	disablePrint(): void;

	hasParent(): boolean;
	setParent(parent: IProcedure): void;
	getParent(): IProcedure;

	hasChildren(): boolean;
	getChildren(): IProcedure[];
	addChild(procedure: IProcedure): void;
	addChildFromData(child: IProcedure): void;
	addChildAtPosition(procedure: IProcedure, index: number): void;
	deleteChild(procedure: IProcedure): void;

	getLeftComponent(): IComponent;
	setLeftComponent(expression: IComponent): void;
	getRightComponent(): IComponent;
	setRightComponent(expression: IComponent): void;

	getCodeString(code_generator: ICodeGenerator): string;
}




