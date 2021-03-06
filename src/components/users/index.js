import React, { Component } from "react";
import User from "../user";

import { UsersContainer } from "./styles";

export default class Users extends Component {
  constructor() {
    super();

    this.state = {
      secondsVisible: 0,
    };

    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { secondsVisible } = this.state;
      this.setState({
        secondsVisible: secondsVisible + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { users } = this.props;
    const { secondsVisible } = this.state;
    return (
      <UsersContainer>
        <p>
          Component <strong>Users</strong> visible for {secondsVisible} seconds.
        </p>
        <ul>
          {users.map((user) => {
            const { login } = user;
            return (
              <li key={login.uuid}>
                <User user={user} />
              </li>
            );
          })}
        </ul>
      </UsersContainer>
    );
  }
}
