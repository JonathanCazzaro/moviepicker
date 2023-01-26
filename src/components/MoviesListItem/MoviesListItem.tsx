import {
  Button,
  Card,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { string } from "yup";
import { useTypedDispatch } from "../../hooks/reduxHooks";
import omdbApi from "../../services/omdbApi";
import { setCurrentMovie } from "../../store/slices/dataSlice";
import { AppTypes } from "../../types/app";

const MoviesListItem: React.FC<AppTypes.MovieSearchResult> = ({
  Poster,
  Title,
  imdbID,
}) => {
  const dispatch = useTypedDispatch();

  const handleClickMovie = async () => {
    const data = await omdbApi.getMovieById(imdbID);
    if (data) dispatch(setCurrentMovie(data));
  };

  return (
    <Grid xs={6} sm={4} lg={2} item>
      <Paper
        elevation={3}
        sx={{
          height: "100%",
          display: "flex",
          padding: ".25rem",
          backgroundColor: "secondary.main",
          filter: "saturate(0.5) opacity(0.85)",
          ":hover": { filter: "saturate(1) opacity(1)" },
        }}
      >
        <Button
          sx={{ maxHeight: "21rem", overflow: "hidden", width: "100%" }}
          onClick={handleClickMovie}
          title={Title}
        >
          {string().url().isValidSync(Poster) ? (
            <CardMedia
              component={"img"}
              image={Poster}
              alt={`Affiche du film ${Title}`}
              width="100%"
            />
          ) : (
            <Typography>{Title}</Typography>
          )}
        </Button>
      </Paper>
    </Grid>
  );
};

export default MoviesListItem;
