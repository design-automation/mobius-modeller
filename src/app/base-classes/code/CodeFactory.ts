import { ModuleService } from '../data/module.service'; 
import { CodeGenerator } from './CodeGenerators';
import { CodeGeneratorPY } from './code_generators/python_generator';
import { CodeGeneratorJS } from './code_generators/javascript_generator';


export class CodeFactory{

	private _moduleService: ModuleService;

	constructor(){ this._moduleService = new ModuleService(); }

	getCodeGenerator(language: string): CodeGenerator{

		if(language == "js"){
			return new CodeGeneratorJS(this._moduleService);
		}
		else if(language == "py"){
			return new CodeGeneratorPY(this._moduleService);
		}
		else
			throw Error("Unknown language");

	}; 

}