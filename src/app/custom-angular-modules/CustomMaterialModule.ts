import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule, MatExpansionModule, 
	MatButtonModule, MatCheckboxModule, MatTooltipModule, 
	MatDialogModule, MatToolbarModule, MatIconModule, 
	MatButtonToggleModule, MatTabsModule, MatInputModule, MatListModule} from '@angular/material';


/*
 * This module imports all thre required components from Angular Material
 */

@NgModule({
  imports: [BrowserAnimationsModule, MatExpansionModule, 
  			MatMenuModule, MatButtonModule, MatCheckboxModule, 
  			MatTooltipModule, MatDialogModule, MatToolbarModule, MatIconModule, 
  			MatButtonToggleModule, MatTabsModule, MatInputModule, MatListModule],
  exports: [BrowserAnimationsModule, MatExpansionModule,  
  			MatMenuModule, MatButtonModule, MatCheckboxModule, 
  			MatTooltipModule, MatDialogModule, MatToolbarModule, MatIconModule,
  			MatButtonToggleModule, MatTabsModule, MatInputModule, MatListModule]
})
export class CustomMaterialModule { }