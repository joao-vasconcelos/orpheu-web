/* * */
/* * */
/* * * * * */
/* FORM */
/* * */

import React from "react";
import Joi from "joi-browser";
import Input from "./Input";
import Textarea from "./Textarea";
import Select from "./Select";
import Multiselect from "./Multiselect";

class Form extends React.Component {
  state = {
    data: {},
    validationErrors: {},
    error: null,
    success: null
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const validationErrors = {};
    for (let item of error.details) {
      validationErrors[item.path[0]] = item.message;
    }
    return validationErrors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const subSchema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, subSchema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = e => {
    e.preventDefault();

    // Submit only if there are no validation errors
    const validationErrors = this.validate();
    this.setState({ validationErrors: validationErrors || {} });
    console.log("ValidationErrors: ", validationErrors);
    if (validationErrors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const validationErrors = { ...this.state.validationErrors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) {
      validationErrors[input.name] = errorMessage;
    } else {
      delete validationErrors[input.name];
    }

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, validationErrors, error: null, success: null });
  };

  renderInput(name, label, autoComplete = "", type = "text") {
    return (
      <Input
        name={name}
        label={label}
        placeholder={label}
        type={type}
        autoComplete={autoComplete}
        value={this.state.data[name]}
        onChange={this.handleChange}
        error={this.state.validationErrors[name]}
      />
    );
  }

  renderTextarea(name, label, rows = 5) {
    return (
      <Textarea
        name={name}
        label={label}
        placeholder={label}
        rows={rows}
        value={this.state.data[name]}
        onChange={this.handleChange}
        error={this.state.validationErrors[name]}
      />
    );
  }

  renderSelect(name, label, options) {
    return (
      <Select
        name={name}
        value={this.state.data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={this.state.validationErrors[name]}
      />
    );
  }

  renderMultiselect(name, label, options) {
    return (
      <Multiselect
        name={name}
        value={this.state.data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={this.state.validationErrors[name]}
      />
    );
  }
}

export default Form;
