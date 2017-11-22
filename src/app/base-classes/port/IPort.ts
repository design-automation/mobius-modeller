interface IPort{

	getId(): string;
	getType(): string;

	isSelected(): boolean;
	toggle(): boolean;

	getName(): string;
	setName(name: string): void; 

	isConnected(): boolean;
	connect(): void;
	disconnect(): void;

	setDefaultValue(value: any): void; 
	setComputedValue(value: any): void;

	getValue(): any;

	reset(); 

}

