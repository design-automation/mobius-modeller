import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ConsoleService {

	_messages;

	constructor() {
		this._messages = [];
	}

	// 
	// message handling between components
	// 
	private subject = new Subject<any>();
	sendMessage(message ?: string) {
	  this.subject.next({ text: message });
	}

	clearMessage() {
	  this.subject.next();
	}

	getMessage(): Observable<any> {
	  return this.subject.asObservable();
	}

	addMessage(message: string): void{
  		let obj = {}
  		obj["time"] = new Date();
  		obj["message"] = message;
  		this._messages.push(obj);
  		this.sendMessage();
	};

	getContent(){
			return this._messages; 
	}

}
