import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Image, Row, Col } from "react-bootstrap";
import SimpleTable from "../../../common/display/SimpleTable";

const GenreDetails = ({ item }) => {
  return (
    <Row>
      {/* LEFT COLUMN */}
      {/* With Book Cover Image */}
      <Col md={5} className="text-center">
        <Image rounded className="w-100 mb-4" src={item.coverURL} />
        <ButtonGroup className="w-100">
          <Button variant="outline-secondary">Editar</Button>
          <Button variant="outline-danger">Apagar</Button>
        </ButtonGroup>
      </Col>

      {/* RIGHT COLUMN */}
      {/* With Book Title, Author, DetailsTable, Buttons and Sinopse */}
      <Col>
        {/* FIRST R-ROW */}
        {/* With Book Title and Author */}
        <Row>
          <Col>
            <h1>{item.title}</h1>
          </Col>
        </Row>

        {/* SECOND R-ROW */}
        {/* With DetailsTable */}
        <Row className="my-4">
          <Col>Nothing to display</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default GenreDetails;
