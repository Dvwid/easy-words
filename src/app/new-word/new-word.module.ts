import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NewWordRoutingModule} from './new-word-routing.module';
import {NewWordComponent} from './new-word.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import {FormsModule} from "@angular/forms";


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
    FormsModule
  ]
})
export class NewWordModule {
}
