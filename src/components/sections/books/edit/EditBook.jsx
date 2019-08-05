import React from "react";
import { Row, Col, Jumbotron } from "react-bootstrap";
import EditBookFormController from "./EditBookFormController";
import Navigation from "../../../nav/Navigation";
import FormCard from "../../../common/forms/FormCard";

const EditBook = ({ match }) => {
  return (
    <React.Fragment>
      <Navigation />
      <Row className="mt-4">
        <Col>
          <Jumbotron className="bg-light text-dark">
            <h1>Instructions</h1>
            <p>Edit this book.</p>
          </Jumbotron>
        </Col>
        <Col>
          <FormCard
            title="Edit a Book"
            message="Please read the instructions before you proceed."
            formController={<EditBookFormController id={match.params.id} />}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default EditBook;
