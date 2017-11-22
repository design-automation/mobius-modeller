import {ICodeGenerator} from './ICodeGenerator';
import {CodeGeneratorPY} from './generators/python_generator';
import {CodeGeneratorJS} from './generators/javascript_generator';
import {Module} from './computation-modules/Module'; 

export class CodeFactory{

	private _modules: Module[];

	constructor(){}

	getCodeGenerator(language: string): ICodeGenerator{

		if(language == "js"){
			return new CodeGeneratorJS();
		}
		/*else if(language == "py"){
			return new CodeGeneratorPY();
		}*/
		else
			throw Error("Unknown language");

	}; 

}