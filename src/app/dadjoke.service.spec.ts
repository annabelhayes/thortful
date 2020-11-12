import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DadJokeService } from './dadjoke.service';
import { DadJoke } from './dadjoke';

export const mockDadJoke: DadJoke = {
  id: '123abc',
  joke: 'hi Angular, Im Dad'
};

describe('DadJokeService', () => {
  let httpTestingController: HttpTestingController;
  let service: DadJokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DadJokeService],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DadJokeService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getJoke should should provide data', () => {
    service.getJoke().subscribe((dadJoke: DadJoke) => {
      expect(dadJoke).not.toBe(null);
      expect(JSON.stringify(dadJoke)).toEqual(JSON.stringify(mockDadJoke));
    });
    const req = httpTestingController.expectOne(`https://icanhazdadjoke.com/`);
    req.flush(mockDadJoke);
  });


  it('getJokeById should should provide data', () => {
    service.getJokeById(mockDadJoke.id).subscribe((dadJoke: DadJoke) => {
      expect(dadJoke).not.toBe(null);
      expect(JSON.stringify(dadJoke)).toEqual(JSON.stringify(mockDadJoke));
    });
    const req = httpTestingController.expectOne(`https://icanhazdadjoke.com/j/${mockDadJoke.id}`);
    req.flush(mockDadJoke);
  });
});
