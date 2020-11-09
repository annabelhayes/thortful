export interface DadJoke {
  id: number;
  joke: string;
}

export interface Jokes {
  results: [DadJoke];
}
