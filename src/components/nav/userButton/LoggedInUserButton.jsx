import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import authService from "../../../services/authService";

//
// NAVIGATION

const LoggedInUserButton = ({ userName }) => {
  return (
    <DropdownButton variant="light" title={userName}>
      <LinkContainer to="/profile">
        <Dropdown.Item>Profile</Dropdown.Item>
      </LinkContainer>
      <LinkContainer to="/wishlist">
        <Dropdown.Item>Wishlist</Dropdown.Item>
      </LinkContainer>
      <LinkContainer to="/orders">
        <Dropdown.Item>Order History</Dropdown.Item>
      </LinkContainer>
      <Dropdown.Divider />
      <Dropdown.Item
        className="text-danger"
        onClick={() => {
          authService.logout();
          window.location = "/logout";
        }}
      >
        Logout
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default LoggedInUserButton;
