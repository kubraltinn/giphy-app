import {Component, EventEmitter, Output} from '@angular/core';
import {AppGiphyStateService} from '../app-giphy-state.service';

@Component({
  selector: 'app-giphy-search-input',
  templateUrl: './app-giphy-search-input.component.html',
  styleUrls: ['./app-giphy-search-input.component.scss',
    '../../../../node_modules/font-awesome/css/font-awesome.css']
})

export class  AppGiphySearchInputComponent {
  @Output() onSearch = new EventEmitter();

  constructor(private appGiphyStateService: AppGiphyStateService) {}

  onSearchClick(searchTerm: string): void {
    console.log("clicked");
    this.appGiphyStateService.setSearchTerm(searchTerm);
    this.onSearch.emit(searchTerm);
  }

  getSearchTerm(): string {
    return this.appGiphyStateService.getSearchTerm();
  }
}
