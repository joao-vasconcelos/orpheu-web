import React from "react";
import ViewItem from "../../../common/display/ViewItem";

import genresService from "../../../../services/genresService";

import Navigation from "../../../nav/Navigation";
import Loading from "../../../common/display/Loading";
import GenreDetails from "./GenreDetails";
import ErrorDialog from "../../../common/display/ErrorDialog";

class ViewGenre extends ViewItem {
  state = {
    data: null,
    error: null
  };

  async getData(itemID) {
    const { data } = await genresService.getByID(itemID);
    return data;
  }

  render() {
    const { data, error } = this.state;
    return (
      <React.Fragment>
        <Navigation />
        {!data && !error && <Loading />}
        {data && !error && <GenreDetails item={data} />}
        {data && !error && <h5>Comming Soon...</h5>}
        {error && <ErrorDialog error={error} />}
      </React.Fragment>
    );
  }
}

export default ViewGenre;
