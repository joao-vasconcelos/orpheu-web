import React from "react";
import { Component } from "react";

import genresService from "../../services/genresService";

import BrandHeader from "./BrandHeader";
import GenresNav from "./GenresNav";

//
// NAVIGATION

class Navigation extends Component {
  state = {
    genres: []
  };

  async componentDidMount() {
    const { data } = await genresService.get();
    this.setState({ genres: data });
  }

  render() {
    return (
      <header>
        <BrandHeader userButton={true} />
        <hr />
        <GenresNav genres={this.state.genres} />
        <hr />
      </header>
    );
  }
}

export default Navigation;
