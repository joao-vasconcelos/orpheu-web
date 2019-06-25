import React from "react";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

const NavLinks = () => {
  return (
    <React.Fragment>
      <LinkContainer to="/books">
        <Button variant="link" className="mr-2">
          Books
        </Button>
      </LinkContainer>
      <LinkContainer to="/authors">
        <Button variant="link">Authors</Button>
      </LinkContainer>
    </React.Fragment>
  );
};

export default NavLinks;
