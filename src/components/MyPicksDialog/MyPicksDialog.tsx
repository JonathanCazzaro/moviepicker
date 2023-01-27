import {
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTypedDispatch, useTypedSelector } from "../../hooks/reduxHooks";
import { movieRepo } from "../../services/moviePicker";
import { setMyPicksDialogOpen } from "../../store/slices/interfaceSlice";
import CommonMovieDialogTitle from "../MovieDialog/CommonDialogTitle";
import MyPicksListItem from "./MyPicksListItem";

const getPicks = async (letter: string) => {
  const data = await movieRepo.getByFirstLetter(letter);
  return data;
};

const MyPicksDialog: React.FC = () => {
  const dispatch = useTypedDispatch();
  const { myPicksDialogOpen } = useTypedSelector((state) => state.interface);
  const [myPicks, setMyPicks] = useState<string[]>([]);

  const handleClose = () => {
    dispatch(setMyPicksDialogOpen(false));
  };

  useEffect(() => {
    const getPicks = async () => {
      const data = await movieRepo.getAll();
      setMyPicks(data);
    };
    if (myPicksDialogOpen) getPicks();
  }, [myPicksDialogOpen]);

  return (
    <Dialog
      open={myPicksDialogOpen}
      onClose={handleClose}
      PaperProps={{ style: { maxHeight: "40rem", minWidth: "20rem" } }}
    >
      <CommonMovieDialogTitle title="My Picks" handleClose={handleClose} />
      <DialogContent dividers>
        <List>
          {myPicks.length ? (
            myPicks.map((pick, index) => (
              <ListItem key={`pick-${index}`}>
                <Chip label={pick} size="medium" sx={{ margin: "auto" }} />
              </ListItem>
            ))
          ) : (
            <Typography>You haven't picked any movies yet !</Typography>
          )}
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default MyPicksDialog;
