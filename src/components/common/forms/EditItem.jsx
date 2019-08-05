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
import Loading from "../display/Loading";

class EditItem extends Form {
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
   * func: COMPONENT DID MOUNT
   * Populates the form before component mount time
   * with existing data from the server.
   */
  async componentWillMount() {
    try {
      this.setState({ loading: true });
      const response = await this.getData();
      this.setState({
        // Removes hidden (default) fields that should not be validated.
        data: _.merge(this.state.data, _.omit(response.data, ["_id", "__v"])),
        loading: false
      });
    } catch (err) {
      logger.log("Error at componentDidMount() in EditItem", err);
      this.setState({ loading: false, error: err.response.data });
    }
  }

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
        success: `This ${this.state.type} has been successfully updated!`
      });
    } catch (err) {
      logger.log("Error at submitForm() in EditItem", err);
      this.setState({ loading: false, error: err.response.data });
    }
  }

  /*
   * func: HANDLE ITEM DELETION
   * Deletes the item from the database.
   */
  async handleDelete() {
    try {
      this.setState({ loading: true });
      await this.deleteData();
      this.setState({
        loading: false,
        success: `This ${this.state.type} has been deleted!`
      });
    } catch (err) {
      logger.log("Error at handleDelete() in EditItem", err);
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
        {this.renderForm()}
      </React.Fragment>
    );
  }
}

export default EditItem;
