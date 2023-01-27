import { Button, Dialog, DialogActions } from "@mui/material";
import React, { useEffect } from "react";
import { useTypedDispatch, useTypedSelector } from "../../../hooks/reduxHooks";
import { clearCurrentMovie } from "../../../store/slices/dataSlice";
import { moviePicker } from "../../../services/moviePicker";
import { useErrorHandler } from "../../../hooks/useErrorHandler";
import {
  setMovieDialogOpen,
  setNotification,
} from "../../../store/slices/interfaceSlice";
import MovieDialogBody from "./MovieDialogBody";
import CommonMovieDialogTitle from "../CommonDialogTitle";

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
        setNotification({
          type: "success",
          message: `Successfully added ${currentMovie?.Title} to your picks !`,
        })
      );
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    if (currentMovie) dispatch(setMovieDialogOpen(true));
  }, [currentMovie]);

  return !!currentMovie ? (
    <Dialog
      open={movieDialogOpen}
      onClose={handleClose}
      TransitionProps={{ onExited: handleClearMovie }}
    >
      <CommonMovieDialogTitle handleClose={handleClose} title={currentMovie.Title} />
      <MovieDialogBody {...currentMovie} />
      <DialogActions>
        <Button variant="contained" color="primary" onClick={handlePickMovie}>
          Pick Movie
        </Button>
      </DialogActions>
    </Dialog>
  ) : null;
};

export default MovieDialog;
