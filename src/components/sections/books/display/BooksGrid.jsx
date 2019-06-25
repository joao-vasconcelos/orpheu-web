import React from "react";

import { Col, Row } from "react-bootstrap";
import BookCard from "./BookCard";

const BooksGrid = ({ books }) => {
  return (
    <Row>
      {books.map(book => (
        <Col key={book._id} md={4} className="mb-4">
          <BookCard item={book} />
        </Col>
      ))}
    </Row>
  );
};

export default BooksGrid;
