/* * */
/* * */
/* * * * * */
/* "EDIT THIS" TOOLBAR */
/* * */

import React from "react";
import { LinkContainer } from "react-router-bootstrap";

const EditThisToolbar = ({ type, link }) => {
  return (
    <div className="row my-5">
      <div className="col">
        <LinkContainer to={link}>
          <button className="btn btn-light btn-sm">Edit this {type}</button>
        </LinkContainer>
      </div>
    </div>
  );
};

export default EditThisToolbar;
