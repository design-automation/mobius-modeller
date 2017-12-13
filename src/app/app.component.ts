import { Component } from '@angular/core';
import { LayoutService } from './global-services/layout.service';
/*import { gs_json as gs } from "gs-json"; */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

    action; 

    isVisible = {
      geometry : true,
      code: false
    }

    constructor(private layoutService: LayoutService){ this.action = layoutService.getAssets(); }

    toggle(viewer_name: string): void{

        if(viewer_name == "geometry"){
            this.isVisible.geometry = true; 
            this.isVisible.code = false;
        }
        else if(viewer_name){
            this.isVisible.geometry = false; 
            this.isVisible.code = true;
        }
        else{
          throw Error("Unknown Viewer")
        }
    }

    showEditor(){ 
        this.layoutService.showEditor();
    }

    hideEditor(){
        this.layoutService.hideEditor();
    }


    log($event){
      console.log($event);
    }

}
