import { Component } from '@angular/core';
import { LayoutService } from './global-services/layout.service';
/*import { gs_json as gs } from "gs-json"; */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent{

    layout; 
    supported: boolean = false;

    constructor(private layoutService: LayoutService){ 

    	let browser: string = this.checkBrowser();
    	if(browser == "Chrome"){
    		this.layout = layoutService.getAssets(); 
    		this.supported = true;
    	}
    	else{
    		alert("Oops... You seem to be using a browser not supported by Mobius. Please use Chrome.");
    		this.supported = false;
    	}
    }
 	
    checkBrowser(): string { 
    	let brw: string = ""; 	
     	if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
	    {
	        brw = 'Opera';
	    }
	    else if(navigator.userAgent.indexOf("Chrome") != -1 )
	    {
	        brw = 'Chrome';
	    }
	    else if(navigator.userAgent.indexOf("Safari") != -1)
	    {
	        brw = 'Safari';
	    }
	    else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
	    {
	         brw = 'Firefox';
	    }
	    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document["documentMode"] == true )) //IF IE > 10
	    {
	      brw = 'IE'; 
	    } 
	    else if(window.navigator.userAgent.indexOf("Edge") > -1) //IF IE > 10
	    {
	      brw = 'Edge'; 
	    } 
	    else 
	    {
	       brw = 'unknown';
	    }

	    return brw;
    }

}
