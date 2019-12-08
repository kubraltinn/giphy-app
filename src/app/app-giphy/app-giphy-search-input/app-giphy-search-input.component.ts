import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-giphy-search-input',
  templateUrl: './app-giphy-search-input.component.html',
  styleUrls: ['./app-giphy-search-input.component.scss',
    '../../../../node_modules/font-awesome/css/font-awesome.css']
})

export class  AppGiphySearchInputComponent {
  @Output() onSearch = new EventEmitter();

  term = "";

  constructor() {}

  onSearchClick(searchTerm: string): void {
    this.onSearch.emit(searchTerm);
  }
}
