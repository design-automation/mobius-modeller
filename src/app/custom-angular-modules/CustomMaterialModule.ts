import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule, MatExpansionModule, 
	MatButtonModule, MatCheckboxModule, MatTooltipModule, 
	MatDialogModule, MatToolbarModule, MatIconModule, 
	MatButtonToggleModule, MatTabsModule, MatInputModule} from '@angular/material';


/*
 * This module imports all thre required components from Angular Material
 */

@NgModule({
  imports: [BrowserAnimationsModule, MatExpansionModule, 
  			MatMenuModule, MatButtonModule, MatCheckboxModule, 
  			MatTooltipModule, MatDialogModule, MatToolbarModule, MatIconModule, 
  			MatButtonToggleModule, MatTabsModule, MatInputModule],
  exports: [BrowserAnimationsModule, MatExpansionModule,  
  			MatMenuModule, MatButtonModule, MatCheckboxModule, 
  			MatTooltipModule, MatDialogModule, MatToolbarModule, MatIconModule,
  			MatButtonToggleModule, MatTabsModule, MatInputModule]
})
export class CustomMaterialModule { }