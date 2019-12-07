import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const apiKey = 'mPwReIdb978XRg2SWHpkX4HvbtEgv09n';
const apiLink = 'api.giphy.com/v1/gifs';
const apiSearch = '/search';
const apiTrending = '/trending';

@Injectable()
export class AppGiphyDataService {
  constructor(public http: HttpClient) {
  }

  fetchTrendingGifs(gifsOffset: number) {
    return this.http.get(`https://${apiLink}${apiTrending}?api_key=${apiKey}&limit=20&offset=${gifsOffset}`);
  }

  doSearch(searchTerm: string, searchOffset: number) {
    return this.http.get(`https://${apiLink}${apiSearch}?api_key=${apiKey}&q=${searchTerm}&limit=20&offset=${searchOffset}`);
  }
}
