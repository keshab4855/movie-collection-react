import "./App.css";
import { Container } from "react-bootstrap";
import SearchForm from "./components/SearchForm";
import CustomCard from "./components/CustomCard";
import MovieList from "./components/MovieList";

function App() {
  const handleOnSubmit = (str) => {
    console.log(str);
  };

  return (
    <div className="wrapper">
      <Container>
        <SearchForm handleOnSubmit={handleOnSubmit}></SearchForm>
        <div className="mt-4 d-flex justify-content-center">
          <CustomCard></CustomCard>
        </div>
        <hr />
        <MovieList></MovieList>
        <div>card view for the seacrh result mpvie</div>
      </Container>
    </div>
  );
}

export default App;
