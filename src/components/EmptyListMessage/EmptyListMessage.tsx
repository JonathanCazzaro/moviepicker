import { Typography } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const EmptyListMessage: React.FC = () => {
  return (
    <Typography
      sx={{
        width: "fit-content",
        margin: "15rem auto 0 auto",
        padding: "1rem 2rem",
        marginTop: "15rem",
        fontSize: "1.5rem",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        gap: ".5rem",
        color: "primary.main",
        backgroundColor: "secondary.dark",
        borderRadius: ".5rem",
        boxShadow: "0 .2rem .75rem .1rem rgba(0, 0, 0, .1)",
      }}
    >
      Enter a movie title in the searchbar and click the magnifying glass to see the
      results !
    </Typography>
  );
};

export default EmptyListMessage;
