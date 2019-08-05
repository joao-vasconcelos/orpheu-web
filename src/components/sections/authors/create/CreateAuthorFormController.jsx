import React from "react";
import Joi from "joi-browser";
import parser from "../../../../utils/parser";
import CreateItem from "../../../common/forms/CreateItem";
import authorsService from "../../../../services/authorsService";

class CreateAuthorFormController extends CreateItem {
  state = {
    type: "author",
    data: {
      picture: null,
      name: "",
      nationality: "",
      birthdate: "",
      deathdate: "",
      biography: ""
    },
    schema: {
      picture: Joi.any()
        .not(null)
        .label("Author Picture"),
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
    validationErrors: {}
  };

  sendData() {
    const data = parser.parseDataForMultipart(this.state.data, ["picture"]);
    return authorsService.post(data);
  }

  renderForm() {
    return (
      <React.Fragment>
        <form onSubmit={this.prepareFormSubmission}>
          {this.renderFilePicker("picture", "Author Picture")}
          {this.renderTextInput("name", "Author's Name")}
          {this.renderTextInput("nationality", "Author's Nationality")}
          {this.renderDatePicker("birthdate", "Author's Birth date")}
          {this.renderDatePicker("deathdate", "Author's Death date")}
          {this.renderTextarea("biography", "Author's Biography")}
          {this.renderButton("Create Author", true, "primary", null)}
        </form>
      </React.Fragment>
    );
  }
}

export default CreateAuthorFormController;
