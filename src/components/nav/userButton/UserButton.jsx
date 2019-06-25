import React, { Component } from "react";
import authService from "../../../services/authService";

import LoggedInUserButton from "./LoggedInUserButton";
import LoggedOutUserButton from "./LoggedOutUserButton";

//
// USER BUTTON

class UserButton extends Component {
  state = {
    userName: ""
  };

  componentDidMount() {
    const name = authService.getUserName();
    this.setState({ userName: name });
  }

  render() {
    const { userName } = this.state;
    return (
      <React.Fragment>
        {!userName && <LoggedOutUserButton />}
        {userName && <LoggedInUserButton userName={userName} />}
      </React.Fragment>
    );
  }
}

export default UserButton;
