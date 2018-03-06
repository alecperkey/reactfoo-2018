import React, { Component } from "react";

class Child extends Component {
  static getDerivedStateFromProps = (nextProps, prevState) =>
    nextProps.counter === prevState.counter
      ? null
      : { counter: nextProps.counter };

  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.counter,
      message: "Hello"
    };
  }

  handleClick = () =>
    this.setState(prevState => ({
      counter: ++prevState.counter
    }));

  render = () => (
    <div>
      <p>The counter in MyComponent is {this.state.counter}</p>
      <p>The button will increase the counter only inside Child.</p>
      <button onClick={this.handleClick}>Press me!</button>
    </div>
  );
}

export default Child;
