import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../global-services/layout.service'; 
import { FlowchartService } from '../../../global-services/flowchart.service'; 
import { Subscription } from 'rxjs/Subscription';
import { DomSanitizer} from '@angular/platform-browser';

import docs from '../../../../../node_modules/gs-modelling/docs_json/gs-modelling.json';

@Component({
  selector: 'app-help-viewer',
  templateUrl: './help-viewer.component.html',
  styleUrls: ['./help-viewer.component.scss']
})
export class HelpViewerComponent implements OnInit {

  _url;
  private _subscription: Subscription;

  _loadedModules: any;
  _activeMod: string;

  fnObj: {module: string, name: string};

  //modules/_group_.html
  constructor(private layoutService: LayoutService, private sanitizer: DomSanitizer, private flowchartService: FlowchartService) { 
  		this.sanitizer = sanitizer;
  		this._subscription = this.layoutService.getMessage().subscribe(message => { 
          if(message.text.startsWith("Module: ")){
  			    this.notify();
          }
  		});

      let mods = this.flowchartService.getModules().map(function(m){
          return m["_name"].toLowerCase();
      });

      this._loadedModules = this.flowchartService.getModules();

      for(let i=0; i < this._loadedModules.length; i++){
        let mod = this._loadedModules[i];
    
        let originalName: string = mod._name; 
        if(mod._helpObj[0]){
          let n: string = mod._helpObj[0].name;
          n = n.substr(1, n.length-2);
          originalName = n;
        }
        mod["_url"] = "_" + originalName + "_.html";
      }


  }

  notify(): void{
  		let url_segment: string = this.layoutService.getUrl();
      let url: string = 'https://phtj.github.io/gs-modelling/docs/' + url_segment;
      this._url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      
      let fnObj = this.layoutService.getObj();
      if(fnObj && fnObj.name){
        this.fnObj = fnObj;

        for(let m=0; m < this._loadedModules.length; m++){

            if(this._loadedModules[m]._name.toLowerCase() == fnObj.module.toLowerCase()){
              let mo = this._loadedModules[m]._helpObj[0];
              for(let f=0; f < mo.children.length; f++){
                  let child = mo.children[f];
                  if(fnObj.name.toLowerCase() == child.name.toLowerCase()){
                      fnObj["content"] = child;
                      fnObj["_url"] = this._loadedModules[m]["_url"];
                  }
              }
            }

        }
      }
      else if(fnObj && fnObj.module && !fnObj.name){
          this._activeMod = fnObj.module.toUpperCase();
          this.fnObj = undefined;
      }
  }

  showAll(): void{
      this.fnObj = undefined;
      this.layoutService.setObj();
  }  

  ngOnInit() { 
      this.notify();
  };

}
