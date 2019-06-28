import React from "react";
import ViewItem from "../../../common/display/ViewItem";

import authorsService from "../../../../services/authorsService";

import Navigation from "../../../nav/Navigation";
import Loading from "../../../common/display/Loading";
import AuthorDetails from "./AuthorDetails";
import ErrorDialog from "../../../common/display/ErrorDialog";

class ViewAuthor extends ViewItem {
  state = {
    data: null,
    error: null
  };

  async getData(itemID) {
    const { data } = await authorsService.getByID(itemID);
    return data;
  }

  render() {
    const { data, error } = this.state;
    return (
      <React.Fragment>
        <Navigation />
        {!data && !error && <Loading />}
        {data && !error && <AuthorDetails item={data} />}
        {error && <ErrorDialog error={error} />}
      </React.Fragment>
    );
  }
}

export default ViewAuthor;
