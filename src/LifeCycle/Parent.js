import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleClick = () =>
    this.setState(prevState => ({
      counter: ++prevState.counter
    }));

  render = () => (
    <div>
      <p>The counter in App is {this.state.counter}</p>
      <p>
        The button below will increase the counter in both Parent as well as in
        Child.
      </p>
      <button onClick={this.handleClick}>Press me!</button>
      <Child {...this.state} />
    </div>
  );
}

export default Parent;
