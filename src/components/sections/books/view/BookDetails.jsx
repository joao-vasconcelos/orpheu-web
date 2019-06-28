import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Image, Row, Col } from "react-bootstrap";
import SimpleTable from "../../../common/display/SimpleTable";

const BookDetails = ({ item }) => {
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
      </Col>

      {/* RIGHT COLUMN */}
      {/* With Book Title, Author, DetailsTable, Buttons and Sinopse */}
      <Col>
        {/* FIRST R-ROW */}
        {/* With Book Title and Author */}
        <Row>
          <Col>
            <h1>{item.title}</h1>
            {item.authors.map(author => (
              <Link key={author._id} to={"/authors/" + author._id}>
                <h4>{author.name}</h4>
              </Link>
            ))}
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
        {/* With action Buttons */}
        <Row className="mt-5 mb-5">
          <Col>
            <Button block>Comprar</Button>
          </Col>
          <Col>
            <ButtonGroup className="w-100">
              <Button variant="outline-secondary">Editar</Button>
              <Button variant="outline-danger">Apagar</Button>
            </ButtonGroup>
          </Col>
        </Row>

        {/* FOURTH R-ROW */}
        {/* With Sinopse */}
        <Row className="my-5 py-3">
          <Col>
            <h6>Sinopse</h6>
            <hr />
            <p>{item.sinopse}</p>
            <hr />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default BookDetails;
