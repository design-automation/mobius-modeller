import { Component } from '@angular/core';
import { LayoutService } from './global-services/layout.service';
/*import { gs_json as gs } from "gs-json"; */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

    layout; 

    constructor(private layoutService: LayoutService){ this.layout = layoutService.getAssets(); }

}
