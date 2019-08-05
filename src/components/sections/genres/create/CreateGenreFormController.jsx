import React from "react";
import Joi from "joi-browser";
import parser from "../../../../utils/parser";
import CreateItem from "../../../common/forms/CreateItem";
import genresService from "../../../../services/genresService";

class CreateGenreFormController extends CreateItem {
  state = {
    type: "genre",
    data: {
      picture: null,
      title: "",
      description: ""
    },
    schema: {
      picture: Joi.any()
        .not(null)
        .label("Cover Picture"),
      title: Joi.string()
        .min(2)
        .max(15)
        .required()
        .label("Title"),
      description: Joi.string()
        .max(1500)
        .allow("")
        .label("Description")
    },
    validationErrors: {}
  };

  sendData() {
    const data = parser.parseDataForMultipart(this.state.data, ["picture"]);
    return genresService.post(data);
  }

  renderForm() {
    return (
      <form onSubmit={this.prepareFormSubmission}>
        {this.renderFilePicker("picture", "Cover Picture")}
        {this.renderTextInput("title", "Title")}
        {this.renderTextarea("description", "Description")}
        {this.renderButton("Create Genre", true, "primary", null)}
      </form>
    );
  }
}

export default CreateGenreFormController;
