import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomMaterialModule } from './custom_modules/CustomMaterialModule';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { FlowchartService } from './data/flowchart.service';
import { ModuleService } from './data/module.service';

import { AngularSplitModule } from 'angular-split';

import { FlowchartViewerComponent } from './flowchart-viewer/flowchart-viewer.component';
import { CodeViewerComponent } from './code-viewer/code-viewer.component';
import { GeometryViewerComponent } from './geometry-viewer/geometry-viewer.component';
import { FlowchartControlsComponent } from './flowchart-controls/flowchart-controls.component';

import { AceEditorModule } from 'ng2-ace-editor';
import { ModuleViewerComponent } from './module-viewer/module-viewer.component';


import { ProcedureEditorComponent } from './procedure-editor/procedure-editor.component';
import { TreeModule } from 'angular-tree-component';
import { ParameterViewerComponent } from './parameter-viewer/parameter-viewer.component';
import { ParameterEditorComponent } from './parameter-editor/parameter-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FlowchartViewerComponent,
    CodeViewerComponent,
    GeometryViewerComponent,
    FlowchartControlsComponent,
    ModuleViewerComponent,
    ProcedureEditorComponent,
    ParameterViewerComponent,
    ParameterEditorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule,
    AceEditorModule,
    AngularSplitModule, 
    TreeModule,
    CustomMaterialModule
  ],
  providers: [FlowchartService, ModuleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
