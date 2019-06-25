import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Signup = ({ title, message, formController }) => {
  return (
    <Card>
      <Card.Header as="h5">{title}</Card.Header>
      <Card.Body>
        <p>{message}</p>
        <hr />
        {formController}
      </Card.Body>
      <Card.Footer className="text-muted" style={{ fontSize: 14 }}>
        Read our {<Link to="/privacy">Privacy Policy</Link>} and understand
        where we stand.
      </Card.Footer>
    </Card>
  );
};

export default Signup;
