import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DadJoke, Jokes } from './dadjoke';

const httpOptions = {
  headers: new HttpHeaders({ Accept: 'application/json' })
};
@Injectable()
export class DadJokeService {
  url = 'https://icanhazdadjoke.com/';

  constructor(private http: HttpClient) { }

  getJoke(): Observable<any> {
    return this.http.get<DadJoke>(this.url, httpOptions).pipe(
      map(res => {
        return res;
      }));
  }

  getJokeById(id): Observable<DadJoke> {
    return this.http.get<DadJoke>(this.url + `j/${id}`, httpOptions).pipe(
      map(res => {
        return res;
      }));
  }

  searchJokes(term?: string): Observable<DadJoke[]> {
    const path = term ? `/search?term=${term}` : `/search`;
    return this.http.get<Jokes>(this.url + path, httpOptions).pipe(
      map(response => {
        const jokes = response.results;
        return jokes;
      }));
  }
}
