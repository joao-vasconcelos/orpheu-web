import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ErrorDialog = ({ error }) => {
  return (
    <div className="d-flex justify-content-center m-4 p-4">
      <Card bg="warning" className="w-75">
        <Card.Header>An Unexpected Error Ocurred</Card.Header>
        <Card.Body>
          <Card.Title>We are sorry for the inconvenience.</Card.Title>
          <Card.Text>
            The error has been logged and will be solved soon.
            <br />
            You can always contact us by email to
            <strong> support@orpheu.org</strong>.
          </Card.Text>
          <Button variant="primary" href="/">
            Go to Homepage
          </Button>
        </Card.Body>
        <Card.Footer
          className="font-weight-bold text-monospace text-muted"
          style={{ fontSize: 12 }}
        >
          {error.response.data}
          <br />
          {error.stack}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ErrorDialog;
