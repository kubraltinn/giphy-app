import {Injectable} from '@angular/core';

@Injectable()
export class AppGiphyStateService {
  private trendingGifs = [];
  private searchedGifs = [];
  private loading: boolean = false;
  private term = '';

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

  getSearchTerm(): string {
    return this.term;
  }

  setSearchTerm(term: string): void {
    this.term = term;
  }

  isLoading(): boolean {
    return this.loading;
  }

  setLoading(loading: boolean): void {
    this.loading = loading;
  }
}
