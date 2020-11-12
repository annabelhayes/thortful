import { Component, OnInit } from '@angular/core';
import { faFrownOpen, faGrinTears, faGrinWink, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { DadJoke } from '../dadjoke';
import { DadJokeService } from '../dadjoke.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  faPaperPlane = faPaperPlane;
  faGrin = faGrinTears;
  searchInputText: string;
  noResults = false;
  jokes: DadJoke[];
  constructor(private dadJokeService: DadJokeService, public router: Router) { }

  ngOnInit() {
    this.dadJokeService.searchJokes().subscribe(jokes => (this.jokes = jokes));
  }

  navigateToJoke(id: string) {
    this.router.navigate([`home/${id}`]);
  }

  emitSearch(term: string) {
    this.dadJokeService.searchJokes(term).subscribe(jokes => {
      this.jokes = jokes;
      if (!jokes || jokes.length === 0) {
        this.noResults = true;
      }
      else {
        this.noResults = false;
      }
    });
  }
}
