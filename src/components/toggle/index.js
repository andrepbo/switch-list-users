import React, { Component } from "react";
import { ToggleContainer, ToggleSpan } from "./styles";

export default class Toggle extends Component {
  handleChange = (event) => {
    const { onToggle } = this.props;
    const isChecked = event.target.checked;

    onToggle(isChecked);
  };
  render() {
    const { enabled, description } = this.props;
    return (
      <ToggleContainer>
        <label>
          {description}
          <input
            type="checkbox"
            checked={enabled}
            onChange={this.handleChange}
          />
          <ToggleSpan></ToggleSpan>
        </label>
      </ToggleContainer>
    );
  }
}
