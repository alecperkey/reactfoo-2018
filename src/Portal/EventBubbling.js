import React, { Component } from "react";
import ReactDOM from "react-dom";

const modalContainer = document.getElementById("another-root");

function Child() {
  return <button>Click</button>;
}

class EventBubbling extends Component {
  state = { clicks: 0 };
  onClick = () => {
    // This will fire when the button in Child is clicked, even though
    // button is not a direct descendant in the DOM.
    this.setState(state => ({ clicks: state.clicks + 1 }));
  };
  render() {
    return (
      <div onClick={this.onClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools to observe that the button is not a child
          of the div with the onClick handler.
        </p>
        {ReactDOM.createPortal(<Child />, modalContainer)}
      </div>
    );
  }
}

export default EventBubbling;
