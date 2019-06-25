import React from "react";
import logger from "../../../services/logService";

class ViewItem extends React.Component {
  state = {
    item: null,
    error: null
  };

  async componentDidMount() {
    try {
      const itemID = this.props.match.params.id;
      this.setState({ item: await this.getData(itemID) });
    } catch (err) {
      if (err.response && err.response.status === 404) {
        this.props.history.replace("/not-found");
      } else {
        logger.log("Error getting item from server", err);
        this.setState({ error: err });
      }
    }
  }
}

export default ViewItem;
