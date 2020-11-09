import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { DadJoke } from '../dadjoke';
import { DadJokeService } from '../dadjoke.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  faArrowRight = faArrowRight;
  searchInputText: string;
  jokes: DadJoke[];
  constructor(private dadJokeService: DadJokeService) { }

  ngOnInit(): void {
  }

  emitSearch(term) {
    this.dadJokeService.searchJokes(term).subscribe(jokes => (this.jokes = jokes));
  }
}
