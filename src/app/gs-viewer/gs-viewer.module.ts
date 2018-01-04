import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularSplitModule } from 'angular-split';
import { MatSliderModule } from '@angular/material/slider';

import { GSViewerComponent } from './gs-viewer.component';
import { ViewerComponent } from './viewer/viewer.component';
import { SettingComponent } from './setting/setting.component';
import { ToolwindowComponent } from './toolwindow/toolwindow.component';
import { DataService } from './data/data.service';
import { GroupsComponent } from './toolwindow/groups.component';


@NgModule({
    imports: [ 	CommonModule,
    			AngularSplitModule,
			   	MatSliderModule
			 ],
    exports: [ GSViewerComponent ],
    declarations: [GSViewerComponent,
    			ViewerComponent,
			    SettingComponent,
			    ToolwindowComponent,
			    GroupsComponent],
    providers: [DataService],
})
export class GSViewer {
 	
 	static forRoot(): ModuleWithProviders {
        return {
            ngModule: GSViewer,
            providers: [
                DataService
            ]
        };
    }

}