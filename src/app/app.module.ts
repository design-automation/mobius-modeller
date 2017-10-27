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

import { AceEditorModule } from 'ng2-ace-editor';
import { ModuleViewerComponent } from './module-viewer/module-viewer.component';

import { AngularSplitModule } from 'angular-split';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FlowchartViewerComponent,
    CodeViewerComponent,
    GeometryViewerComponent,
    FlowchartControlsComponent,
    ModuleViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule,
    AceEditorModule,
    AngularSplitModule
  ],
  providers: [FlowchartService, ModuleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
