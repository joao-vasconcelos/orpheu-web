import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Image, Row, Col } from "react-bootstrap";
import SimpleTable from "../../common/display/SimpleTable";

const AuthorDetails = ({ item }) => {
  return (
    <Row>
      {/* LEFT COLUMN */}
      {/* With Book Cover Image */}
      <Col md={5} className="text-center">
        <Image
          rounded
          className="w-100 mb-4"
          src="https://picsum.photos/100/100"
        />
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
            <h1>{item.name}</h1>
          </Col>
        </Row>

        {/* SECOND R-ROW */}
        {/* With DetailsTable */}
        <Row className="my-4">
          <Col>
            <SimpleTable
              items={[
                { title: "Nationality", content: item.nationality },
                { title: "Birthdate", content: item.birthdate },
                { title: "Deathdate", content: item.deathdate }
              ]}
            />
          </Col>
        </Row>

        {/* THIRD R-ROW */}
        {/* With Sinopse */}
        {item.biography && (
          <Row className="my-5 py-3">
            <Col>
              <h6>Biography</h6>
              <hr />
              <p>{item.biography}</p>
              <hr />
            </Col>
          </Row>
        )}
      </Col>
    </Row>
  );
};

export default AuthorDetails;
