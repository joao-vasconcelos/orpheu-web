import React from "react";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";

function AuthorCard({ item }) {
  return (
    <LinkContainer to={"/authors/" + item._id} style={{ cursor: "pointer" }}>
      <Card className="sh-light grow animate">
        <Card.Img variant="top" src={item.coverURL} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Subtitle className="text-muted" style={{ fontSize: 14 }}>
            {item.birthdate.substr(0, 4) +
              // Only show deathdate if available.
              (item.deathdate && " to " + item.deathdate.substr(0, 4))}
          </Card.Subtitle>
          <Card.Text className="mt-2">
            {item.biography && item.biography.substr(0, 100) + "..."}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{item.nationality}</small>
        </Card.Footer>
      </Card>
    </LinkContainer>
  );
}

export default AuthorCard;
