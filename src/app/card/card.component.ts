import { Component, OnInit } from '@angular/core';
import { DadJokeService } from '../dadjoke.service';
import { DadJoke } from '../dadjoke';
import { faLaughSquint, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  showEllipses = false;
  showButtons = false;
  dadJoke: DadJoke;
  faLaughSquint = faLaughSquint;
  faSyncAlt = faSyncAlt;

  constructor(private dadJokeService: DadJokeService, public router: Router) { }

  ngOnInit() {
    // if no ROUTE PARAMS set do the following
    this.setEllipsesTimeout();
  }

  getJoke(): void {
    this.dadJokeService.getJoke()
      .subscribe(joke => (this.dadJoke = joke
      ));
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  setEllipsesTimeout() {
    setTimeout(() => {
      this.showEllipses = true;
      this.setDadJokesBtnsTimeOut();
    }, 2000);
  }

  setDadJokesBtnsTimeOut() {
    setTimeout(() => {
      this.showButtons = true;
    }, 5000);
  }
}
