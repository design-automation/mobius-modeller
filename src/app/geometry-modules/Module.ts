interface IModule{
	getName(): string;
	getAuthor(): string;
}

export class Module implements IModule{
	
	private name: string;
	private author: string;

	constructor(name: string, author: string){
		this.name = name; 
		this.author = author;
	}

	getName(): string{
		return this.name;
	}

	getAuthor(): string{
		return this.author;
	}

	getAllMethodNames(): Set<any>{

		let obj:any = this;

		let methods = new Set();
		while (obj = Reflect.getPrototypeOf(obj)) {
			let keys = Reflect.ownKeys(obj)
			keys.forEach((k) => methods.add(k));
		}

		return methods;

	}
}
