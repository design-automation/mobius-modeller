export interface IModule{
	getName(): string;
	getFunctions(): {name: string, module: string, def: Function}[];
}

