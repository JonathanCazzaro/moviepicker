import { Box, CardMedia, DialogContent, Typography } from "@mui/material";
import React from "react";
import { string } from "yup";

const MovieDialogBody: React.FC<AppTypes.Movie> = ({
  Actors,
  Plot,
  Poster,
  Year,
}) => {
  return (
    <DialogContent dividers sx={{ display: "flex", gap: "1.5rem" }}>
      {string().url().isValidSync(Poster) && (
        <CardMedia
          component={"img"}
          image={Poster}
          sx={{ width: "15rem", borderRadius: ".3rem" }}
        />
      )}
      <Box>
        <Typography gutterBottom>
          <Typography
            sx={{ fontWeight: "bold", color: "primary.main" }}
            component={"span"}
          >
            Year :{" "}
          </Typography>
          {Year}
        </Typography>
        <Typography gutterBottom>
          <Typography
            sx={{ fontWeight: "bold", color: "primary.main" }}
            component={"span"}
          >
            Actors :{" "}
          </Typography>
          {Actors}
        </Typography>
        <Typography gutterBottom>
          <Typography
            sx={{ fontWeight: "bold", color: "primary.main" }}
            component={"span"}
          >
            Plot :{" "}
          </Typography>
          {Plot}
        </Typography>
      </Box>
    </DialogContent>
  );
};

export default MovieDialogBody;
