import {
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { useTypedDispatch, useTypedSelector } from "../../hooks/reduxHooks";
import omdbApi from "../../services/omdbApi";
import { setMovies } from "../../store/slices/dataSlice";
import { setLoading } from "../../store/slices/interfaceSlice";
import { useErrorHandler } from "../../hooks/useErrorHandler";
import LoadBar from "../LoadBar/LoadBar";

const SearchBar: React.FC = () => {
  const [search, setSearch] = useState("");
  const { isLoading } = useTypedSelector((state) => state.interface);
  const dispatch = useTypedDispatch();
  const handleError = useErrorHandler();

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      dispatch(setLoading(true));
      const data = await omdbApi.searchMovies(search);
      dispatch(setMovies(data.Search || []));
    } catch (error) {
      handleError(error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <FormControl component={"form"} fullWidth onSubmit={handleSubmit}>
      <TextField
        required
        placeholder="Enter the title of a movie..."
        value={search}
        onChange={handleChange}
        size="small"
        color="secondary"
        InputProps={{
          style: {
            backgroundColor: "white",
            borderRadius: "10rem",
            paddingLeft: ".5rem",
            maxWidth: "25rem",
            width: "100%",
          },
          endAdornment: (
            <InputAdornment position="end">
              {isLoading ? (
                <LoadBar
                  disableShrink
                  size={"1.5rem"}
                  sx={{ display: "relative" }}
                />
              ) : (
                <IconButton type="submit">
                  <SearchIcon />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
};

export default SearchBar;
