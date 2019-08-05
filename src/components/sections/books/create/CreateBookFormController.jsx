import React from "react";
import Joi from "joi-browser";
import CreateItem from "../../../common/forms/CreateItem";
import parser from "../../../../utils/parser";
import booksService from "../../../../services/booksService";

import _ from "lodash";
import authorsService from "../../../../services/authorsService";
import genresService from "../../../../services/genresService";

class CreateBookFormController extends CreateItem {
  state = {
    type: "book",
    authors: [],
    genres: [],
    data: {
      picture: null,
      title: "Livro",
      authors: [],
      genres: [],
      language: "Pt",
      publisher: "Pub",
      edition: "23",
      year: 20,
      coverType: "Hard",
      pages: 122,
      dimensions: "23x233",
      condition: "Good",
      sinopse: "jfnd",
      price: 30,
      store: { _id: "1", name: "Nome da Loja" },
      status: { code: "1", message: "Pending..." }
    },
    schema: {
      picture: Joi.any()
        .not(null)
        .label("Book Cover Picture"),
      title: Joi.string()
        .min(2)
        .max(50)
        .required()
        .label("Book Title"),
      authors: Joi.array()
        .min(1)
        .max(10)
        .items(
          Joi.object({
            _id: Joi.string().required(),
            name: Joi.string()
              .required()
              .label("Author Name")
          }).label("Book Author")
        )
        .required()
        .label("Book Authors"),
      genres: Joi.array()
        .min(1)
        .max(10)
        .items(
          Joi.object({
            _id: Joi.string().required(),
            title: Joi.string()
              .required()
              .label("Genre Title")
          }).label("Book Genre")
        )
        .label("Book Genres"),
      language: Joi.string()
        .max(50)
        .allow("")
        .label("Language"),
      publisher: Joi.string()
        .max(255)
        .allow("")
        .label("Publisher"),
      edition: Joi.string()
        .max(255)
        .allow("")
        .label("Edition"),
      year: Joi.number()
        .max(9999)
        .label("Year"),
      coverType: Joi.string()
        .max(50)
        .allow("")
        .label("Cover Type"),
      pages: Joi.number()
        .max(1000)
        .label("Pages"),
      dimensions: Joi.string()
        .max(50)
        .allow("")
        .label("Dimensions"),
      condition: Joi.string()
        .max(50)
        .allow("")
        .label("Condition"),
      sinopse: Joi.string()
        .max(1500)
        .allow("")
        .label("Sinopse"),
      price: Joi.number()
        .max(50)
        .label("Price"),
      store: Joi.object({
        _id: Joi.string().required(),
        name: Joi.string()
          .required()
          .max(255)
          .label("Store")
      }),
      status: Joi.object({
        code: Joi.number().label("Status Code"),
        message: Joi.string()
          .max(255)
          .label("Status Message")
      }).label("Status")
    },
    validationErrors: {}
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const authors = await authorsService.get();
      const genres = await genresService.get();
      this.setState({
        loading: false,
        authors: _.map(authors.data, author => _.pick(author, ["_id", "name"])),
        genres: _.map(genres.data, genre => _.pick(genre, ["_id", "title"]))
      });
    } catch (err) {
      this.setState({ error: err.response.data });
      console.error(err.response.data);
    }
  }

  sendData() {
    const data = parser.parseDataForMultipart(this.state.data, ["picture"]);
    return booksService.post(data);
  }

  renderForm() {
    return (
      <React.Fragment>
        <form onSubmit={this.prepareFormSubmission}>
          {this.renderFilePicker("picture", "Cover Picture")}
          {this.renderTextInput("title", "Title")}
          {this.renderMultiselect("authors", "Authors", this.state.authors, {
            value: "_id",
            label: "name"
          })}
          {this.renderMultiselect("genres", "Genres", this.state.genres, {
            value: "_id",
            label: "title"
          })}
          {this.renderTextInput("language", "Language")}
          {this.renderTextInput("publisher", "Publisher")}
          {this.renderTextInput("edition", "Edition")}
          {this.renderTextInput("year", "Year")}
          {this.renderTextInput("coverType", "Cover Type")}
          {this.renderTextInput("pages", "Pages")}
          {this.renderTextInput("dimensions", "Dimensions")}
          {this.renderTextInput("condition", "Condition")}
          {this.renderTextarea("sinopse", "Sinopse")}
          {this.renderTextInput("price", "Price")}
          {/* {this.renderSelect("store", "Store")} */}
          {/* {this.renderTextInput("status", "Status")} */}
          {this.renderButton("Create Book", true, "primary", null)}
        </form>
      </React.Fragment>
    );
  }
}

export default CreateBookFormController;
