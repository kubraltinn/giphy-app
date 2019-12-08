import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppGiphyDataService} from './app-giphy-data.service';
import {Router} from '@angular/router';
import {AppGiphyStateService} from './app-giphy-state.service';
import * as _ from 'lodash';
import {catchError, takeUntil} from 'rxjs/operators';
import {of, Subject} from 'rxjs';

const gifslimit = 20;

@Component({
  selector: 'app-giphy',
  templateUrl: './app-giphy.component.html',
  styleUrls: ['./app-giphy.component.scss',
    './app-giphy-shared.scss']
})
export class AppGiphyComponent implements OnInit, OnDestroy {
  trendingGifsOffset: number = 0;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private appGiphyDataService: AppGiphyDataService,
              private appGiphyStateService: AppGiphyStateService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.fetchTrendingGifs();
  }

  fetchTrendingGifs() {
    this.appGiphyStateService.setLoading(true);

    this.appGiphyDataService.fetchTrendingGifs(this.trendingGifsOffset)
      .pipe(
        catchError(() => {
          this.appGiphyStateService.setLoading(false);
          return of();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe(data => {
        const newTrendingGifs = _.concat(this.appGiphyStateService.getTrendingGifs(), data['data']);
        this.appGiphyStateService.setTrendingGifs(newTrendingGifs);
        this.trendingGifsOffset += gifslimit;
        this.appGiphyStateService.setLoading(false);
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

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
