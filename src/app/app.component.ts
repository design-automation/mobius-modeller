import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    
    isExpanded = {

      editor: false, 
      viewer: false

    }

    toggleEditor(){
      this.isExpanded.editor = !this.isExpanded.editor; 
    }

    toggleViewer(){
      this.isExpanded.viewer = !this.isExpanded.viewer; 
    }

}
