import { Box, Container } from "@mui/material";
import EmptyListMessage from "./components/EmptyListMessage/EmptyListMessage";
import Header from "./components/Header/Header";
import MoviesList from "./components/MoviesList/MoviesList";
import { useTypedSelector } from "./hooks/reduxHooks";
import { AppTypes } from "./types/app";

const App: React.FC = () => {
  const { movies } = useTypedSelector((state) => state.data);
  const { error } = useTypedSelector((state) => state.interface);

  return (
    <Container maxWidth="xl">
      <Header />
      <Box>
        <EmptyListMessage
          hasMovies={!!movies.length}
          isApiResponseEmpty={error === AppTypes.Error.EMPTY_API_RESPONSE}
        />
        {!!movies.length && <MoviesList movies={movies} />}
      </Box>
    </Container>
  );
};

export default App;
