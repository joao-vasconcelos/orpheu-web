import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import SimpleTable from "../../../common/display/SimpleTable";
import EditThisToolbar from "../../../nav/EditThisToolbar";

const AuthorDetails = ({ item }) => {
  return (
    <React.Fragment>
      <EditThisToolbar type="author" link={"/authors/edit/" + item._id} />
      <Row className="pt-3 my-3">
        <Col md={5} className="text-center">
          <Image rounded className="w-100 mb-4" src={item.pictureURL} />
        </Col>
        <Col>
          <Row>
            <Col>
              <h1>{item.name}</h1>
            </Col>
          </Row>
          <Row className="my-4">
            <Col>
              <SimpleTable
                items={[
                  { title: "Nationality", content: item.nationality },
                  { title: "Birthdate", content: item.birthdate },
                  item.deathdate && {
                    title: "Deathdate",
                    content: item.deathdate
                  }
                ]}
              />
            </Col>
          </Row>

          {/* Biography */}
          {item.biography && (
            <Row className="my-5 py-3">
              <Col>
                <h6>Biography</h6>
                <hr />
                <p>{item.biography}</p>
                <hr />
              </Col>
            </Row>
          )}
        </Col>
      </Row>

      {/* Books by this author */}
      <Row className="my-5 py-3">
        <Col>
          <h4 className="text-center">Books by this author</h4>
          <hr />
          <h6 className="text-center text-secondary">Comming Soon...</h6>
          <hr />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default AuthorDetails;
