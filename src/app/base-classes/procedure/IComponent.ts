export interface IComponent{
	expression: string;
	isAction: boolean;
	module: string;
	category: string; 
	fn_name: string; 
	params: Array<any>;
}
