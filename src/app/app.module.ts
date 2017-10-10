import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { FlowchartService } from './data/flowchart.service';
import { FlowchartViewerComponent } from './flowchart-viewer/flowchart-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FlowchartViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [FlowchartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
