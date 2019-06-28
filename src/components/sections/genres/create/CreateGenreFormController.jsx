import React from "react";
import CreateItem from "../../../common/forms/CreateItem";
import Joi from "joi-browser";
import genresService from "../../../../services/genresService";
import Button from "../../../common/inputs/Button";

class CreateGenreFormController extends CreateItem {
  state = {
    type: "genre",
    data: {
      coverURL: "https://picsum.photos/100/100",
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

  sendData() {
    return genresService.post(this.state.data);
  }

  renderForm() {
    return (
      <React.Fragment>
        <form onSubmit={this.prepareFormSubmission}>
          {this.renderInput("title", "Title")}
          {this.renderTextarea("description", "Description")}
          <Button label="Create Genre" block={true} />
        </form>
      </React.Fragment>
    );
  }
}

export default CreateGenreFormController;
