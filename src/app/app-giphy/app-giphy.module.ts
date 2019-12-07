import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppGiphyDataService} from './app-giphy-data.service';
import {AppGiphyComponent} from './app-giphy.component';
import {HttpClientModule} from '@angular/common/http';
import {AppGiphySearchComponent} from './app-giphy-search/app-giphy-search.component';
import {AppGiphyStateService} from './app-giphy-state.service';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppGiphyComponent,
    AppGiphySearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule,
  ],
  exports: [
    AppGiphyComponent,
    AppGiphySearchComponent
  ],
  providers: [
    AppGiphyDataService,
    AppGiphyStateService
  ],
  bootstrap: [AppGiphyComponent]
})
export class AppGiphyModule {
}
