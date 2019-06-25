import React from "react";

import { Col, Row } from "react-bootstrap";
import AuthorCard from "./AuthorCard";

const AuthorsGrid = ({ items }) => {
  return (
    <Row>
      {items.map(item => (
        <Col key={item._id} md={3} className="mb-4">
          <AuthorCard item={item} />
        </Col>
      ))}
    </Row>
  );
};

export default AuthorsGrid;
