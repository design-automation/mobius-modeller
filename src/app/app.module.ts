import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { FlowchartService } from './data/flowchart.service';
import { ModuleService } from './data/module.service';

import { FlowchartViewerComponent } from './flowchart-viewer/flowchart-viewer.component';
import { CodeViewerComponent } from './code-viewer/code-viewer.component';
import { GeometryViewerComponent } from './geometry-viewer/geometry-viewer.component';
import { FlowchartControlsComponent } from './flowchart-controls/flowchart-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FlowchartViewerComponent,
    CodeViewerComponent,
    GeometryViewerComponent,
    FlowchartControlsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [FlowchartService, ModuleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
