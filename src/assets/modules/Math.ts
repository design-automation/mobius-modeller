import {Module} from '../../app/base-classes/code/CodeModule';

export class Math extends Module{

	static _name: string = "Math";
	static author: string = "AKM";
	static version: number = 1;

	// define a category
	SimpleMath: Object = {

		add(a: number, b: number): number{
			return a+b;
		}, 


		subtract(a: number, b: number): number{
			return a-b;
		},


		multiply(a: number, b: number): number{
			return a*b;
		}

	}

	// another category
	ComplexMath: Object = {

		square(a: number): number{
			return a*a;
		}, 


		cube(a: number): number{
			return a*a*a;
		}

	}

}