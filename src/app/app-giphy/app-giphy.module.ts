import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppGiphyDataService} from './app-giphy-data.service';
import {AppGiphyComponent} from './app-giphy.component';
import {HttpClientModule} from '@angular/common/http';
import {AppGiphySearchViewComponent} from './app-giphy-search-view/app-giphy-search-view.component';
import {AppGiphyStateService} from './app-giphy-state.service';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {AppGiphySearchInputComponent} from './app-giphy-search-input/app-giphy-search-input.component';

@NgModule({
  declarations: [
    AppGiphyComponent,
    AppGiphySearchViewComponent,
    AppGiphySearchInputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule,
  ],
  exports: [
    AppGiphyComponent,
    AppGiphySearchViewComponent,
    AppGiphySearchInputComponent
  ],
  providers: [
    AppGiphyDataService,
    AppGiphyStateService
  ],
  bootstrap: [AppGiphyComponent]
})
export class AppGiphyModule {
}
