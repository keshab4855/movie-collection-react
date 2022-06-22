import "./App.css";
import { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import SearchForm from "./components/SearchForm";
import CustomCard from "./components/CustomCard";
import MovieList from "./components/MovieList";
import { fetchMovieInfo } from "./helpers/axiosHelper";

function App() {
  const [movie, setMovie] = useState({});
  const [showError, setShowError] = useState("");
  const [movieList, setMovieList] = useState([]);
  const handleOnSubmit = async (str) => {
    const result = await fetchMovieInfo(str);

    setMovie(result);
    result.Response === "False" ? setShowError(result.Error) : setShowError("");
    console.log(` movie:${movie}`);
  };

  const movieSelect = (movie) => {
    setMovieList([...movieList, movie]);
    setMovie({});
  };
  const deleteMovie = (imdbID) => {
    const filteredArg = movieList.filter((item) => item.imdbID !== imdbID);
    setMovieList(filteredArg);
  };
  return (
    <div className="wrapper">
      <Container>
        <SearchForm handleOnSubmit={handleOnSubmit}></SearchForm>
        <div className="mt-4 d-flex justify-content-center">
          <div>
            {movie.imdbID && (
              <CustomCard
                movie={movie}
                func={movieSelect}
                inSearchForm={true}
              ></CustomCard>
            )}
            {showError && <Alert variant="danger">{showError}</Alert>}
          </div>
        </div>
        <hr />

        <MovieList movieList={movieList} deleteMovie={deleteMovie}></MovieList>
      </Container>
    </div>
  );
}

export default App;
