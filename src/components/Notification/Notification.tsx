import { Alert, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTypedDispatch, useTypedSelector } from "../../hooks/reduxHooks";
import { clearNotification } from "../../store/slices/interfaceSlice";

const Notification: React.FC<{ duration?: number }> = ({ duration = 5000 }) => {
  const { notification } = useTypedSelector(
    (state) => state.interface
  );
  const [open, setOpen] = useState(false);

  const dispatch = useTypedDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  const handleClearNotification = () => {
    dispatch(clearNotification());
  };

  useEffect(() => {
    if (notification) setOpen(true);
  }, [notification]);

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      autoHideDuration={duration}
      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      TransitionProps={{ onExited: handleClearNotification }}
    >
      <Alert
        severity={notification?.type}
        onClose={handleClose}
        variant="filled"
      >
        {notification?.message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
