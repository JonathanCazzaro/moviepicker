import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";

const SearchBar: React.FC = () => {
  const [search, setSearch] = useState("");

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(search);
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit}>
      <FormControl fullWidth>
        <TextField
          required
          placeholder="Tapez le nom d'un film..."
          value={search}
          onChange={handleChange}
          size="small"
          color="secondary"
          InputProps={{
            style: {
              backgroundColor: "white",
              borderRadius: "10rem",
              paddingLeft: ".5rem",
              width: "25rem",
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
    </Box>
  );
};

export default SearchBar;
