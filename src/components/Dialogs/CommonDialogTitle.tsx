import { DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

interface MovieDialogTitleProps {
  title: string;
  handleClose: () => void;
}

const CommonMovieDialogTitle: React.FC<MovieDialogTitleProps> = ({
  handleClose,
  title,
}) => {
  return (
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
      {title}
      <IconButton onClick={handleClose}>
        <CloseIcon />
      </IconButton>
    </DialogTitle>
  );
};

export default CommonMovieDialogTitle;
