import React from "react";
import CreateItem from "../../../common/forms/CreateItem";
import Joi from "joi-browser";
import authorsService from "../../../../services/authorsService";
import Button from "../../../common/inputs/Button";

class CreateAuthorFormController extends CreateItem {
  state = {
    type: "author",
    data: {
      name: "",
      nationality: "",
      birthdate: "",
      deathdate: "",
      biography: ""
    },
    schema: {
      coverURL: Joi.string()
        .max(255)
        .label("CoverURL"),
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
    },
    validationErrors: {},
    error: null,
    success: null
  };

  sendData() {
    return authorsService.post(this.state.data);
  }

  renderForm() {
    return (
      <React.Fragment>
        <form onSubmit={this.prepareFormSubmission}>
          {this.renderInput("name", "Author's Name")}
          {this.renderInput("nationality", "Author's Nationality")}
          {this.renderInput("birthdate", "Author's Birth date", "", "date")}
          {this.renderInput("deathdate", "Author's Death date", "", "date")}
          {this.renderTextarea("biography", "Author's Biography")}
          <Button label="Create Author" block={true} />
        </form>
      </React.Fragment>
    );
  }
}

export default CreateAuthorFormController;
