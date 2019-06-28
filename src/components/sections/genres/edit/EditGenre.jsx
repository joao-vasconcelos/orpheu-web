import React from "react";
import { Row, Col, Jumbotron } from "react-bootstrap";
import EditGenreFormController from "./EditGenreFormController";
import Navigation from "../../../nav/Navigation";
import FormCard from "../../../common/forms/FormCard";

const EditGenre = ({ match }) => {
  return (
    <React.Fragment>
      <Navigation />
      <Row className="mt-4">
        <Col>
          <Jumbotron className="bg-light text-dark">
            <h1>Instructions</h1>
            <p>Edit this genre.</p>
          </Jumbotron>
        </Col>
        <Col>
          <FormCard
            title="Edit a Genre"
            message="Please read the instructions before you proceed."
            formController={<EditGenreFormController id={match.params.id} />}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default EditGenre;
