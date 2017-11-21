export class FlowchartFactory{

	private code_factory: CodeFactory = new CodeFactory();
	
	getFlowchart(type: string): IFlowchart{
		if(type == "js" || type == "py"){
			let code_generator: ICodeGenerator = this.code_factory.getCodeGenerator("js");
			return new Flowchart(code_generator);
		}
		else{
			console.error("Invalid language specified!");
		}
	}
}