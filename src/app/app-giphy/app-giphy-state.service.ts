import {Injectable} from '@angular/core';

@Injectable()
export class AppGiphyStateService {
  private trendingGifs = [];
  private searchedGifs = [];

  constructor() {
  }

  getSearchedGifs() {
    return this.searchedGifs;
  }

  setSearchedGifs(gifs): void {
    this.searchedGifs = gifs;
  }

  getTrendingGifs() {
    return this.trendingGifs;
  }

  setTrendingGifs(gifs): void {
    this.trendingGifs = gifs;
  }
}
