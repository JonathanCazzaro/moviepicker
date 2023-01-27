import { BrowserMoviePickRepo } from "./classes/BrowserMoviePickRepo";
import { MoviePicker } from "./classes/MoviePicker";

const movieRepo = new BrowserMoviePickRepo();

const moviePicker = new MoviePicker(movieRepo);

export { moviePicker, movieRepo };
