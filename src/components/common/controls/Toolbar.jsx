import React from "react";
import { LinkContainer } from "react-router-bootstrap";

import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

const Toolbar = ({ results, label, sortOptions = [] }) => {
  return (
    <ButtonToolbar className="my-3">
      <ButtonGroup className="mr-2">
        <DropdownButton title="Create... " variant="light" size="sm">
          <LinkContainer to="/books/new">
            <Dropdown.Item>Book</Dropdown.Item>
          </LinkContainer>
          <LinkContainer to="/authors/new">
            <Dropdown.Item>Author</Dropdown.Item>
          </LinkContainer>
          <Dropdown.Item>Genre</Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
      {sortOptions.length !== 0 && (
        <ButtonGroup className="mr-2">
          <DropdownButton title="Sort By " variant="light" size="sm">
            {sortOptions.map(option => (
              <Dropdown.Item key={option.key}>{option.label}</Dropdown.Item>
            ))}
          </DropdownButton>
        </ButtonGroup>
      )}
      <ButtonGroup>
        <Button variant="link" size="sm" disabled>
          Found {results} {label}.
        </Button>
      </ButtonGroup>
    </ButtonToolbar>
  );
};

export default Toolbar;
