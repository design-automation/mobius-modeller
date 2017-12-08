import { Component } from '@angular/core';
/*import { gs_json as gs } from "gs-json"; */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

    isExpanded = {
      editor: false, 
      viewer: false
    }

    isVisible = {
      geometry : true,
      code: false
    }

    action = {
        a1s: 30,
        a2s: 40,
        a3s: 30,
        a1v: true,
        a2v: true,
        a3v: false,
        useTransition: true,
    }

    constructor(){ }

    toggleEditor(){
      this.isExpanded.editor = !this.isExpanded.editor; 
    }

    toggleViewer(){
      this.isExpanded.viewer = !this.isExpanded.viewer; 
    }

}
