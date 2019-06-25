import React from "react";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { LinkContainer } from "react-router-bootstrap";
import booksService from "../../../../services/booksService";

class BookCardActionsController extends React.Component {
  state = { bookID: "" };

  componentDidMount() {
    this.setState({ bookID: this.props.id });
  }

  handleDelete(id) {
    console.log("State: ", id);
    try {
      console.log("State: ", this.state.bookID);
      booksService.deleteByID(this.state.bookID);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { bookID } = this.state;

    return (
      <Dropdown as={ButtonGroup}>
        <LinkContainer to={"/books/" + bookID}>
          <Button variant="outline-primary">Ver Livro</Button>
        </LinkContainer>

        <Dropdown.Toggle
          split
          variant="outline-primary"
          id="dropdown-split-basic"
        />

        <Dropdown.Menu>
          <Dropdown.Item className="text-warning">
            Guardar como Favorito
          </Dropdown.Item>

          <LinkContainer to={"/report/" + bookID}>
            <Dropdown.Item>Reportar um Problema</Dropdown.Item>
          </LinkContainer>

          <LinkContainer to={"/books/edit/" + bookID}>
            <Dropdown.Item>Editar</Dropdown.Item>
          </LinkContainer>

          <Dropdown.Divider />

          <Dropdown.Item
            className="text-danger"
            onClick={() => this.handleDelete(bookID)}
          >
            Delete
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default BookCardActionsController;
