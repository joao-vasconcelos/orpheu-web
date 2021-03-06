import React from "react";
import Display from "../../../common/display/Display";

import authorsService from "../../../../services/authorsService";

import Navigation from "../../../nav/Navigation";
import Loading from "../../../common/display/Loading";
import Search from "../../../common/inputs/Search";
import Toolbar from "../../../common/inputs/Toolbar";
import AuthorsGrid from "./AuthorsGrid";
import ErrorDialog from "../../../common/display/ErrorDialog";

class DisplayAuthors extends Display {
  state = {
    data: null,
    error: null,
    searchQuery: ""
  };

  searchOptions = { keys: ["name"] };

  async getData() {
    const { data } = await authorsService.get();
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
              label="authors"
              sortOptions={[{ label: "Name", key: "name" }]}
            />
            <AuthorsGrid items={filteredData} />
          </React.Fragment>
        )}
        {error && <ErrorDialog error={error} />}
      </React.Fragment>
    );
  }
}

export default DisplayAuthors;
