import {IModule} from '../../app/base-classes/code/CodeModule';
import * as gs_modeling from "gs-modelling";

export class GS_Modeling implements IModule{

	private static _name: string = "GS_Modeling";
    private static _author: string = "Patrick";
	private static _version: number = 0.1;

	private static isInstance: boolean = true;

	private static getInstance(): IModule{
		for(let prop in gs_modeling){
	      this[prop] = gs_modeling[prop];
	    }
		return this;
	}

}