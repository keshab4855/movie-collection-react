import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CustomList = ({ movie = {}, func, inSearchForm, deleteMovie }) => {
  const { Title, Poster, imdbRating } = movie;

  return (
    <Card
      style={{ width: "100%" }}
      className="mt-3 d-flex flex-row justify-content-between"
    >
      <div style={{ width: "500px" }}>
        <Card.Img variant="top" src={Poster} width="500px" />
      </div>
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Title>{imdbRating}</Card.Title>
        {inSearchForm ? (
          <div className="d-flex justify-content-between mt-3">
            <Button
              variant="success"
              onClick={() => func({ ...movie, mood: "happy" })}
            >
              Happy List
            </Button>
            <Button
              variant="danger"
              onClick={() => func({ ...movie, mood: "romantic" })}
            >
              Romantic
            </Button>
          </div>
        ) : (
          <div className="d-grid gap-2">
            <Button
              onClick={() => deleteMovie(movie.imdbID)}
              variant="danger"
              size="lg"
            >
              Delete
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default CustomList;
