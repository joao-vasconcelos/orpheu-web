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

const Input = ({ name, label, onChange }) => {
  return (
    <div className="my-3">
      <label htmlFor={name} className="m-1">
        {label}
      </label>
      <br />
      <input name={name} type="file" onChange={onChange} />
    </div>
  );
};

export default Input;
