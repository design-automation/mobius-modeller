interface IPort{
	getParent(): number;
	getType(): string;
	isConnected(): boolean;
	isSelected(): boolean;
	toggle(): boolean;
	getName(): string;
	getValue(): any;
}

class Port implements IPort{
	private _id: number;
	private _belongsTo: number;
	private _name: string;
	private _connected: boolean; 
	private _default: any;
	private _selected: boolean;

	constructor(parentId: number, name: string, connected: boolean, id: number){ 
		this._belongsTo = parentId;
		this._name = name;
		this._connected = connected; 
		this._id = id;
	}

	getParent(): number{
		return this._belongsTo;
	}

	getType(): string{
		return "";
	}

	isConnected(): boolean{
		return this._connected;
	}

	isSelected(): boolean{
		return this._selected;
	}

	toggle(): boolean{
		this._selected  = !this._selected;
		return this._selected
	}

	getName(): string{
		return this._name;
	}

	getValue(): any{
		return undefined;
	}

	getCode(): string{
		if( this._connected == true ) 
			return "";

		return "let " + this.getName() + " = " + this.getValue(); 
	}

}

export class InputPort extends Port{
	
	private _inputType: any;

	constructor(parentId: number, name: string, connected: boolean, id: number, opts?:any){ 
		super(parentId, name, connected, id);
		this._inputType = opts;
	}

	getType(): string{
		return "input";
	}

	default(): any{
		return 0;
	}

	getInputType(): any{
		return this._inputType;
	}

	setInputType(type: any): void{
		this._inputType = type;
	}

	getValue(): any{
		if (this._inputType.connected == true)
			return "-compute-";

		return this._inputType.dataValue;
	}

}

export class OutputPort extends Port{

	getType(): string{
		return "output";
	}

	default(): any{
		return 0;
	}
}