import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Image, Row, Col } from "react-bootstrap";
import SimpleTable from "../../../common/display/SimpleTable";
import EditThisToolbar from "../../../nav/EditThisToolbar";

const BookDetails = ({ book }) => {
  return (
    <React.Fragment>
      <EditThisToolbar type="book" link={"/books/edit/" + book._id} />
      <Row>
        {/* LEFT COLUMN */}
        {/* With Book Cover Image */}
        <Col md={5} className="text-center">
          <Image rounded className="w-100 mb-4" src={book.pictureURL} />
        </Col>

        {/* RIGHT COLUMN */}
        {/* With Book Title, Author, DetailsTable, Buttons and Sinopse */}
        <Col>
          {/* FIRST R-ROW */}
          {/* With Book Title and Author */}
          <Row>
            <Col>
              <div className="pl-2">
                <h1 className="mb-4">{book.title}</h1>
                {book.authors.map(author => (
                  <Link key={author._id} to={"/authors/" + author._id}>
                    <h4>{author.name}</h4>
                  </Link>
                ))}
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="mt-3">
              <div className="pl-2">
                {book.genres.map(genre => (
                  <Link
                    className="d-inline-block mr-3 text-secondary"
                    key={genre._id}
                    to={"/genres/" + genre._id}
                  >
                    <h6>{genre.title}</h6>
                  </Link>
                ))}
              </div>
            </Col>
          </Row>

          {/* SECOND R-ROW */}
          {/* With DetailsTable */}
          <Row className="my-4">
            <Col>
              <SimpleTable
                items={[
                  { title: "Language", content: book.language },
                  { title: "Publisher", content: book.publisher },
                  { title: "Edition", content: book.edition },
                  { title: "Year", content: book.year },
                  { title: "Cover Type", content: book.coverType },
                  { title: "Pages", content: book.pages },
                  { title: "Dimensions", content: book.dimensions },
                  { title: "Condition", content: book.condition }
                ]}
              />
            </Col>
          </Row>

          {/* THIRD R-ROW */}
          {/* With action Buttons */}
          <Row className="mt-5 mb-5">
            <Col>
              <Button block className="btn-lg">
                Buy for {book.price} €
              </Button>
            </Col>
          </Row>

          {/* FOURTH R-ROW */}
          {/* With Sinopse */}
          <Row className="my-5 py-3">
            <Col>
              <h6>Sinopse</h6>
              <hr />
              <p>{book.sinopse}</p>
              <hr />
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BookDetails;
