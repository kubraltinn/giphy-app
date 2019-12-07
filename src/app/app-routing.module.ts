import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppGiphySearchComponent} from './app-giphy/app-giphy-search/app-giphy-search.component';
import {AppGiphyComponent} from './app-giphy/app-giphy.component';

const routes: Routes = [
  {path: '', redirectTo: '/giphy', pathMatch: 'full'},
  {path: 'giphy', component: AppGiphyComponent},
  {path: 'search', component: AppGiphySearchComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule {

}
