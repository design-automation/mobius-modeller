interface IPort{
	getId(): number;
	getParent(): number;
	getType(): string;
	isConnected(): boolean;
	isSelected(): boolean;
	toggle(): boolean;

	setName(name: string): void; 
	setConnected(val: boolean): void;

	getName(): string;
	getValue(): any;
	setDValue(value: any): any;
	reset(): void;
}

class Port implements IPort{
	private _id: number;
	private _belongsTo: number;
	private _connected: boolean = false; 
	private _name: string;
	private _dValue: any = undefined;  // defaults
	private _selected: boolean;

	constructor(parentId: number, name: string, id: number, value?: any){ 
		this._belongsTo = parentId;
		this._name = name;
		this._id = id;
		this._dValue = value;
	}

	reset(): void{
		this._dValue = undefined;
	}

	getId(): number{
		return this._id;
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

	setName(name: string): void{
		//todo: validate the name
		
		this._name = name;
	}

	setConnected(conn: boolean): void{
		this._connected = conn;
	}

	getName(): string{
		return this._name;
	}

	getValue(): any{
		return this._dValue;
	}

	setDValue(value: any): any{
		this._dValue = value;
	}


}

export class InputPort extends Port{
	
	private _inputType: any = {name: "input", id: 1};
	private _dataValue: any;


	constructor(parentId: number, name: string, id: number, dValue?: any, type?:any){ 
		super(parentId, name, id, dValue);
		this._inputType = type ? type : {name: "input", id: 1};
	}

	getType(): string{
		return this._inputType.name;
	}

	setType(type: any): void{
		this._inputType = type;
	}

	setValue(value: any){
		this._dataValue = value;
	}

	getValue(): any{

		// ??
		/*if (this._inputType.connected == true){
			console.warn("here here !");
			return super.getValue();
		}*/

		// super.getValue() - gets the default value
		//return (super.getValue() != undefined ? super.getValue() : this._inputType.dataValue);
		if( this._dataValue == undefined )
			return super.getValue();
		else
			return this._dataValue; 

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