/*        ___           ___           ___         ___           ___           ___
 *       /  /\         /  /\         /  /\       /__/\         /  /\         /__/\
 *      /  /::\       /  /::\       /  /::\      \  \:\       /  /:/_        \  \:\
 *     /  /:/\:\     /  /:/\:\     /  /:/\:\      \__\:\     /  /:/ /\        \  \:\
 *    /  /:/  \:\   /  /:/~/:/    /  /:/~/:/  ___ /  /::\   /  /:/ /:/_   ___  \  \:\
 *   /__/:/ \__\:\ /__/:/ /:/___ /__/:/ /:/  /__/\  /:/\:\ /__/:/ /:/ /\ /__/\  \__\:\
 *   \  \:\ /  /:/ \  \:\/:::::/ \  \:\/:/   \  \:\/:/__\/ \  \:\/:/ /:/ \  \:\ /  /:/
 *    \  \:\  /:/   \  \::/~~~~   \  \::/     \  \::/       \  \::/ /:/   \  \:\  /:/
 *     \  \:\/:/     \  \:\        \  \:\      \  \:\        \  \:\/:/     \  \:\/:/
 *      \  \::/       \  \:\        \  \:\      \  \:\        \  \::/       \  \::/
 *       \__\/         \__\/         \__\/       \__\/         \__\/         \__\/
 */

/* * */
/* IMPORTS */
import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router";
import Container from "react-bootstrap/Container";

import Signup from "./components/sections/auth/signup/Signup";
import Login from "./components/sections/auth/login/Login";
import Logout from "./components/sections/auth/logout/Logout";

import Books from "./components/sections/books/Books";
import ViewBook from "./components/sections/books/view/ViewBook";
import CreateBook from "./components/sections/books/edit/CreateBook";

import Authors from "./components/sections/authors/display/DisplayAuthors";
import ViewAuthor from "./components/sections/authors/view/ViewAuthor";
import CreateAuthor from "./components/sections/authors/create/CreateAuthor";
import EditAuthor from "./components/sections/authors/edit/EditAuthor";
import DeleteAuthor from "./components/sections/authors/edit/DeleteAuthor";

import CreateGenre from "./components/sections/genres/create/CreateGenre";
import EditGenre from "./components/sections/genres/edit/EditGenre";
import ViewGenre from "./components/sections/genres/view/ViewGenre";
import DisplayGenres from "./components/sections/genres/display/DisplayGenres";

import "./App.css";
import authService from "./services/authService";
import NotFound from "./components/common/NotFound";

class App extends Component {
  state = {
    userIsLoggedIn: false
  };

  componentWillMount() {
    if (authService.userIsLoggedIn()) this.setState({ userIsLoggedIn: true });
  }

  render() {
    const { userIsLoggedIn } = this.state;
    return (
      <Container className="mb-4">
        <Switch>
          {/* UNAUTHENTICATED */}
          {!userIsLoggedIn && <Route path="/signup" component={Signup} />}
          {!userIsLoggedIn && <Route path="/login" component={Login} />}
          <Route path="/logout" component={Logout} />

          {/* AUTHENTICATED */}
          <Route path="/books/new" component={CreateBook} />
          <Route path="/books/:id" component={ViewBook} />
          <Route path="/books" component={Books} />

          <Route path="/authors/delete/:id" component={DeleteAuthor} />
          <Route path="/authors/edit/new" component={CreateAuthor} />
          <Route path="/authors/edit/:id" component={EditAuthor} />
          <Route path="/authors/:id" component={ViewAuthor} />
          <Route path="/authors" component={Authors} />

          <Route path="/genres/edit/new" component={CreateGenre} />
          <Route path="/genres/edit/:id" component={EditGenre} />
          <Route path="/genres/:id" component={ViewGenre} />
          <Route path="/genres" component={DisplayGenres} />

          {/* OTHER UTILITIES ALWAYS AVAILABLE */}
          <Route path="/not-found" component={NotFound} />
          <Redirect exact from="/" to="/books" />
          <Redirect to="/not-found" />
        </Switch>
      </Container>
    );
  }
}

export default App;
