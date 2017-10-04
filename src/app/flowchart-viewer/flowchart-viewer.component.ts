import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { FlowchartService } from '../data/flowchart.service';
import { INode } from '../classes/INode';

@Component({
  selector: 'app-flowchart-viewer',
  templateUrl: './flowchart-viewer.component.html',
  styleUrls: ['./flowchart-viewer.component.css']
})
export class FlowchartViewerComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  message: any;
  data: any;

  nodes: INode[] = [];
  conn: any = [];
  codeblock :string= "";

  constructor(private flowchartService: FlowchartService) { 
		this.subscription = this.flowchartService.getMessage().subscribe(message => { 
			this.message = message; 
			this.update();
		});
  }

  ngOnInit() { this.update(); }

  ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
  }

  update(){
    this.nodes = this.flowchartService.getNodes();
    this.conn = this.flowchartService.getConnections();

    this.data = this.flowchartService.getChartData();
  }

  getData():string {
  	return JSON.stringify(this.flowchartService.getChartData());
  }

  displayCode(): string{
    this.codeblock = this.flowchartService.getCode();
    return this.codeblock;
  }  

  execute(): void{
    this.flowchartService.execute();
  }

}

