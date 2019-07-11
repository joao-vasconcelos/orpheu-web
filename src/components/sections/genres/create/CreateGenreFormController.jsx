import React from "react";
import Joi from "joi-browser";
import CreateItem from "../../../common/forms/CreateItem";
import genresService from "../../../../services/genresService";

class CreateGenreFormController extends CreateItem {
  state = {
    type: "genre",
    data: {
      coverImage: null,
      title: "",
      description: ""
    },
    schema: {
      coverImage: Joi.any(),
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
    validationErrors: {},
    error: null,
    success: null
  };

  getFormData() {
    const formData = new FormData();
    formData.append("coverImage", this.state.data.coverImage);
    formData.append("title", this.state.data.title);
    formData.append("description", this.state.data.description);
    return formData;
  }

  sendData() {
    const data = this.getFormData();
    return genresService.post(data);
  }

  renderForm() {
    return (
      <form onSubmit={this.prepareFormSubmission}>
        {this.renderFilePicker("coverImage", "Cover Image")}
        {this.renderTextInput("title", "Title")}
        {this.renderTextarea("description", "Description")}
        {this.renderSubmitButton("Create Genre", true)}
      </form>
    );
  }
}

export default CreateGenreFormController;
