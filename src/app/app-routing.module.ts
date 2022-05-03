import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: 'new-word', loadChildren: () => import('./new-word/new-word.module').then(m => m.NewWordModule) },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'flashcards', loadChildren: () => import('./flashcards/flashcards.module').then(m => m.FlashcardsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
