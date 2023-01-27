import { ValidationError } from "yup";
import { ApiConnectionError } from "../errors/ApiConnectionError";
import { EmptyMovieTitleError } from "../errors/EmptyMovieTitleError";
import { MoviePickAlreadyExistsError } from "../errors/MoviePickAlreadyExistError";
import { setNotification } from "../store/slices/interfaceSlice";
import { useTypedDispatch } from "./reduxHooks";

export function useErrorHandler() {
  const dispatch = useTypedDispatch();

  return (error: unknown) => {
    console.log(error);

    switch (true) {
      case error instanceof MoviePickAlreadyExistsError:
        dispatch(
          setNotification({
            type: "error",
            message:
              "You cannot pick more than one movie starting with this letter !",
          })
        );
        break;
      case error instanceof EmptyMovieTitleError:
        dispatch(
          setNotification({
            type: "error",
            message: "Movie title cannot be empty !",
          })
        );
        break;
      case error instanceof ApiConnectionError:
        dispatch(
          setNotification({
            type: "error",
            message:
              "Cannot get a proper response from server. Please try again later.",
          })
        );
        break;
      case error instanceof ValidationError:
        dispatch(
          setNotification({
            type: "error",
            message: "No data has matched ! Modify your request and try again.",
          })
        );
        break;
      default:
        dispatch(
          setNotification({
            type: "error",
            message: "An error occurred. Please check your connection and refresh your browser.",
          })
        );
        break;
    }
  };
}
