export class BrowserMoviePickRepo implements AppTypes.MoviePickRepo {
  async getByFirstLetter(firstLetter: string) {
    return window.localStorage.getItem(firstLetter.toUpperCase());
  }

  async getAll() {
    const movies: string[] = [];
    for (const key in window.localStorage) {
      if (
        /^[A-Z]{1}$/gm.test(key) &&
        typeof window.localStorage[key] === "string"
      ) {
        movies.push(window.localStorage[key]);
      }
    }
    return movies;
  }

  async put(title: string) {
    if (title.length) {
      window.localStorage.setItem([...title][0].toUpperCase(), title);
    }
  }
}
