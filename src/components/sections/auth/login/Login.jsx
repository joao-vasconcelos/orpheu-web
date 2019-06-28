import React from "react";
import { Button, Row, Col, Jumbotron } from "react-bootstrap";
import BrandHeader from "../../../nav/BrandHeader";
import FormCard from "../../../common/forms/FormCard";
import LoginFormController from "./LoginFormController";

function Login() {
  return (
    <React.Fragment>
      <BrandHeader userButton={false} />
      <Row className="mt-4">
        <Col>
          <Jumbotron>
            <h1>Welcome!</h1>
            <p>
              Have you looked for specific books but did not find them anywhere?
              Start here and you will!
            </p>
            <Button variant="primary" href="/signup">
              Create an Account
            </Button>
          </Jumbotron>
        </Col>
        <Col>
          <FormCard
            title="Login to your account."
            message="Enter your credentials below to login to your account."
            formController={<LoginFormController />}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Login;
