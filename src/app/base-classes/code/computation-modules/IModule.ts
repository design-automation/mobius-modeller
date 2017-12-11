export interface IModule{
	getName(): string;
	getFunctions(): {name: string, category: string, def: Function}[];
}

