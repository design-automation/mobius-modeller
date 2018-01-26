import { Component, Injector, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InputPort, InputPortTypes } from '../../../base-classes/port/PortModule';

//
// Component for Parameter Settings
//
@Component({
  selector: 'parameter-settings-dialog',
  templateUrl: 'parameter-settings-dialog.html',
})
export class ParameterSettingsDialogComponent {

  type: InputPortTypes; 
  input: InputPort;
  inputPortTypes = InputPortTypes;
  opts;

  constructor(
    
    public dialogRef: MatDialogRef<ParameterSettingsDialogComponent>,
    
    @Inject(MAT_DIALOG_DATA) public data: any) { 
  			this.type = data.input.getType();
  			this.input = data.input;
  			this.opts = this.input.getOpts();
  	}

  	updateDefaultValue($event): void{
	  	let value: string = $event.srcElement.value;
      console.log("update");
  		if(value.trim().length > 0){

  			if(this.type == InputPortTypes.Slider){
  				if (isNaN(parseInt(value))){
  					alert("Slider values can only be numbers");
  				  return;
          }
  			}

  			this.input.setDefaultValue(value);

  		}
  		else{
  			this.input.setDefaultValue(undefined);
  		}
  	}

  	updateSliderOpts($event, prop: string): void{
  		let value: string = $event.srcElement.value;
  		if(value.trim().length > 0){

  			if(isNaN(parseInt(value))){
  				alert("Slider values can only be numbers");
  				return;
  			}
  			else{
  				this.opts[prop] = value;
  			}
  		}
  		else{
  			this.opts[prop] = 0;
  		}
  		
  		this.input.setOpts(this.opts);
  	}

  	default(input: InputPort){
  		return input.getDefaultValue();
  	}

    onNoClick(): void {
      this.dialogRef.close();
    }

}