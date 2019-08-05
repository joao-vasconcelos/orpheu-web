/* * */
/* * */
/* * * * * */
/* INPUT FIELD */
/* * */

//
//
//
//
//

import React from "react";

const Input = ({ name, label, onChange, error }) => {
  return (
    <div className="my-3">
      <label htmlFor={name} className="m-1">
        {label}
      </label>
      <br />
      <input name={name} type="file" onChange={onChange} />
      {error && (
        <div className="text-danger mt-2" style={{ fontSize: 15 }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
