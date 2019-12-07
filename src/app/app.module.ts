import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppGiphyModule} from './app-giphy/app-giphy.module';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppGiphyModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
