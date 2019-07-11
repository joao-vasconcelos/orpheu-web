/* * */
/* * */
/* * * * * */
/* CREATE ITEM */
/* * */

import React from "react";
import Form from "./Form";
import logger from "../../../utils/logger";
import Alert from "../display/Alert";

class CreateItem extends Form {
  state = {
    type: "",
    data: {},
    schema: {},
    validationErrors: {},
    error: null,
    success: null
  };

  /*
   * func: SUBMIT FORM
   * Does the form submission.
   */
  async submitForm() {
    try {
      await this.sendData();
      this.setState({
        success: `This ${this.state.type} has been successfully created!`
      });
    } catch (err) {
      logger.log("Error at submitForm() in CreateItem", err);
      this.setState({ error: err.response.data });
    }
  }

  /*
   * func: RENDER Method
   * Renders the UI.
   * Pre-set with error and success alerts.
   * Checks if there is additional UI to render.
   */
  render() {
    const { error, success } = this.state;
    return (
      <React.Fragment>
        {error && <Alert variant="danger" data={this.state.error} />}
        {success && !error && (
          <Alert variant="success" data={this.state.success} />
        )}
        <React.Fragment>{this.renderForm()}</React.Fragment>
      </React.Fragment>
    );
  }
}

export default CreateItem;
