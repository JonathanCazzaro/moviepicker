import {
  Box,
  Button,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTypedDispatch, useTypedSelector } from "../../hooks/reduxHooks";
import { clearCurrentMovie } from "../../store/slices/dataSlice";
import CloseIcon from "@mui/icons-material/Close";
import moviePicker from "../../services/moviePicker";
import { useErrorHandler } from "../../hooks/useErrorHandler";
import {
  setMovieDialogOpen,
  setSuccess,
} from "../../store/slices/interfaceSlice";
import { string } from "yup";

const MovieDialog: React.FC = () => {
  const { currentMovie } = useTypedSelector((state) => state.data);
  const { movieDialogOpen } = useTypedSelector((state) => state.interface);

  const dispatch = useTypedDispatch();
  const handleError = useErrorHandler();

  const handleClose = () => {
    dispatch(setMovieDialogOpen(false));
  };

  const handleClearMovie = () => {
    dispatch(clearCurrentMovie());
  };

  const handlePickMovie = async () => {
    try {
      if (currentMovie) await moviePicker.pick(currentMovie?.Title);
      dispatch(
        setSuccess(`Successfully added ${currentMovie?.Title} to your picks !`)
      );
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    if (currentMovie) dispatch(setMovieDialogOpen(true));
  }, [currentMovie]);

  return (
    <Dialog
      open={movieDialogOpen}
      onClose={handleClose}
      TransitionProps={{ onExited: handleClearMovie }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          fontWeight: "bold",
          color: "primary.main",
        }}
      >
        {currentMovie?.Title}
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={{ display: "flex", gap: "1.5rem" }}>
        {string().url().isValidSync(currentMovie?.Poster) && (
          <CardMedia
            component={"img"}
            image={currentMovie?.Poster}
            sx={{ width: "15rem", borderRadius: ".3rem" }}
          />
        )}
        <Box>
          <Typography gutterBottom>
            <Typography
              sx={{ fontWeight: "bold", color: "primary.main" }}
              component={"span"}
            >
              Year :{" "}
            </Typography>
            {currentMovie?.Year}
          </Typography>
          <Typography gutterBottom>
            <Typography
              sx={{ fontWeight: "bold", color: "primary.main" }}
              component={"span"}
            >
              Actors :{" "}
            </Typography>
            {currentMovie?.Actors}
          </Typography>
          <Typography gutterBottom>
            <Typography
              sx={{ fontWeight: "bold", color: "primary.main" }}
              component={"span"}
            >
              Plot :{" "}
            </Typography>
            {currentMovie?.Plot}
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary" onClick={handlePickMovie}>
          Pick Movie
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MovieDialog;
