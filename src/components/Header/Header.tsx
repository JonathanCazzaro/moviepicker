import { Box, Typography } from "@mui/material";
import React from "react";
import MovieIcon from "@mui/icons-material/Movie";
import SearchBar from "../SearchBar/SearchBar";
import MyPicksButton from "../MyPicksButton/MyPicksButton";

const Header: React.FC = () => (
  <Box
    sx={{
      position: "sticky",
      width: "100%",
      backgroundColor: "primary.main",
      color: "text.secondary",
      padding: "1rem 2rem",
      borderRadius: ".5rem",
      display: "flex",
      alignItems: "center",
      gap: "2rem",
      boxShadow: "0 0 .75rem .2rem rgba(0, 0, 0, .2)",
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
    <MyPicksButton />
  </Box>
);

export default Header;
