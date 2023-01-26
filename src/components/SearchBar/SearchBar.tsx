import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { useTypedDispatch } from "../../hooks/reduxHooks";
import omdbApi from "../../services/omdbApi";
import { setMovies } from "../../store/slices/dataSlice";
import { setError } from "../../store/slices/interfaceSlice";
import { AppTypes } from "../../types/app";

const SearchBar: React.FC = () => {
  const [search, setSearch] = useState("");
  const dispatch = useTypedDispatch();

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = await omdbApi.searchMovies(search);

    if (data?.Error) {
      dispatch(setError(AppTypes.Error.EMPTY_API_RESPONSE));
      dispatch(setMovies([]));
    } else if (data?.Search) dispatch(setMovies(data.Search));
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit}>
      <FormControl fullWidth>
        <TextField
          required
          placeholder="Tape le nom d'un film..."
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
