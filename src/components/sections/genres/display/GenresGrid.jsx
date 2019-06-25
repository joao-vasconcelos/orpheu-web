import React from "react";

import { Col, Row } from "react-bootstrap";
import GenreCard from "./GenreCard";

const GenresGrid = ({ items }) => {
  return (
    <Row>
      {items.map(item => (
        <Col key={item._id} md={3} className="mb-4">
          <GenreCard item={item} />
        </Col>
      ))}
    </Row>
  );
};

export default GenresGrid;
