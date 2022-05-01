import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoDataInfoComponent } from './no-data-info.component';



@NgModule({
    declarations: [
        NoDataInfoComponent
    ],
    exports: [
        NoDataInfoComponent
    ],
    imports: [
        CommonModule
    ]
})
export class NoDataInfoModule { }
