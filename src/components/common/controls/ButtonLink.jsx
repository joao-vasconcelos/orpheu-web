import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";

const ButtonLink = ({ label, link, variant, size, width }) => {
  return (
    <LinkContainer to={link}>
      <Button variant={variant} size={size} className={width}>
        {label}
      </Button>
    </LinkContainer>
  );
};

export default ButtonLink;
