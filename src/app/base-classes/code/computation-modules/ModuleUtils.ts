import {IModule} from "./IModule";

export class ModuleUtils{

	static getName(mod: IModule): string{
		return mod["_name"];
	}

	static getAuthor(mod: IModule): string{
		return mod["_author"];
	}

	static getVersion(mod: IModule): string{
		return mod["_version"];
	}

	static isValid(mod: IModule): boolean{
		return !!(this.getName(mod) && this.getVersion(mod) && this.getAuthor(mod));
	}

	static isCompatible(mod1: IModule, mod2: IModule): boolean{
		let _nameCheck: boolean = this.getName(mod1)  == this.getName(mod2);
		let _versionCheck: boolean = this.getVersion(mod1)  == this.getVersion(mod2);
		let _authorCheck: boolean = this.getAuthor(mod1)  == this.getAuthor(mod2);

		return _nameCheck  &&  _versionCheck && _authorCheck; 
	}

	
	static getParams(func: Function): string[]{
	 	let fnStr = func.toString().replace( /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, '');
		let result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match( /([^\s,]+)/g);
		if(result === null)
		 	result = [];

		return result;
	}

	static getFunctions(mod: IModule): {name: string, module: string, def: Function}[]{

		// default names to exclude
		let fn: {name: string, module: string, def: Function}[] = [];
		let module_name = this.getName(mod);
		let fns = Object.getOwnPropertyNames(mod).filter(function(prop){ 
					return [ "length", "prototype", "name", "_name", "_author", "_version"].indexOf(prop) == -1;
				});

		for(let f=0; f < fns.length; f++){
			if( mod.hasOwnProperty(fns[f]) ){
				let obj = { name: fns[f], 
							module: module_name,
							params: this.getParams( mod[fns[f]]),
							def: mod[fns[f]],
						  }
				fn.push(obj);
			}
			else{
				continue;
			}
		}

		return fn;
	};

}