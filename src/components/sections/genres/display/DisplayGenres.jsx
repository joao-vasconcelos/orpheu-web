import React from "react";
import Grid from "../../../common/display/Grid";

import genresService from "../../../../services/genresService";

import Navigation from "../../../nav/Navigation";
import Loading from "../../../common/display/Loading";
import Search from "../../../common/inputs/Search";
import Toolbar from "../../../common/inputs/Toolbar";
import GenresGrid from "./GenresGrid";
import ErrorDialog from "../../../common/display/ErrorDialog";

class DisplayGenres extends Grid {
  state = {
    data: null,
    error: null,
    searchQuery: ""
  };

  searchOptions = { keys: ["title"] };

  async getData() {
    const { data } = await genresService.get();
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
              label="genres"
              sortOptions={[{ label: "Title", key: "title" }]}
            />
            <GenresGrid items={filteredData} />
          </React.Fragment>
        )}
        {error && <ErrorDialog error={error} />}
      </React.Fragment>
    );
  }
}

export default DisplayGenres;
