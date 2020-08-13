import React, { Component } from "react";

import { UserContainer } from "./styles";

export default class User extends Component {
  render() {
    const { name, picture } = this.props.user;
    return (
      <UserContainer>
        <img src={picture.large} alt={name.first} />
        <span>{name.first}</span>
      </UserContainer>
    );
  }
}
