import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loading = ({ label }) => {
  return (
    <div className="d-flex justify-content-center m-4 p-4">
      <Spinner animation="border" variant="primary" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
      {label && <p className="ml-3 mt-2">{label}</p>}
    </div>
  );
};

export default Loading;
