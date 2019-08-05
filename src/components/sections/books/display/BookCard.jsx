import React from "react";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";

function BookCard({ item }) {
  console.log("bookItem", item);
  return (
    <LinkContainer to={"/books/" + item._id} style={{ cursor: "pointer" }}>
      <Card className="sh-light grow animate">
        <Card.Img variant="top" src={item.pictureURL} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Subtitle className="text-muted" style={{ fontSize: 14 }}>
            {
              // Only show deathdate if available.
            }
          </Card.Subtitle>
          <Card.Text className="mt-2">
            {/* {item.biography && item.biography.substr(0, 100) + "..."} */}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <span className="badge badge-secondary mr-2">{item.price} €</span>
          {/* <span className="badge badge-success">{item.status}</span> */}
        </Card.Footer>
      </Card>
    </LinkContainer>
  );
}

export default BookCard;

// function GenreCard({ item }) {
//   return (
//     <LinkContainer to={"/genres/" + item._id} style={{ cursor: "pointer" }}>
//       <Card className="sh-light grow animate bg-light">
//         <Card.Img variant="top" src={item.pictureURL} />
//         <Card.Body style={{ backgroundColor: item.bgColor }}>
//           <Card.Title
//             className="text-center"
//             style={{ fontSize: 30, color: item.txtColor }}
//           >
//             {item.title}
//           </Card.Title>
//         </Card.Body>
//       </Card>
//     </LinkContainer>
//   );
// }

// export default GenreCard;
