/* * */
/* * */
/* * * * * */
/* CREATE ITEM */
/* * */

import React from "react";
import Form from "./Form";
import logger from "../../../utils/logger";
import Alert from "../display/Alert";
import Loading from "../display/Loading";

class CreateItem extends Form {
  state = {
    type: "",
    data: {},
    schema: {},
    validationErrors: {},
    loading: false,
    error: null,
    success: null
  };

  /*
   * func: SUBMIT FORM
   * Does the form submission.
   */
  async submitForm() {
    try {
      this.setState({ loading: true });
      await this.sendData();
      this.setState({
        loading: false,
        success: `This ${this.state.type} has been successfully created!`
      });
    } catch (err) {
      logger.log("Error at submitForm() in CreateItem", err);
      this.setState({ loading: false, error: err.response.data });
    }
  }

  /*
   * func: RENDER Method
   * Renders the UI.
   * Pre-set with error and success alerts.
   * Checks if there is additional UI to render.
   */
  render() {
    const { loading, error, success } = this.state;
    return (
      <React.Fragment>
        {loading && <Loading label="Please wait..." />}
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
