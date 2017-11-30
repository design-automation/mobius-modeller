import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { CustomMaterialModule } from './custom-angular-modules/CustomMaterialModule';
import { AngularSplitModule } from 'angular-split';
import { AceEditorModule } from 'ng2-ace-editor';
import { TreeModule } from 'angular-tree-component';

/*import {ResizeEvent} from 'angular-resizable-element';
import { ClickStopPropogationDirective } from './click-stop-propogation.directive';*/

import { FlowchartService } from './global-services/flowchart.service';
import { ModuleService } from './global-services/module.service';

import { FlowchartControlsComponent } from './ui-components/controls/flowchart-controls/flowchart-controls.component';
import { MenuComponent } from './ui-components/controls/main-menu/menu.component';

import { ProcedureEditorComponent } from './ui-components/editors/procedure-editor/procedure-editor.component';
import { ParameterEditorComponent } from './ui-components/editors/parameter-editor/parameter-editor.component';
import { FlowchartViewerComponent } from './ui-components/editors/flowchart-viewer/flowchart-viewer.component';

import { CodeViewerComponent } from './ui-components/viewers/code-viewer/code-viewer.component';
import { GeometryViewerComponent } from './ui-components/viewers/geometry-viewer/geometry-viewer.component';
import { ModuleViewerComponent } from './ui-components/viewers/module-viewer/module-viewer.component';
import { ParameterViewerComponent } from './ui-components/viewers/parameter-viewer/parameter-viewer.component';
import { ModuleboxComponent } from './ui-components/controls/modulebox/modulebox.component';

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
    ModuleboxComponent,
  ],
  entryComponents: [
    ModuleboxComponent
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
