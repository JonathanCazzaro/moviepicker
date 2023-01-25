import { Container } from "@mui/material";
import Header from "./components/Header/Header";
import { EmptyMovieTitleError } from "./errors/EmptyMovieTitleError";

const App: React.FC = () => {
  const error = new EmptyMovieTitleError();
  console.log(error);


  return (
    <Container maxWidth="xl">
      <Header />
    </Container>
  );
};

export default App;
