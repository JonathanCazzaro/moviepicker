import { Grid } from "@mui/material";
import React from "react";
import MoviesListItem from "../MoviesListItem/MoviesListItem";

const MoviesList: React.FC<{ movies: AppTypes.MovieSearchResult[] }> = ({
  movies,
}) => {
  return (
    <Grid container spacing={2} sx={{ marginTop: "2rem" }}>
      {movies.map((movie) => (
        <MoviesListItem key={movie.imdbID} {...movie} />
      ))}
    </Grid>
  );
};

export default MoviesList;
