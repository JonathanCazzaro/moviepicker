import { Typography } from "@mui/material";
import { object, string } from "yup";
import { OmdbApi } from "./services/Api";

const api = new OmdbApi({
  baseUrl: "http://www.omdbapi.com",
  apiKey: "23aaa32",
  movieCardValidationSchema: object({
    imdbID: string().required(),
    Title: string().required(),
    Year: string().required(),
    Poster: string().required(),
    Actors: string().required(),
    Plot: string().required(),
  }),
  movieListItemValidationSchema: object({
    imdbID: string().required(),
    Title: string().required(),
    Year: string().required(),
    Poster: string().required(),
  }).required(),
});

function App() {
  console.log(api.getMovieById("tt0112462").then((data) => console.log(data)));

  return <Typography variant="h1">Hello World !</Typography>;
}

export default App;
