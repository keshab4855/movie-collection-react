import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import CustomCard from "./CustomCard";

const MovieList = () => {
  return (
    <div>
      <Row>
        <Col className="d-flex justify-content-between">
          {" "}
          <ButtonGroup aria-label="Basic example">
            <Button variant="primary">All</Button>
            <Button variant="success">Happy</Button>
            <Button variant="danger">Romantic</Button>
          </ButtonGroup>{" "}
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">Grid</Button>
            <Button variant="secondary">List</Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="d-flex justify-content-around flex-wrap">
          <CustomCard></CustomCard>
          <CustomCard></CustomCard>
          <CustomCard></CustomCard>
          <CustomCard></CustomCard>
          <CustomCard></CustomCard>
          <CustomCard></CustomCard>
          <CustomCard></CustomCard>
        </Col>
      </Row>
    </div>
  );
};

export default MovieList;
