import {InputPortTypes} from "./InputPortTypes";
import {OutputPortTypes} from "./OutputPortTypes";

export interface IPort{

	getId(): string;
	getType(): InputPortTypes|OutputPortTypes;

	setType(type: InputPortTypes|OutputPortTypes): void;


	isSelected(): boolean;
	isDisabled(): boolean;
	disable(): void;
	enable(): void;

	update(portData: IPort): void;

	getName(): string;
	setName(name: string): void; 

	isConnected(): boolean;
	connect(): void;
	disconnect(): void;

	getDefaultValue(): any;
	setDefaultValue(value: any): void; 
	setComputedValue(value: any): void;

	getValue(): any;

	reset(); 
}

