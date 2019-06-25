import React from "react";
import Joi from "joi-browser";
import _ from "lodash";
import Form from "../../../common/forms/Form";
import authorsService from "../../../../services/authorsService";

class EditAuthorFormController extends Form {
  state = {
    data: {
      name: "",
      nationality: "",
      birthdate: "",
      deathdate: "",
      biography: ""
    },
    validationErrors: {},
    error: null,
    success: null
  };

  schema = {
    name: Joi.string()
      .min(2)
      .max(50)
      .required()
      .label("Name"),
    nationality: Joi.string()
      .min(2)
      .max(25)
      .required()
      .label("Nationality"),
    birthdate: Joi.date()
      .max("now")
      .iso()
      .required()
      .label("Birth date"),
    deathdate: Joi.date()
      .max("now")
      .iso()
      .label("Death date"),
    biography: Joi.string()
      .max(1000)
      .label("Biography")
  };

  async componentDidMount() {
    try {
      const response = await authorsService.getByID(this.props.id);
      this.setState({
        data: _.merge(this.state.data, _.omit(response.data, ["_id", "__v"]))
      });
    } catch (err) {
      console.log(err);
      this.setState({ error: err.response.data });
    }
  }

  async doSubmit() {
    try {
      const response = await authorsService.put(this.props.id, this.state.data);
      this.setState({
        success: `Author "${response.data.name}" has been updated!`
      });
      //   window.location = response.data._id;
    } catch (err) {
      console.log(err);
      this.setState({ error: err.response.data });
    }
  }

  render() {
    const { error, success } = this.state;
    return (
      <React.Fragment>
        {error && (
          <div className="alert alert-danger rounded-4">{this.state.error}</div>
        )}
        {success && !error && (
          <div className="alert alert-success rounded-4">
            {this.state.success}
          </div>
        )}
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Author's Name")}
          {this.renderInput("nationality", "Author's Nationality")}
          {this.renderInput("birthdate", "Author's Birth date", "", "date")}
          {this.renderInput("deathdate", "Author's Death date", "", "date")}
          {this.renderTextarea("biography", "Author's Biography")}
          <button className="btn btn-lg btn-primary btn-block mt-3">
            Update Author
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default EditAuthorFormController;
