import React from "react";
import { Button, Row, Col, Jumbotron } from "react-bootstrap";
import CreateBookFormController from "./CreateBookFormController";
import Navigation from "../../../nav/Navigation";
import FormCard from "../../../common/forms/FormCard";

const CreateBook = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Row className="mt-4">
        <Col>
          <Jumbotron className="bg-light text-dark">
            <h1>Instructions</h1>
            <p>
              Have you looked for specific books but did not find them anywhere?
              Start here and you will!
            </p>
            <Button variant="outline-light">Login</Button>
          </Jumbotron>
        </Col>
        <Col>
          <FormCard
            title="Create a new book"
            message="Please read the instructions before you proceed."
            formController={<CreateBookFormController />}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default CreateBook;
