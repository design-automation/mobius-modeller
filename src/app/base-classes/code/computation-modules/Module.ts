import {IModule} from "./IModule";

export class Module implements IModule{

	private _lastUpdated: Date;
	public _name: string;

	getName(): string{
		return "";
	}

	getFunctions(): {name: string, module: string, def: Function}[]{

		let fn: {name: string, module: string, def: Function}[] = [];
		let module_name = this.getName();
		console.log(this);
		let fns = Object.keys(this);

		for(let f=0; f < fns.length; f++){

			let obj = { name: fns[f], 
						module: module_name,
						def: this[fns[f]]
					  }
			fn.push(obj);
		}

		return fn;
	};

}
