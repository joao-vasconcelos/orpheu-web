import React from "react";
import logger from "../../../utils/logger";

class ViewItem extends React.Component {
  state = {
    data: null,
    error: null
  };

  async componentDidMount() {
    try {
      const itemID = this.props.match.params.id;
      this.setState({ data: await this.getData(itemID) });
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
