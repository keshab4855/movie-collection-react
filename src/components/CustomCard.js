import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CustomCard = ({ movie = {}, func, inSearchForm, deleteMovie }) => {
  const { Title, Poster, imdbRating } = movie;

  return (
    <Card style={{ width: "18rem" }} className="mt-3">
      <Card.Img variant="top" src={Poster} style={{ height: "18rem" }} />
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

export default CustomCard;
