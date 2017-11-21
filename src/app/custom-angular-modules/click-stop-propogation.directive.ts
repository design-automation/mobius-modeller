import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[click-stop-propogation]'
})
export class ClickStopPropogationDirective {

  constructor() { }

  @HostListener("click", ["$event"])
  public onClick(event: any): void{
  	console.log("stopped");
  	event.stopPropagation(); 
  }

}
