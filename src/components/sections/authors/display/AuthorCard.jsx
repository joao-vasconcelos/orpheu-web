import React from "react";
import Card from "react-bootstrap/Card";
import AuthorCardActionsController from "./AuthorCardActionsController";

function AuthorCard({ item }) {
  return (
    <Card>
      <Card.Img variant="top" src="https://picsum.photos/100/100" />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Subtitle className="text-muted" style={{ fontSize: 14 }}>
          born {item.birthdate.substr(0, 10)}
        </Card.Subtitle>
        <Card.Text>{item.biography}</Card.Text>
        <AuthorCardActionsController id={item._id} />
      </Card.Body>

      <Card.Footer>
        <small className="text-muted">{item.nationality}</small>
      </Card.Footer>
    </Card>
  );
}

export default AuthorCard;
