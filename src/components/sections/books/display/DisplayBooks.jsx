import React from "react";
import Display from "../../../common/display/Display";

import booksService from "../../../../services/booksService";

import Navigation from "../../../nav/Navigation";
import Loading from "../../../common/display/Loading";
import Search from "../../../common/inputs/Search";
import Toolbar from "../../../common/inputs/Toolbar";
import BooksGrid from "./BooksGrid";
import ErrorDialog from "../../../common/display/ErrorDialog";

class DisplayBooks extends Display {
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
            <Toolbar
              results={filteredData.length}
              label="books"
              sortOptions={[{ label: "Title", key: "title" }]}
            />
            <BooksGrid items={filteredData} />
          </React.Fragment>
        )}
        {error && <ErrorDialog error={error} />}
      </React.Fragment>
    );
  }
}

export default DisplayBooks;
