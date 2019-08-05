import React, { Component } from "react";
import Select from "react-select";

class Multiselect extends Component {
  handleMultiselectChange = (name, value) => {
    if (!value) value = [];
    this.props.onChange({ currentTarget: { name: name, value: value } });
  };

  render() {
    const { name, label, keys, options, defaultValue, error } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <Select
          isMulti
          isClearable
          onChange={newValue => this.handleMultiselectChange(name, newValue)}
          getOptionValue={opt => opt[keys.value]}
          getOptionLabel={opt => opt[keys.label]}
          options={options}
          defaultValue={defaultValue}
        />
        {error && (
          <div className="text-danger mt-2" style={{ fontSize: 15 }}>
            {error}
          </div>
        )}
      </div>
    );
  }
}

export default Multiselect;
