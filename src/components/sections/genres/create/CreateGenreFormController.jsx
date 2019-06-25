import React from "react";
import Joi from "joi-browser";
import Form from "../../../common/forms/Form";
import genresService from "../../../services/genresService";

class CreateGenreFormController extends Form {
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
      .allow("")
      .label("Death date"),
    biography: Joi.string()
      .max(1000)
      .allow("")
      .label("Biography")
  };

  async doSubmit() {
    try {
      const response = await authorsService.post(this.state.data);
      this.setState({
        success: `Author "${response.data.name}" has been created!`
      });
      // window.location = response.data._id;
    } catch (err) {
      console.log(err);
      this.setState({ error: err.response.data });
    }
  }

  render() {
    const { error, success } = this.state;
    return (
      <React.Fragment>
        {error && <div className="alert alert-danger rounded-4">{error}</div>}
        {success && !error && (
          <div className="alert alert-success rounded-4">{success}</div>
        )}
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Author's Name")}
          {this.renderInput("nationality", "Author's Nationality")}
          {this.renderInput("birthdate", "Author's Birth date", "", "date")}
          {this.renderInput("deathdate", "Author's Death date", "", "date")}
          {this.renderTextarea("biography", "Author's Biography")}
          <button className="btn btn-lg btn-primary btn-block mt-3">
            Create Genre
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default CreateGenreFormController;
