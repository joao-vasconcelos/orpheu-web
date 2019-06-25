import React from "react";
import { Button, Row, Col, Jumbotron } from "react-bootstrap";
import SignupFormController from "./SignupFormController";
import BrandHeader from "../../nav/BrandHeader";
import FormCard from "../../common/forms/FormCard";

const Signup = () => {
  return (
    <React.Fragment>
      <BrandHeader userButton={false} />
      <Row className="mt-4">
        <Col>
          <Jumbotron className="bg-success text-white">
            <h1>Welcome!</h1>
            <p>
              Have you looked for specific books but did not find them anywhere?
              Start here and you will!
            </p>
            <Button variant="outline-light">Login</Button>
          </Jumbotron>
        </Col>
        <Col>
          <FormCard
            title="Create a new account."
            message="Let's get you set up."
            formController={<SignupFormController />}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Signup;
