import { Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";
import { useTypedDispatch } from "../../hooks/reduxHooks";
import { setMyPicksDialogOpen } from "../../store/slices/interfaceSlice";

const MyPicksButton: React.FC = () => {
  const dispatch = useTypedDispatch();

  const handleClick = () => {
    dispatch(setMyPicksDialogOpen(true));
  };

  return (
    <Button
      variant="outlined"
      color="secondary"
      sx={{ gap: ".5rem", margin: "0 0 0 auto", flexShrink: 0 }}
      onClick={handleClick}
    >
      <FavoriteIcon />
      My picks
    </Button>
  );
};

export default MyPicksButton;
