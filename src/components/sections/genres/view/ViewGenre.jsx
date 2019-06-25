import React from "react";
import ViewItem from "../../common/display/ViewItem";

import genresService from "../../../services/genresService";

import Navigation from "../../../nav/Navigation";
import Loading from "../../../common/display/Loading";
import GenreDetails from "./GenreDetails";
import ErrorDialog from "../../../common/display/ErrorDialog";

class ViewGenre extends ViewItem {
  state = {
    item: null,
    error: null
  };

  async getData(itemID) {
    const { data } = await genresService.getByID(itemID);
    return data;
  }

  render() {
    const { item, error } = this.state;
    return (
      <React.Fragment>
        <Navigation />
        {!item && !error && <Loading />}
        {item && !error && <GenreDetails item={item} />}
        {error && <ErrorDialog error={error} />}
      </React.Fragment>
    );
  }
}

export default ViewGenre;
