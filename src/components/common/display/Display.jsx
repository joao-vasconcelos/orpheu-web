import React from "react";
import Fuse from "fuse.js";
import logger from "../../../utils/logger";

class Display extends React.Component {
  state = {
    data: null,
    error: null,
    searchQuery: ""
  };

  searchOptions = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 2,
    keys: ["title"]
  };

  async componentDidMount() {
    try {
      this.setState({ data: await this.getData() });
    } catch (err) {
      if (err.response && err.response.status === 404) {
        this.props.history.replace("/not-found");
      } else {
        logger.log("Error getting data from server", err);
        this.setState({ error: err });
      }
    }
  }

  handleSearch = query => {
    this.setState({ searchQuery: query });
  };

  filterData = () => {
    const { data, searchQuery } = this.state;
    if (data && searchQuery) {
      const fuse = new Fuse(data, this.searchOptions);
      return fuse.search(searchQuery);
    } else return data;
  };
}

export default Display;
