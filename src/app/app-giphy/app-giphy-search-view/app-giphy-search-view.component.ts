import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppGiphyDataService} from '../app-giphy-data.service';
import * as _ from 'lodash';
import {AppGiphyStateService} from '../app-giphy-state.service';
import {ActivatedRoute} from '@angular/router';
import {of, Subject} from 'rxjs';
import {catchError, takeUntil} from 'rxjs/operators';

const searchlimit = 20;

@Component({
  selector: 'app-giphy-search-view',
  templateUrl: './app-giphy-search-view.component.html',
  styleUrls: ['./app-giphy-search-view.component.scss',
    '../app-giphy-shared.scss']
})

export class AppGiphySearchViewComponent implements OnInit, OnDestroy {
  private searchOffSet: number = 0;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private appGiphyDataService: AppGiphyDataService,
              private appGiphyStateService: AppGiphyStateService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.doSearch(params.get('term'));
    });
  }

  doSearch(searchTerm?: string): void {
    this.appGiphyStateService.setLoading(true);

    if (searchTerm) {
      this.appGiphyStateService.setSearchTerm(searchTerm);
      this.appGiphyStateService.setSearchedGifs([]);
    }

    this.appGiphyDataService.doSearch(this.appGiphyStateService.getSearchTerm(), this.searchOffSet)
      .pipe(
        catchError(() => {
          this.appGiphyStateService.setLoading(false);
          return of();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe(data => {
        const newSearchedGifs = _.concat(this.appGiphyStateService.getSearchedGifs(), data['data']);
        this.appGiphyStateService.setSearchedGifs(newSearchedGifs);

        this.searchOffSet += searchlimit;
        this.appGiphyStateService.setLoading(false);
      });
  }

  loadMoreSearchResult(): void {
    return this.doSearch();
  }

  getGifImageUrl(gifIndex: number) {
    return this.appGiphyStateService.getSearchedGifs()[gifIndex].images.original.url;
  }

  getGifs() {
    return this.appGiphyStateService.getSearchedGifs();
  }

  getSearchedTerm(): string {
    return this.appGiphyStateService.getSearchTerm();
  }

  hasResult(): boolean {
    return !_.isEmpty(this.appGiphyStateService.getSearchedGifs());
  }

  isLoading(): boolean {
    return this.appGiphyStateService.isLoading();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
