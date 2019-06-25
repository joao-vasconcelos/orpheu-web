import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import auth from "../../../services/authService";

const LogoutErrorCard = ({ userName }) => {
  return (
    <Card bg="warning" text="dark">
      <Card.Header as="h5">{userName}, an error ocurred.</Card.Header>
      <Card.Body>
        <p>We could not log you out.</p>
        <hr />
        <Button
          variant="light"
          onClick={() => {
            auth.logout();
            window.location = "/logout";
          }}
        >
          Try again
        </Button>
      </Card.Body>
    </Card>
  );
};

export default LogoutErrorCard;
