import React from "react";
import { LinkContainer } from "react-router-bootstrap";

class Button extends React.Component {
  state = {
    label: "",
    link: "",
    variant: "primary",
    size: "lg",
    block: false,
    onClick: null
  };

  componentWillMount() {
    this.setState(this.props);
    if (!this.props.variant) this.setState({ variant: "primary" });
    if (this.props.block) this.setState({ block: "block" });
  }

  render() {
    const { label, link, variant, size, block, onClick } = this.state;

    const button = (
      <button
        className={`btn btn-${variant} btn-${size} btn-${block} mt-3`}
        onClick={onClick}
      >
        {label}
      </button>
    );

    if (link !== "")
      return <LinkContainer to={this.state.link}>{button}</LinkContainer>;
    else return button;
  }
}

export default Button;
