import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

const GenreDetails = ({ item }) => {
  return (
    <React.Fragment>
      <Row className="mt-5">
        <Col>
          <Link to={"/genres/edit/" + item._id}>
            <button className="btn btn-light btn-sm">Edit genre</button>
          </Link>
        </Col>
      </Row>
      <Row className="pt-3 my-3">
        <Col>
          <h1>{item.title} books</h1>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <h5 className="text-secondary">{item.description}</h5>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default GenreDetails;

// return (
//   <Row>
//     {/* LEFT COLUMN */}
//     {/* With Book Cover Image */}
//     <Col md={5} className="text-center">
//       <Image rounded className="w-100 mb-4" src={item.coverURL} />
//       <ButtonGroup className="w-100">
//         <Button variant="outline-secondary">Editar</Button>
//         <Button variant="outline-danger">Apagar</Button>
//       </ButtonGroup>
//     </Col>

//     {/* RIGHT COLUMN */}
//     {/* With Book Title, Author, DetailsTable, Buttons and Sinopse */}
//     <Col>
//       {/* FIRST R-ROW */}
//       {/* With Book Title and Author */}
//       <Row>
//         <Col>
//           <h1>{item.title}</h1>
//         </Col>
//       </Row>

//       {/* SECOND R-ROW */}
//       {/* With DetailsTable */}
//       <Row className="my-4">
//         <Col>Nothing to display</Col>
//       </Row>
//     </Col>
//   </Row>
// );
