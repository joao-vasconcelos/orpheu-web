import React from "react";
import Joi from "joi-browser";
import Form from "../../common/forms/Form";
import authService from "../../../services/authService";

class LoginFormController extends Form {
  state = {
    data: { email: "email@domain.com", password: "12345" },
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
      .label("Password")
  };

  async doSubmit() {
    const { email, password } = this.state.data;
    try {
      const response = await authService.login(email, password);
      authService.saveAuthToken(response.headers["x-auth-token"]);
      window.location = "/";
    } catch (err) {
      this.setState({ error: err.response.data });
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
          <button className="btn btn-lg btn-primary btn-block mt-3">
            Login
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginFormController;
