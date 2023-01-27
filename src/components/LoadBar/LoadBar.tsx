import { CircularProgress, CircularProgressProps } from "@mui/material";
import React from "react";
import { useTypedSelector } from "../../hooks/reduxHooks";

const LoadBar: React.FC<CircularProgressProps> = (props) => {
  const { isLoading } = useTypedSelector((state) => state.interface);

  return isLoading ? (
    <CircularProgress
      size={"5rem"}
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translateX(-50%), translateY(-50%)",
      }}
      {...props}
    />
  ) : null;
};

export default LoadBar;
