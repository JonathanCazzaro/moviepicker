import {
  Box,
  CircularProgress,
  CircularProgressProps,
  Paper,
} from "@mui/material";
import React from "react";
import { useTypedSelector } from "../../hooks/reduxHooks";

const LoadBar: React.FC<CircularProgressProps> = (props) => {
  const { isLoading } = useTypedSelector((state) => state.interface);

  return isLoading ? (
    <Paper
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translateX(-50%), translateY(-50%)",
        padding: "1rem"
      }}
    >
      <CircularProgress size={"5rem"} {...props} />
    </Paper>
  ) : null;
};

export default LoadBar;
