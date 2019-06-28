import React from "react";
import Joi from "joi-browser";
import Form from "../../../common/forms/Form";
import usersService from "../../../../services/usersService";
import authService from "../../../../services/authService";

class SignupFormController extends Form {
  state = {
    data: { email: "email@domain.com", password: "12345", name: "Teste" },
    validationErrors: {},
    error: null
  };

  schema = {
    email: Joi.string()
      .required()
      .email()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
  };

  async doSubmit() {
    try {
      const response = await usersService.createNew(this.state.data);
      authService.saveAuthToken(response.headers["x-auth-token"]);
      window.location = "/welcome";
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
          {this.renderInput("email", "Email", "email", "email")}
          {this.renderInput("password", "Password", "new-password", "password")}
          {this.renderInput("name", "Name", "name")}
          <button className="btn btn-lg btn-primary btn-block mt-3">
            Create Account
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default SignupFormController;
