/* * */
/* * */
/* * * * * */
/* FORM */
/* * */

import React from "react";
import validation from "../../../utils/validation";

import Input from "../inputs/Input";
import Textarea from "../inputs/Textarea";
import Select from "../inputs/Select";
import Multiselect from "../inputs/Multiselect";
import logger from "../../../utils/logger";

class Form extends React.Component {
  state = {
    data: {},
    schema: {},
    validationErrors: {},
    error: null,
    success: null
  };

  /*
   * func: HANDLE INPUT CHANGE
   * Saves input data into this.state.
   * Validates input data as soon as it changes.
   * Sets validationErrors for UI display in case of error.
   * Resets error and success messages.
   */
  handleInputChange = ({ currentTarget: input }) => {
    const validationErrors = { ...this.state.validationErrors };
    const errorMessage = validation.validateInput(input, this.state.schema);
    if (errorMessage) {
      validationErrors[input.name] = errorMessage;
    } else {
      delete validationErrors[input.name];
    }

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, validationErrors, error: null, success: null });
  };

  /*
   * func: PREPARE FORM SUBMISSION
   * Initiates the validation dance.
   * Sends form to submission if everything is OK.
   */
  prepareFormSubmission = e => {
    // prevent default behaviour
    e.preventDefault();

    // check validation before submission
    const result = validation.validateData(this.state.data, this.state.schema);
    this.setState({ validationErrors: result || {} });
    logger.log("Validation Errors", result);

    // only submit if there are no validation errors
    if (result) return;
    else this.submitForm();
  };

  /*
   * func: RENDER INPUT
   * Initiates the validation dance.
   * Sends form to submission if everything is OK.
   */
  renderInput(name, label, autoComplete = "", type = "text") {
    return (
      <Input
        name={name}
        label={label}
        placeholder={label}
        type={type}
        autoComplete={autoComplete}
        value={this.state.data[name]}
        onChange={this.handleInputChange}
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
        onChange={this.handleInputChange}
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
        onChange={this.handleInputChange}
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
        onChange={this.handleInputChange}
        error={this.state.validationErrors[name]}
      />
    );
  }
}

export default Form;
