import React from "react";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";

function GenreCard({ item }) {
  return (
    <LinkContainer to={"/genres/" + item._id} style={{ cursor: "pointer" }}>
      <Card className="sh-light grow animate bg-light">
        <Card.Img variant="top" src={item.coverURL} />
        <Card.Body style={{ backgroundColor: item.bgColor }}>
          <Card.Title
            className="text-center"
            style={{ fontSize: 30, color: item.txtColor }}
          >
            {item.title}
          </Card.Title>
        </Card.Body>
      </Card>
    </LinkContainer>
  );
}

export default GenreCard;
