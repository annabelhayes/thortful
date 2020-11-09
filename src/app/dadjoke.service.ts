import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
}
