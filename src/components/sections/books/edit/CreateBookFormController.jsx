import React from "react";
import Joi from "joi-browser";
import _ from "lodash";
import Form from "../../../common/forms/Form";
import booksService from "../../../../services/booksService";
import authorsService from "../../../../services/authorsService";

class CreateBookFormController extends Form {
  state = {
    data: { title: "", authors: [] },
    authors: [],
    validationErrors: {},
    error: null
  };

  schema = {
    title: Joi.string()
      .required()
      .label("Title"),
    authors: Joi.array()
      .min(1)
      .required()
      .label("Authors")
  };

  async componentDidMount() {
    try {
      const response = await authorsService.get();
      this.setState({
        authors: _.map(response.data, item => _.pick(item, ["_id", "name"]))
      });
    } catch (err) {
      this.setState({ error: err.response.data });
      //   console.error(err.response.data);
    }
  }

  async doSubmit() {
    try {
      const response = await booksService.create(this.state.data);
      console.log(response);
    } catch (err) {
      this.setState({ error: err.response.data });
      //   console.error(err.response.data);
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.state.error && (
          <div className="alert alert-danger rounded-4">{this.state.error}</div>
        )}
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderMultiselect("authors", "Authors", this.state.authors)}
          <button className="btn btn-lg btn-primary btn-block mt-3">
            Create Book
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default CreateBookFormController;
