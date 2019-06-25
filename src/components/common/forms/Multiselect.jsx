import React, { Component } from "react";
import Select from "react-select";

class Multiselect extends Component {
  handleMultiselectChange = (name, value) => {
    if (!value) value = [];
    this.props.onChange({ currentTarget: { name: name, value: value } });
  };

  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <Select
          isMulti
          onChange={newValue =>
            this.handleMultiselectChange("authors", newValue)
          }
          getOptionValue={opt => opt._id}
          getOptionLabel={opt => opt.name}
          options={this.props.options}
        />
        {this.props.error && (
          <div className="text-danger mt-2" style={{ fontSize: 15 }}>
            {this.props.error}
          </div>
        )}
      </div>
    );
  }
}

export default Multiselect;
