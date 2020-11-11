import { Component, OnInit } from '@angular/core';
import { DadJokeService } from '../dadjoke.service';
import { DadJoke } from '../dadjoke';
import { faLaughSquint, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  showEllipses = false;
  showButtons = false;
  params: boolean;
  dadJoke: DadJoke;
  faLaughSquint = faLaughSquint;
  faSyncAlt = faSyncAlt;

  constructor(
    private dadJokeService: DadJokeService,
    public router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // if no route params set, run through intro animation
    this.route.params.subscribe(params => {
      if (params && !params.id) {
        this.params = false;
        this.setEllipsesTimeout();
      }
      // otherwise fetch joke with respective id
      else {
        this.params = true;
        this.showButtons = true;
        this.getJokeById(params);
      }
    });
  }

  getJokeById(params): void {
    const id = params && params.id;
    this.dadJokeService.getJokeById(id)
      .subscribe(joke => (
        this.dadJoke = joke
      ));
  }

  getJoke(): void {
    this.dadJokeService.getJoke()
      .subscribe(joke => {
        this.dadJoke = joke;
        // update params with joke id
        this.router.navigate([`home/${joke.id}`]);
      });
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  setEllipsesTimeout(): void {
    setTimeout(() => {
      this.showEllipses = true;
      this.setDadJokesBtnsTimeOut();
    }, 2000);
  }

  setDadJokesBtnsTimeOut(): void {
    setTimeout(() => {
      this.showButtons = true;
    }, 5000);
  }
}
