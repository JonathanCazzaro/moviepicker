import {
  Box,
  Button,
  CardMedia,
  Chip,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { string } from "yup";
import { useTypedDispatch } from "../../hooks/reduxHooks";
import { useErrorHandler } from "../../hooks/useErrorHandler";
import omdbApi from "../../services/omdbApi";
import { setCurrentMovie } from "../../store/slices/dataSlice";
import { setLoading } from "../../store/slices/interfaceSlice";

const MoviesListItem: React.FC<AppTypes.MovieSearchResult> = ({
  Poster,
  Title,
  imdbID,
  Year,
}) => {
  const dispatch = useTypedDispatch();
  const handleError = useErrorHandler();

  const handleClickMovie = async () => {
    try {
      dispatch(setLoading(true));
      const data = await omdbApi.getMovieById(imdbID);
      dispatch(setCurrentMovie(data));
    } catch (error) {
      handleError(error);
    } finally {
      dispatch(setLoading(false));
    }
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
          sx={{
            position: "relative",
            maxHeight: "21rem",
            overflow: "hidden",
            width: "100%",
            textTransform: "unset !important",
            fontWeight: "bold",
            borderRadius: "2rem",
          }}
          onClick={handleClickMovie}
          title={Title.toString()}
        >
          {string().url().isValidSync(Poster) && (
            <CardMedia
              component={"img"}
              image={Poster}
              alt={`Affiche du film ${Title}`}
              width="100%"
            />
          )}
          <Box
            sx={{
              position: "absolute",
              minHeight: "6rem",
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "rgba(238, 240, 242, 0.9)",
              padding: ".5rem 1rem",
              color: "text.primary",
            }}
          >
            <Typography gutterBottom>{Title}</Typography>
            <Chip label={Year} />
          </Box>
        </Button>
      </Paper>
    </Grid>
  );
};

export default MoviesListItem;
