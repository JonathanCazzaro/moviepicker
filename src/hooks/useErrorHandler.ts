import { ValidationError } from "yup";
import { ApiConnectionError } from "../errors/ApiConnectionError";
import { EmptyMovieTitleError } from "../errors/EmptyMovieTitleError";
import { MoviePickAlreadyExistsError } from "../errors/MoviePickAlreadyExistError";
import { setError } from "../store/slices/interfaceSlice";
import { useTypedDispatch } from "./reduxHooks";

export function useErrorHandler() {
  const dispatch = useTypedDispatch();

  return (error: unknown) => {
    console.log(error);

    switch (true) {
      case error instanceof MoviePickAlreadyExistsError:
        dispatch(
          setError(
            "You cannot pick more than one movie starting with this letter !"
          )
        );
        break;
      case error instanceof EmptyMovieTitleError:
        dispatch(setError("Movie title cannot be empty !"));
        break;
      case error instanceof ApiConnectionError:
        dispatch(setError("Cannot get a proper response from server. Please try again later."));
        break;
      case error instanceof ValidationError:
        dispatch(
          setError("No data has matched ! Modify your request and try again.")
        );
        break;
      default:
        dispatch(setError("An error occurred. Please refresh your browser."));
        break;
    }
  };
}
