import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FlashcardsRoutingModule} from './flashcards-routing.module';
import {FlashcardsComponent} from './flashcards.component';
import {MatIconModule} from "@angular/material/icon";
import {SpinnerModule} from "../shared/spinner/spinner.module";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ToastModule} from "../core/toast/toast.module";


@NgModule({
  declarations: [
    FlashcardsComponent
  ],
  imports: [
    CommonModule,
    FlashcardsRoutingModule,
    MatIconModule,
    SpinnerModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ToastModule
  ]
})
export class FlashcardsModule {
}
