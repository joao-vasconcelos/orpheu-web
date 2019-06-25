import React from "react";
import Grid from "../../common/display/Grid";

import authorsService from "../../../services/authorsService";

import Navigation from "../../nav/Navigation";
import Loading from "../../common/display/Loading";
import Search from "../../common/controls/Search";
import Toolbar from "../../common/controls/Toolbar";
import AuthorsGrid from "./AuthorsGrid";
import ErrorDialog from "../../common/display/ErrorDialog";

class DisplayAuthors extends Grid {
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
