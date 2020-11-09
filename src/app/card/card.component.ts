import { Component, OnInit } from '@angular/core';
import { faLaughSquint, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  showEllipses = false;
  showButtons = false;
  faLaughSquint = faLaughSquint;
  faSyncAlt = faSyncAlt;

  constructor() { }


  ngOnInit() {
    // if no ROUTE PARAMS set do the following
    this.setEllipsesTimeout();
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
