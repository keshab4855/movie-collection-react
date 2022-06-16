import React from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const SearchForm = () => {
  return (
    <div className="mt-5">
      <h1 className=" text-center">My Movie list</h1>
      <Form className="mt-3 ">
        <Row>
          <Col></Col>
          <Col>
            <Form.Control placeholder="Search movie name ..." />
          </Col>
          <Col>
            <Button variant="primary">Search</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchForm;
