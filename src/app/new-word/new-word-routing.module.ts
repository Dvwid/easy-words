import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewWordComponent } from './new-word.component';

const routes: Routes = [{ path: '', component: NewWordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewWordRoutingModule { }
