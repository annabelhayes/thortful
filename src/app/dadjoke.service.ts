import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Jokes } from './dadjoke';

const httpOptions = {
  headers: new HttpHeaders({ Accept: 'application/json' })
};

@Injectable()
export class DadJokeService {
  url = 'https://icanhazdadjoke.com/';

  constructor(private http: HttpClient) { }

  getJoke(): Observable<any> {
    return this.http.get(this.url, httpOptions).pipe(
      map(res => {
        return res;
      }));
  }

  searchJokes(term: string) {
    return this.http.get<Jokes>(this.url + `/search?term=${term}`, httpOptions).pipe(
      map(response => {
        const jokes = response.results;
        return jokes;
      }));
  }
}
