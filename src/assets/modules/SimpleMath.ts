import {IModule} from '../../app/base-classes/code/CodeModule';

export class SimpleMath implements IModule{

	private static _name: string = "SimpleMath";
    private static _author: string = "AKM";
	private static _version: number = 1;

	public static add(a: number, b: number): number{
		return a+b;
	}


	public static subtract(a: number, b: number): number{
		return a-b;
	}

	public static multiply(a: number, b: number): number{
		return a*b;
	}

}