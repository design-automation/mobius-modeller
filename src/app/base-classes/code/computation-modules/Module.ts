import {IModule} from "./IModule";

export class Module implements IModule{

	private _lastUpdated: Date;

	getFunctions(): string[]{
		return [];
		/*let obj = this;
		let props = [];

	    do {
	        props = props.concat(Object.getOwnPropertyNames(obj));
	    } while (obj = Object.getPrototypeOf(obj));

	    return props.sort().filter(function(e, i, arr) { 
	       if (e!=arr[i+1] && typeof obj[e] == 'function') return true;
	    });*/
	};

}
