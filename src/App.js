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

import CreateBook from "./components/sections/books/create/CreateBook";
import EditBook from "./components/sections/books/edit/EditBook";
import ViewBook from "./components/sections/books/view/ViewBook";
import DisplayBooks from "./components/sections/books/display/DisplayBooks";

import CreateAuthor from "./components/sections/authors/create/CreateAuthor";
import EditAuthor from "./components/sections/authors/edit/EditAuthor";
import ViewAuthor from "./components/sections/authors/view/ViewAuthor";
import DisplayAuthors from "./components/sections/authors/display/DisplayAuthors";

import CreateGenre from "./components/sections/genres/create/CreateGenre";
import EditGenre from "./components/sections/genres/edit/EditGenre";
import ViewGenre from "./components/sections/genres/view/ViewGenre";
import DisplayGenres from "./components/sections/genres/display/DisplayGenres";

import authService from "./services/authService";
import NotFound from "./components/common/display/NotFound";

import "./App.css";
import "./styles/shadows.css";
import "./styles/animate.css";
import "./styles/grow.css";

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

          {/* Books */}
          <Route path="/books/edit/:id" component={EditBook} />
          <Route path="/books/new" component={CreateBook} />
          <Route path="/books/:id" component={ViewBook} />
          <Route path="/books" component={DisplayBooks} />

          {/* Authors */}
          <Route path="/authors/edit/:id" component={EditAuthor} />
          <Route path="/authors/new" component={CreateAuthor} />
          <Route path="/authors/:id" component={ViewAuthor} />
          <Route path="/authors" component={DisplayAuthors} />

          {/* Genres */}
          <Route path="/genres/edit/:id" component={EditGenre} />
          <Route path="/genres/new" component={CreateGenre} />
          <Route path="/genres/:id" component={ViewGenre} />
          <Route path="/genres" component={DisplayGenres} />

          {/* UTILITIES */}
          <Route path="/not-found" component={NotFound} />
          <Redirect exact from="/" to="/books" />
          <Redirect to="/not-found" />
        </Switch>
      </Container>
    );
  }
}

export default App;
