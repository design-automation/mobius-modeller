import { Component } from '@angular/core';
/*import { gs_json as gs } from "gs-json"; */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

    isVisible = {
      geometry : true,
      code: false
    }

    constructor(){ }

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

}
