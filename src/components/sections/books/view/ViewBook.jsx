import React from "react";
import ViewItem from "../../../common/display/ViewItem";

import booksService from "../../../../services/booksService";

import Navigation from "../../../nav/Navigation";
import Loading from "../../../common/display/Loading";
import BookDetails from "./BookDetails";
import ErrorDialog from "../../../common/display/ErrorDialog";

class ViewBook extends ViewItem {
  state = {
    item: null,
    error: null
  };

  async getData(itemID) {
    const { data } = await booksService.getByID(itemID);
    return data;
  }

  render() {
    const { item, error } = this.state;
    return (
      <React.Fragment>
        <Navigation />
        {!item && !error && <Loading />}
        {item && !error && <BookDetails item={item} />}
        {error && <ErrorDialog error={error} />}
      </React.Fragment>
    );
  }
}

export default ViewBook;
