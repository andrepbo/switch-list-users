import React, { Component } from "react";
import Users from "./components/users";
import Toggle from "./components/toggle";

import { Container } from "../src/styles/globals";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      showUsers: false,
    };
  }

  async componentDidMount() {
    const res = await fetch(
      "https://randomuser.me/api/?seed=rush&nat=br&results=10"
    );
    const json = await res.json();
    this.setState({
      users: json.results,
    });
  }

  handleShowUsers = (isChecked) => {
    this.setState({ showUsers: isChecked });
  };

  render() {
    const { showUsers, users } = this.state;

    return (
      <Container>
        <h1>React Lifecycle</h1>
        <Toggle
          description="Show Users"
          enabled={showUsers}
          onToggle={this.handleShowUsers}
        />
        <hr />
        {showUsers && <Users users={users} />}
      </Container>
    );
  }
}
