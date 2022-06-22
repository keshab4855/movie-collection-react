import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import CustomCard from "./CustomCard";
const MovieList = ({ movieList, deleteMovie }) => {
  const [displayList, setDisplayList] = useState(movieList);
  useEffect(() => {
    setDisplayList(movieList);
  }, [movieList]);

  const filterMovie = (mood) => {
    if (mood === "all") {
      return setDisplayList(movieList);
    }
    const tempArg = movieList.filter((item) => item.mood === mood);
    setDisplayList(tempArg);
  };

  return (
    <div>
      <Row>
        <p>{displayList.length} movies found</p>
        <Col className="d-flex justify-content-between">
          {" "}
          <ButtonGroup aria-label="Basic example">
            <Button variant="primary" onClick={() => filterMovie("all")}>
              All
            </Button>
            <Button variant="success" onClick={() => filterMovie("happy")}>
              Happy
            </Button>
            <Button variant="danger" onClick={() => filterMovie("romantic")}>
              Romantic
            </Button>
          </ButtonGroup>{" "}
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">Grid</Button>
            <Button variant="secondary">List</Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="d-flex justify-content-around flex-wrap">
          {displayList.map((item, i) => (
            <CustomCard
              key={i}
              movie={item}
              deleteMovie={deleteMovie}
            ></CustomCard>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default MovieList;
