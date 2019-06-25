import React from "react";
import Card from "react-bootstrap/Card";
import GenreCardActionsController from "./AuthorCardActionsController";

function GenreCard({ item }) {
  return (
    <Card>
      <Card.Img variant="top" src={item.coverURL} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <GenreCardActionsController id={item._id} />
      </Card.Body>
    </Card>
  );
}

export default GenreCard;
