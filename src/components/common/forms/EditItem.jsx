/* * */
/* * */
/* * * * * */
/* EDIT ITEM */
/* * */

import React from "react";
import _ from "lodash";
import Form from "./Form";

import logger from "../../../utils/logger";

import Alert from "../display/Alert";

class EditItem extends Form {
  state = {
    type: "",
    data: {},
    schema: {},
    validationErrors: {},
    error: null,
    success: null
  };

  /*
   * func: COMPONENT DID MOUNT
   * Populates the form at component mount time
   * with existing data from the server.
   */
  async componentDidMount() {
    try {
      const response = await this.getData();
      this.setState({
        // Removes hidden (default) fields that should not be validated.
        data: _.merge(this.state.data, _.omit(response.data, ["_id", "__v"]))
      });
    } catch (err) {
      logger.log("Error at componentDidMount() in EditItem", err);
      this.setState({ error: err.response.data });
    }
  }

  /*
   * func: SUBMIT FORM
   * Does the form submission.
   */
  async submitForm() {
    try {
      await this.sendData();
      this.setState({
        success: `This ${this.state.type} has been successfully updated!`
      });
    } catch (err) {
      logger.log("Error at submitForm() in EditItem", err);
      this.setState({ error: err.response.data });
    }
  }

  /*
   * func: HANDLE ITEM DELETION
   * Deletes the item from the database.
   */
  async handleDelete() {
    try {
      await this.deleteData();
      this.setState({
        success: `This ${this.state.type} has been deleted!`
      });
    } catch (err) {
      logger.log("Error at handleDelete() in EditItem", err);
      //   this.setState({ error: err.response.data });
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
        {this.renderForm()}
      </React.Fragment>
    );
  }
}

export default EditItem;
