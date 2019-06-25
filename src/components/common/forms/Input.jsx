/* * */
/* * */
/* * * * * */
/* INPUT FIELD */
/* * */

import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="my-3">
      <label htmlFor={name} className="m-1">
        {label}
      </label>
      <input
        {...rest}
        name={name}
        id={name}
        className={"form-control " + name}
      />
      {error && (
        <div className="text-danger mt-2" style={{ fontSize: 15 }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
