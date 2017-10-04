import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlowchartService } from '../data/flowchart.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private http: HttpClient, private flowchart: FlowchartService) {}

  ngOnInit() {
  }

  loadFile(filename: string): void{
  	let file = "../assets/examples/test.json"
  	this.http.get(file).subscribe(data => {
  	      	
            // Read the result field from the JSON response.
            // todo: check validity of data

  	      	// Load data in app service
            this.flowchart.loadChartFromData(data);
      });
    }

}
