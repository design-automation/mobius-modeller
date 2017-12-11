import {Module} from '../../app/base-classes/code/CodeModule';

export class ComplexMath extends Module{

	public static _name: string = "Math";
	static author: string = "AKM";
	public static version: number = 1;

	public square(a: number): number{
		return a*a;
	}


	public cube(a: number): number{
		return a*a*a;
	}

}