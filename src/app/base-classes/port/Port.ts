import {IdGenerator} from '../misc/GUID';

export abstract class Port implements IPort{

	private _id: string;
	private _type: string;

	private _selected: boolean = false;
	private _disabled: boolean = false;

	private _name: string;

	private _connected: boolean = false; 

	// values
	private _default: any = undefined;  
	private _computed: any = undefined;

	constructor(name: string){ 
		this._id =  IdGenerator.getId();
		this._name = name;
	}

	getId(): string{
		return this._id;
	}

	getType(): string{
		throw Error("Not implemented");
	}

	isSelected(): boolean{
		return this._selected; 
	}

	toggle(): boolean{
		this._disabled  = !this._disabled;
		return this._disabled
	}
	

	//
	//
	//

	getName(): string{
		return this._name;
	}

	setName(name: string): void{
		this._name = name;
	}


	//
	//
	//

	isConnected(): boolean{
		return this._connected;
	}

	connect(): void{
		this._connected = true;
	}

	disconnect(): void{
		this._connected = false;
	}

	setDefaultValue(value: any): void{
		this._default = value;
	}

	setComputedValue(value: any): void{
		this._computed = value;
	}

	getValue(): any{
		if (this._computed !== undefined)
			return this._computed;
		else
			return this._default;
	}

	//
	//
	//
	reset(): void{
		this._computed = undefined;
	}

}
