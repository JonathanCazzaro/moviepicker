export namespace App {

  export interface MovieSearchResult {
    id: string;
    title: string;
    year: string;
    poster: string;
  }

  export type Movie = MovieSearchResult & {
    plot: string;
    actors: string;
  }
}
