import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';
import {EViewer} from '../ui-components/viewers/EViewer';

@Injectable()
export class LayoutService {

  	private layout = {
        useTransition: true,
        gutter: 7,
        size: {
          main: 70, 
          side: 30, 
          top: 33, 
          middle: 33, 
          bottom: 33
        },
        content: {
          main: EViewer.Viewer, 
          side: {
            top: EViewer.Flowchart, 
            middle: EViewer.Editor,
            bottom: EViewer.Parameter
          }
        }
  	}

    private viewContainerIndex: number = 5; 

    _url: string = "index";
    _fnObj: {module: string, name: string};

  	constructor() { }

    // handing subscriptions
    private subject = new Subject<any>();
    sendMessage(message: string) {
        this.subject.next({ text: message });
    }
   
    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

    showHelp(fn: {module: string, name: string}): void{
        this._url  = "modules/" + "_" + fn.module.toLowerCase() + "_";
        this._fnObj = fn;
        this.sendMessage("Module: " + fn.module);
    } 

    showConsole(): void{
        this.sendMessage("console");
    }

    getViewContainer(): number{
      return this.viewContainerIndex;
    }

    setViewContainer(index: number): void{
      this.viewContainerIndex = index;
    }

    getUrl(): string{
      return this._url;
    }

    getObj(): {module: string, name: string}{
      return this._fnObj;
    }

    setObj(): void{
      this._url = undefined;
    }

    // other functionality
  	getAssets(){
  		return this.layout;
  	}

  	maximize(panel_id: string): void{

        if(panel_id == "main"){
          return;
        }

        // get the panel_id passed and the corresponding component
        // interchange values
        let max_item = this.layout.content.side[panel_id];

        if(max_item){
           let current_main = this.layout.content.main;
           this.layout.content.main = max_item; 
           this.layout.content.side[panel_id] = current_main;
        }

        this.sendMessage("Layout Changed");

    }

    minimize(panel_id: string): void{
      alert("To be implemented");
    }

    restore(panel_id: string): void{
      alert("To be implemented");
    }
}