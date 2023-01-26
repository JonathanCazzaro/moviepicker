import { Typography } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { borderRadius } from "@mui/system";

const EmptyListMessage: React.FC<{
  hasMovies: boolean;
  isApiResponseEmpty: boolean;
}> = ({ hasMovies, isApiResponseEmpty }) => {
  return !hasMovies || isApiResponseEmpty ? (
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
        boxShadow: "0 .2rem .75rem .1rem rgba(0, 0, 0, .1)"
      }}
    >
      {isApiResponseEmpty ? (
        <>
          Aucun film ne correspond à ces termes de recherche !<br />
          N'hésite pas à modifier et à recommencer.
        </>
      ) : (
        <>
          Entre le nom d'un film dans la barre de recherche et clique sur le
          bouton <SearchIcon />
        </>
      )}
    </Typography>
  ) : null;
};

export default EmptyListMessage;
