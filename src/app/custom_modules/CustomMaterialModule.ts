import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule, MatExpansionModule, MatButtonModule, MatCheckboxModule} from '@angular/material';


/*
 * This module imports all thre required components from Angular Material
 */

@NgModule({
  imports: [BrowserAnimationsModule, MatExpansionModule, MatMenuModule, MatButtonModule, MatCheckboxModule],
  exports: [BrowserAnimationsModule, MatExpansionModule,  MatMenuModule, MatButtonModule, MatCheckboxModule]
})
export class CustomMaterialModule { }