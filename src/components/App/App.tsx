import { Box, Container } from "@mui/material";
import EmptyListMessage from "../EmptyListMessage/EmptyListMessage";
import Header from "../Header/Header";
import MovieDialog from "../MovieDialog/MovieDialog";
import MoviesList from "../MoviesList/MoviesList";
import Notification from "../Notification/Notification";
import { useTypedSelector } from "../../hooks/reduxHooks";
import MyPicksDialog from "../MyPicksDialog/MyPicksDialog";

const App: React.FC = () => {
  const { movies } = useTypedSelector((state) => state.data);

  return (
    <Container maxWidth="xl" sx={{ height: "100%" }}>
      <Header />
      <Box>
        {movies.length ? <MoviesList movies={movies} /> : <EmptyListMessage />}
      </Box>
      <MovieDialog />
      <MyPicksDialog />
      <Notification />
    </Container>
  );
};

export default App;
