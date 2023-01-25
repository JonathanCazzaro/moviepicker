import { Services } from "../types/services";
import { MoviePicker } from "../services/MoviePicker";
import { MemoryMoviePickRepo } from "../services/MemoryMoviePickRepo";

import { EmptyMovieTitleError } from "../errors/EmptyMovieTitleError";
import { MoviePickAlreadyExistError } from "../errors/MoviePickAlreadyExistError";

//------------------------------------------------------------------------------
describe("MoviePicker", () => {
  let moviePicker: Services.MoviePicker;
  let moviePickRepo: Services.MoviePickRepo;

  beforeEach(async () => {
    moviePickRepo = new MemoryMoviePickRepo();
    moviePicker = new MoviePicker(moviePickRepo);
  });
  //----------------------------------------------------------------------------
  it(
    "should add given movie title to picks " +
      "on MoviePicker.pick " +
      "when given movie title is not empty " +
      "and no title already picked for first letter of given movie title",
    async () => {
      const title = "Bohemian Rhapsody";
      await moviePicker.pick(title);

      const result = await moviePickRepo.getByFirstLetter("B");
      const allPicks = await moviePickRepo.getAll();

      expect(result).toBe(title);
      expect(allPicks).toHaveLength(1);
    }
  );
  //----------------------------------------------------------------------------
  it(
    "should throw MoviePickAlreadyExistError " +
      "on MoviePicker.pick " +
      "when given movie title is not empty " +
      "and some title already picked for first letter of given movie title",
    async () => {
      const title = "Bohemian Rhapsody";
      await moviePicker.pick(title);

      await expect(async () => {
        await moviePicker.pick(title);
      }).rejects.toThrow(MoviePickAlreadyExistError);

      await expect(async () => {
        await moviePicker.pick("Barton Fink");
      }).rejects.toThrow(MoviePickAlreadyExistError);

      await expect(async () => {
        await moviePicker.pick("batman");
      }).rejects.toThrow(MoviePickAlreadyExistError);
    }
  );
  //----------------------------------------------------------------------------
  it(
    "should throw EmptyMovieTitleError " +
      "on MoviePicker.pick " +
      "when given movie title is empty",
    async () => {
      await expect(async () => {
        await moviePicker.pick("");
      }).rejects.toThrow(EmptyMovieTitleError);
    }
  );
});
