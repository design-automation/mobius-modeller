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

  _helpMods: any;

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

      this._helpMods = docs.children.filter(function(child){
          let mod_name: string = child.name.substring(1, child.name.length - 1);
          return mods.indexOf(mod_name) > -1;
      })

      console.log(this._helpMods);
  }

  notify(): void{
  		let url_segment: string = this.layoutService.getUrl();
      let url: string = 'https://phtj.github.io/gs-modelling/docs/' + url_segment;
      this._url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getUrl(name: string, fn: string): string{
    return "_" + name.substring(1, name.length - 1).toLowerCase() + "_.html#" + fn.toLowerCase(); 
  }

  getModName(name: string): string{
    return name.substring(1, name.length - 1).toUpperCase();
  }

  ngOnInit() { 
      this.notify();
  };

}
