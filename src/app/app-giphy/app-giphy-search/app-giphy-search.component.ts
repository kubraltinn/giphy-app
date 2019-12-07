import {Component, OnInit} from '@angular/core';
import {AppGiphyDataService} from '../app-giphy-data.service';
import * as _ from 'lodash';
import {AppGiphyStateService} from '../app-giphy-state.service';
import {ActivatedRoute} from '@angular/router';

const searchlimit = 20;

@Component({
  selector: 'app-giphy-search',
  templateUrl: './app-giphy-search.component.html',
  styleUrls: ['./app-giphy-search.component.scss',
    '../../../../node_modules/font-awesome/css/font-awesome.css']
})

export class AppGiphySearchComponent implements OnInit {
  private searchOffSet: number = 0;
  term = "";

  constructor(private appGiphyDataService: AppGiphyDataService,
              private appGiphyStateService: AppGiphyStateService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.doSearch(params.get('term'));
    });
  }

  doSearch(searchTerm: string): void {
    this.term = searchTerm;
    this.appGiphyDataService.doSearch(searchTerm, this.searchOffSet).subscribe(data => {
      const newSearchedGifs = _.concat(this.appGiphyStateService.getSearchedGifs(), data['data']);
      this.appGiphyStateService.setSearchedGifs(newSearchedGifs);

      this.searchOffSet += searchlimit;
    });
  }

  loadMoreSearchResult(searchTerm: HTMLInputElement): void {
    return this.doSearch(searchTerm.value);
  }

  getGifImageUrl(gifIndex: number) {
    return this.appGiphyStateService.getSearchedGifs()[gifIndex].images.original.url;
  }

  getGifs() {
    return this.appGiphyStateService.getSearchedGifs();
  }

  getGifHeight(gifIndex: number) {
    return this.appGiphyStateService.getSearchedGifs()[gifIndex].images.original.height;
  }

  getGifWidth(gifIndex: number) {
    return this.appGiphyStateService.getSearchedGifs()[gifIndex].images.original.width;
  }
}
