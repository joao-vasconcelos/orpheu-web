import React from "react";

import { Col, Row } from "react-bootstrap";
import BookCard from "./BookCard";

const BooksGrid = ({ items }) => {
  return (
    <Row>
      {items.map(item => (
        <Col key={item._id} md={3} className="mb-4">
          <BookCard item={item} />
        </Col>
      ))}
    </Row>
  );
};

export default BooksGrid;
