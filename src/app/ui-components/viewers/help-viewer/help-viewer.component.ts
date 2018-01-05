import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../global-services/layout.service'; 
import { Subscription } from 'rxjs/Subscription';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-help-viewer',
  templateUrl: './help-viewer.component.html',
  styleUrls: ['./help-viewer.component.scss']
})
export class HelpViewerComponent implements OnInit {

  _url;
  private _subscription: Subscription;

  //modules/_group_.html
  constructor(private layoutService: LayoutService, private sanitizer: DomSanitizer) { 
  		this.sanitizer = sanitizer;
  		this._subscription = this.layoutService.getMessage().subscribe(message => { 
          if(message.text.startsWith("Module: ")){
  			    this.notify();
          }
  		});
  }

  notify(): void{
  		let url_segment: string = this.layoutService.getUrl();
      let url: string = 'https://phtj.github.io/gs-modelling/docs/' + url_segment;
      this._url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() { 
      this.notify();
  };

}
