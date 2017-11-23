import {PortTypes} from "./PortTypes";

export interface IPort{

	getId(): string;
	getType(): PortTypes;

	setType(type: PortTypes): void;


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

