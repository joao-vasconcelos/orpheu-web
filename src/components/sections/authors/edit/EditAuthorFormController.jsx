import React from "react";
import Joi from "joi-browser";
import parser from "../../../../utils/parser";
import EditItem from "../../../common/forms/EditItem";
import authorsService from "../../../../services/authorsService";

class EditAuthorFormController extends EditItem {
  state = {
    type: "author",
    data: {
      picture: null,
      pictureURL: "",
      name: "",
      nationality: "",
      birthdate: "",
      deathdate: "",
      biography: ""
    },
    schema: {
      picture: Joi.any().label("Cover Picture"),
      pictureURL: Joi.string()
        .max(255)
        .label("Picture URL"),
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

  getData() {
    return authorsService.getByID(this.props.id);
  }

  sendData() {
    const data = parser.parseDataForMultipart(
      this.state.data,
      ["picture"],
      ["pictureURL"]
    );

    return authorsService.put(this.props.id, data);
  }

  deleteData() {
    return authorsService.deleteByID(this.props.id);
  }

  renderForm() {
    return (
      <React.Fragment>
        <form onSubmit={this.prepareFormSubmission}>
          {this.renderFilePicker("picture", "Cover Picture")}
          {this.renderTextInput("name", "Author's Name")}
          {this.renderTextInput("nationality", "Author's Nationality")}
          {this.renderTextInput("birthdate", "Author's Birth date", "", "date")}
          {this.renderTextInput("deathdate", "Author's Death date", "", "date")}
          {this.renderTextarea("biography", "Author's Biography")}
          {this.renderButton("Update Author", true, "primary", null)}
        </form>
        {this.renderButton("Delete Author", true, "danger", () =>
          this.handleDelete()
        )}
      </React.Fragment>
    );
  }
}

export default EditAuthorFormController;
