import { Component, OnInit } from '@angular/core';
import { DadJokeService } from '../dadjoke.service';
import { DadJoke } from '../dadjoke';
import { faLaughSquint, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
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

  constructor(private dadJokeService: DadJokeService) { }

  ngOnInit() {
    // if no ROUTE PARAMS set do the following
    this.setEllipsesTimeout();
  }

  getJoke(): void {
    this.dadJokeService.getJoke()
      .subscribe(joke => (this.dadJoke = joke
      ));
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
