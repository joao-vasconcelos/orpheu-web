import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

class LogoutSuccessCard extends Component {
  componentDidMount() {
    setTimeout(() => {
      window.location = "/";
    }, 4000);
  }

  render() {
    return (
      <Card bg="success" text="white">
        <Card.Header as="h5">You are logged out!</Card.Header>
        <Card.Body>
          <p>
            Thank you for your visit!
            <br />
            Now redirecting you to the homepage.
          </p>
          <Spinner animation="border" role="status" size="sm">
            <span className="sr-only">Redirecting you to the homepage.</span>
          </Spinner>
        </Card.Body>
      </Card>
    );
  }
}
export default LogoutSuccessCard;
