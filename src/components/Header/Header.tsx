import { Box, Button, Typography } from "@mui/material";
import React from "react";
import MovieIcon from "@mui/icons-material/Movie";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchBar from "../SearchBar/SearchBar";

const Header: React.FC = () => {
  return (
    <Box
      sx={{
        position: "sticky",
        width: "100%",
        backgroundColor: "primary.main",
        color: "text.secondary",
        marginTop: "1rem",
        padding: "1rem 2rem",
        borderRadius: ".5rem",
        display: "flex",
        alignItems: "center",
        gap: "2rem",
        boxShadow: "0 0 .75rem .2rem rgba(0, 0, 0, .2)"
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
      >
        <MovieIcon fontSize="large" />
        MoviePicker
      </Typography>
      <SearchBar />
      <Button variant="contained" color="secondary" sx={{ gap: ".5rem", margin: "0 0 0 auto" }}>
        <FavoriteIcon />
        Mes favoris
      </Button>
    </Box>
  );
};

export default Header;
