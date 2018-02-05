import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation} from '@angular/core';
import { DatePipe } from '@angular/common';
import { ConsoleService } from '../../global-services/console.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss'],
  encapsulation: ViewEncapsulation.None 
})
export class ConsoleComponent implements OnInit {

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  _messages = [];
  _subscription; 

  constructor(private consoleService: ConsoleService) { 
  		this._subscription = this.consoleService.getMessage().subscribe(message => { 
			this.notify();
		});
  }

  ngOnInit() {
  	this._messages = this.consoleService.getContent();
    this.scrollToBottom();
  }

  scrollToBottom(): void {
      try {
          this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      } catch(err) { }                 
  }

  notify(){ 
  	this._messages = this.consoleService.getContent();
  }

  clearConsole(): void{
    this.consoleService.clearConsole();
  }

}
