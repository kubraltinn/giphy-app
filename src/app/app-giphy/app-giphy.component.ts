import {Component, OnInit} from '@angular/core';
import {AppGiphyDataService} from './app-giphy-data.service';
import {Router} from '@angular/router';
import {AppGiphyStateService} from './app-giphy-state.service';
import * as _ from 'lodash';

const gifslimit = 20;

@Component({
  selector: 'app-giphy',
  templateUrl: './app-giphy.component.html',
  styleUrls: ['./app-giphy.component.scss',
    './app-giphy-shared.scss', ]
})
export class AppGiphyComponent implements OnInit {
  trendingGifsOffset: number = 0;

  constructor(private appGiphyDataService: AppGiphyDataService,
              private appGiphyStateService: AppGiphyStateService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.fetchTrendingGifs();
  }

  fetchTrendingGifs() {
    this.appGiphyDataService.fetchTrendingGifs(this.trendingGifsOffset).subscribe(data => {
      const newTrendingGifs = _.concat(this.appGiphyStateService.getTrendingGifs(), data['data']);
      this.appGiphyStateService.setTrendingGifs(newTrendingGifs);
      this.trendingGifsOffset += gifslimit;
    });
  }

  onScroll() {
    this.fetchTrendingGifs();
  }

  navigateSearch(searchTerm: HTMLInputElement) {
    this.router.navigate(['/search'], {queryParams: {term: searchTerm.value}});
  }

  getTrendingGifs() {
    return this.appGiphyStateService.getTrendingGifs();
  }

  getGifImageUrl(gifIndex: number) {
    return this.appGiphyStateService.getTrendingGifs()[gifIndex].images.original.url;
  }
}
