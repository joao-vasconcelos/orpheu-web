import React from "react";
import Grid from "../../common/display/Grid";

import booksService from "../../../services/booksService";

import Navigation from "../../nav/Navigation";
import Loading from "../../common/display/Loading";
import Search from "../../common/inputs/Search";
import Toolbar from "../../common/inputs/Toolbar";
import BooksGrid from "./display/BooksGrid";
import ErrorDialog from "../../common/display/ErrorDialog";

class Books extends Grid {
  state = {
    data: null,
    error: null,
    searchQuery: ""
  };

  searchOptions = { keys: ["title", "author.name"] };

  async getData() {
    const { data } = await booksService.get();
    return data;
  }

  render() {
    const { data, error, searchQuery } = this.state;
    const filteredData = this.filterData();

    return (
      <React.Fragment>
        <Navigation />
        {!data && !error && <Loading />}
        {data && !error && (
          <React.Fragment>
            <Search value={searchQuery} onChange={this.handleSearch} />
            <Toolbar results={filteredData.length} label="books" />
            <BooksGrid books={filteredData} />
          </React.Fragment>
        )}
        {error && <ErrorDialog error={error} />}
      </React.Fragment>
    );
  }
}

export default Books;
