import {Module} from '../../app/base-classes/code/CodeModule';

export class SimpleMath extends Module{

	public static _name: string = "Math";
	static author: string = "AKM";
	public static version: number = 1;

	add(a: number, b: number): number{
		return a+b;
	}


	subtract(a: number, b: number): number{
		return a-b;
	}


	multiply(a: number, b: number): number{
		return a*b;
	}

}