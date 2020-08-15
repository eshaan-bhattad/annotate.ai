import React, { useState, Component } from "react";
import axios from "axios";
class JumbotronMain extends Component {
  state = {
    name: "",
  };
  componentDidMount() {
    axios.get("http://localhost:8080/user").then((res) => {
      this.setState({ persons: res.data });
    });
  }

  render() {
    return (
      <div class="jumbotron jumbotron-fluid bg-muted">
        <div class="container">
          <h1 class="display-1-justify-content-middle">Welcome Eshaan</h1>
        </div>
      </div>
    );
  }
}
export default JumbotronMain;
