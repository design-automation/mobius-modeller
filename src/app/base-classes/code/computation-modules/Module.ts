import {IModule} from "./IModule";

export class Module implements IModule{

	private _lastUpdated: Date;
	public _name: string;

	getName(): string{
		return "";
	}

	getFunctions(): {name: string, category: string, def: Function}[]{

		let fn: {name: string, category: string, def: Function}[] = [];
		let categories: string[];

		categories = Object.keys(this);

		for( let categoryIndex in categories ){

			let category = categories[categoryIndex];

			let fns = Object.keys(this[category]);

			for(let f=0; f < fns.length; f++){

				let obj = { name: fns[f], 
							category: category,
							def: this[category][fns[f]]
						  }

				fn.push(obj);
			}

		}

		return fn;
	};

}
