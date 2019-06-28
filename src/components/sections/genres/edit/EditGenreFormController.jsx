import React from "react";
import Joi from "joi-browser";
import EditItem from "../../../common/forms/EditItem";
import genresService from "../../../../services/genresService";

import Button from "../../../common/inputs/Button";

class EditGenreFormController extends EditItem {
  state = {
    type: "genre",
    data: {
      coverURL: "",
      title: "",
      description: ""
    },
    schema: {
      coverURL: Joi.string()
        .max(255)
        .label("CoverURL"),
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

  getData() {
    return genresService.getByID(this.props.id);
  }

  sendData() {
    return genresService.put(this.props.id, this.state.data);
  }

  deleteData() {
    return genresService.deleteByID(this.props.id);
  }

  renderForm() {
    return (
      <React.Fragment>
        <form onSubmit={this.prepareFormSubmission}>
          {this.renderInput("title", "Title")}
          {this.renderTextarea("description", "Description")}
          <Button label="Update Genre" block={true} />
        </form>
        <Button
          label="Delete Genre"
          variant="danger"
          block={true}
          onClick={() => this.handleDelete()}
        />
      </React.Fragment>
    );
  }
}

export default EditGenreFormController;
