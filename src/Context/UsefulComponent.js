import React, { Component } from "react";
import AnotherComponent from "./AnotherComponent";

class UsefulComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <AnotherComponent />
      </div>
    );
  }
}

export default UsefulComponent;
