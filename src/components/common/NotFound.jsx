import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Navigation from "../nav/Navigation";

const NotFound = ({ history }) => {
  return (
    <React.Fragment>
      <Navigation />
      <div className="d-flex justify-content-center m-4 p-4">
        <Card bg="light" className="w-75">
          <Card.Header>The page you are looking for was not found.</Card.Header>
          <Card.Body>
            <Card.Title>We are sorry for the inconvenience.</Card.Title>
            <Card.Text>
              Maybe you misspelled a word?
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
            #404 Page Not Found
          </Card.Footer>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
