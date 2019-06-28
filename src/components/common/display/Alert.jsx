import React from "react";

const Alert = ({ variant = "primary", data }) => {
  return <div className={`alert alert-${variant} rounded-5`}>{data}</div>;
};

export default Alert;
