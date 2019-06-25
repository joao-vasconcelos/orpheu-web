import React from "react";

import Button from "react-bootstrap/Button";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { LinkContainer } from "react-router-bootstrap";
import genresService from "../../../../services/genresService";

class GenreCardActionsController extends React.Component {
  async handleDelete() {
    try {
      const response = await genresService.deleteByID(this.props.id);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Dropdown as={ButtonGroup}>
          <LinkContainer to={"/genres/" + this.props.id}>
            <Button variant="outline-primary" size="sm">
              View Genre
            </Button>
          </LinkContainer>

          <Dropdown.Toggle
            split
            variant="outline-primary"
            size="sm"
            id="dropdown-split-basic"
          />

          <Dropdown.Menu>
            <Dropdown.Item className="text-warning">
              Guardar como Favorito
            </Dropdown.Item>

            <LinkContainer to={"/genres/report/" + this.props.id}>
              <Dropdown.Item>Reportar um Problema</Dropdown.Item>
            </LinkContainer>

            <LinkContainer to={"/genres/edit/" + this.props.id}>
              <Dropdown.Item>Editar</Dropdown.Item>
            </LinkContainer>

            <Dropdown.Divider />

            <LinkContainer to={"/genres/delete/" + this.props.id}>
              <Dropdown.Item className="text-danger">Delete</Dropdown.Item>
            </LinkContainer>
          </Dropdown.Menu>
        </Dropdown>
      </React.Fragment>
    );
  }
}

export default GenreCardActionsController;
