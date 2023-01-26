import { Box, Container } from "@mui/material";
import EmptyListMessage from "./components/EmptyListMessage/EmptyListMessage";
import Header from "./components/Header/Header";
import MovieDialog from "./components/MovieDialog/MovieDialog";
import MoviesList from "./components/MoviesList/MoviesList";
import Notification from "./components/Notification/Notification";
import { useTypedSelector } from "./hooks/reduxHooks";
import { AppTypes } from "./types/app";

const App: React.FC = () => {
  const { movies } = useTypedSelector((state) => state.data);

  return (
    <Container maxWidth="xl">
      <Header />
      <Box>
        <EmptyListMessage hasMovies={!!movies.length} />
        {!!movies.length && <MoviesList movies={movies} />}
      </Box>
      <MovieDialog />
      <Notification />
    </Container>
  );
};

export default App;
