import { Alert, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTypedDispatch, useTypedSelector } from "../../hooks/reduxHooks";
import { setError, setSuccess } from "../../store/slices/interfaceSlice";

const Notification: React.FC<{ duration?: number }> = ({ duration = 5000 }) => {
  const { error, errorMessage, success, successMessage } = useTypedSelector(
    (state) => state.interface
  );
  const [open, setOpen] = useState(false);

  const dispatch = useTypedDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  const handleClearNotification = () => {
    if (error) dispatch(setError(false));
    else if (success) dispatch(setSuccess(false));
  };

  useEffect(() => {
    if (error || success) setOpen(true);
  }, [error, success]);

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      autoHideDuration={duration}
      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      TransitionProps={{ onExited: handleClearNotification }}
    >
      <Alert
        severity={error ? "error" : "success"}
        onClose={handleClose}
        variant="filled"
      >
        {errorMessage || successMessage}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
