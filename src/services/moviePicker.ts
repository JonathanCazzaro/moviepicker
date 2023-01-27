import { MemoryMoviePickRepo } from "./classes/MemoryMoviePickRepo";
import { MoviePicker } from "./classes/MoviePicker";

const movieRepo = new MemoryMoviePickRepo();

const moviePicker = new MoviePicker(movieRepo);

export { moviePicker, movieRepo };
