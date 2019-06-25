import React from "react";
import Card from "react-bootstrap/Card";
import BookCardActionsController from "./BookCardActionsController";

function BookCard({ item }) {
  return (
    <Card>
      <Card.Img variant="top" src="https://picsum.photos/200/200" />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <BookCardActionsController id={item._id} />
      </Card.Body>

      <Card.Footer>
        <small className="text-muted">{item.genre}</small>
      </Card.Footer>
    </Card>
  );
}

export default BookCard;
