import { MemoryMoviePickRepo } from "./classes/MemoryMoviePickRepo";
import { MoviePicker } from "./classes/MoviePicker";

const repo = new MemoryMoviePickRepo();

const moviePicker = new MoviePicker(repo);

export default moviePicker;
