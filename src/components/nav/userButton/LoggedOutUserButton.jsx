import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const LoggedOutUserButton = () => {
  return (
    <ButtonGroup>
      <LinkContainer to="/login">
        <Button variant="outline-success" size="sm">
          Login
        </Button>
      </LinkContainer>
      <LinkContainer to="/signup">
        <Button variant="success" size="sm">
          Sign up
        </Button>
      </LinkContainer>
    </ButtonGroup>
  );
};

export default LoggedOutUserButton;
