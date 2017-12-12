import {IModule} from '../../app/base-classes/code/CodeModule';

export class ComplexMath implements IModule{

	private static _name: string = "ComplexMath";
    private static _author: string = "AKM";
	private static _version: number = 1;

	public static square(a: number): number{
		return a*a;
	}

	public static cube(a: number): number{
		return a*a*a;
	}

}