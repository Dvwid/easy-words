import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NewWordRoutingModule} from './new-word-routing.module';
import {NewWordComponent} from './new-word.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import {FormsModule} from "@angular/forms";
import {SpinnerModule} from "../shared/spinner/spinner.module";
import {NoDataInfoModule} from "../shared/no-data-info/no-data-info.module";


@NgModule({
  declarations: [
    NewWordComponent
  ],
  imports: [
    CommonModule,
    NewWordRoutingModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    FormsModule,
    SpinnerModule,
    NoDataInfoModule
  ]
})
export class NewWordModule {
}
