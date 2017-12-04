import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    action = {
        a1s: 25,
        a2s: 50,
        a3s: 25,
        a1v: true,
        a2v: false,
        a3v: true,
        useTransition: true,
    }

    update(){
      this.action.a2v = false;
    }
}
