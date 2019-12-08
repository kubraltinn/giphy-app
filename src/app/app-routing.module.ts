import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppGiphySearchViewComponent} from './app-giphy/app-giphy-search-view/app-giphy-search-view.component';
import {AppGiphyComponent} from './app-giphy/app-giphy.component';

const routes: Routes = [
  {path: '', redirectTo: '/giphy', pathMatch: 'full'},
  {path: 'giphy', component: AppGiphyComponent},
  {path: 'search', component: AppGiphySearchViewComponent}
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
