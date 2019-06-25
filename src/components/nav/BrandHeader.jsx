import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import UserButton from "./userButton/UserButton";

//
// NAVIGATION

const BrandHeader = ({ userButton }) => {
  return (
    <Row className="flex-nowrap justify-content-between align-items-center pt-4 pb-3">
      <Col className="col-4">
        <NavLinks />
      </Col>
      <Col className="col-4 text-center">
        <Link className="text-dark text-decoration-none" to="/">
          <h1>Orpheu</h1>
        </Link>
      </Col>
      <Col className="col-4 d-flex justify-content-end align-items-center">
        {userButton && <UserButton />}
      </Col>
    </Row>
  );
};

export default BrandHeader;
