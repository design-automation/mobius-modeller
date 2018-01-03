import { Component, OnInit } from '@angular/core';

import { ConsoleService } from '../../global-services/console.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {

  _messages = [];
  _subscription; 

  constructor(private consoleService: ConsoleService) { 
  		this._subscription = this.consoleService.getMessage().subscribe(message => { 
			this.notify();
		});
  }

  ngOnInit() {
  	this._messages = this.consoleService.getContent();
  }

  notify(){ 
  	this._messages = this.consoleService.getContent();
  }


}
