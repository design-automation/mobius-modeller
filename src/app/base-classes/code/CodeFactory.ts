import {ICodeGenerator} from './ICodeGenerator';
import {CodeGeneratorJS} from './generators/javascript_generator';
import {IModule} from './computation-modules/IModule'; 

export class CodeFactory{

	private _modules: IModule[];

	static getCodeGenerator(language: string): ICodeGenerator{

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