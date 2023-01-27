import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

interface MyPicksListItemProps {
  movie?: string;
  letter: string;
}

const MyPicksListItem: React.FC<MyPicksListItemProps> = ({ letter, movie }) => {
  return (
    <ListItem>
      <ListItemIcon>{letter}</ListItemIcon>
      <ListItemText>
        {movie || "You haven't picked any movie for this letter yet."}
      </ListItemText>
    </ListItem>
  );
};

export default MyPicksListItem;
