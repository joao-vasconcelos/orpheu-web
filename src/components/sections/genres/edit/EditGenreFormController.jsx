import React from "react";
import Joi from "joi-browser";
import parser from "../../../../utils/parser";
import EditItem from "../../../common/forms/EditItem";
import genresService from "../../../../services/genresService";

class EditGenreFormController extends EditItem {
  state = {
    type: "genre",
    data: {
      picture: null,
      pictureURL: "",
      title: "",
      description: ""
    },
    schema: {
      picture: Joi.any().label("Cover Picture"),
      pictureURL: Joi.string()
        .max(255)
        .label("Picture URL"),
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

  getData() {
    return genresService.getByID(this.props.id);
  }

  sendData() {
    const data = parser.parseDataForMultipart(
      this.state.data,
      ["picture"],
      ["pictureURL"]
    );

    return genresService.put(this.props.id, data);
  }

  deleteData() {
    return genresService.deleteByID(this.props.id);
  }

  renderForm() {
    return (
      <React.Fragment>
        <form onSubmit={this.prepareFormSubmission}>
          {this.renderFilePicker("picture", "Cover Picture")}
          {this.renderTextInput("title", "Title")}
          {this.renderTextarea("description", "Description")}
          {this.renderButton("Update Genre", true)}
        </form>
        {this.renderButton("Delete Genre", true, "danger", () =>
          this.handleDelete()
        )}
      </React.Fragment>
    );
  }
}

export default EditGenreFormController;
