import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import BrandHeader from "../../nav/BrandHeader";
import auth from "../../../services/authService";
import LogoutSuccessCard from "./LogoutSuccessCard";
import LogoutErrorCard from "./LogoutErrorCard";

class Logout extends Component {
  state = { userName: "" };

  componentDidMount() {
    const name = auth.getUserName();
    this.setState({ userName: name });
  }

  render() {
    const { userName } = this.state;
    return (
      <React.Fragment>
        <BrandHeader userButton={false} />
        <Row className="mt-4">
          <Col />
          <Col>
            {!userName && <LogoutSuccessCard />}
            {userName && <LogoutErrorCard userName={userName} />}
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Logout;
