import React from "react";
import MyWindowPortal from "./MyWindowPortal";

class Portal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      showWindowPortal: false
    };
  }

  componentDidMount() {
    window.addEventListener("beforeunload", () => {
      this.closeWindowPortal();
    });

    setInterval(() => {
      this.setState(state => ({
        counter: state.counter + 1
      }));
    }, 1000);
  }

  toggleWindowPortal = () => {
    this.setState(state => ({
      ...state,
      showWindowPortal: !state.showWindowPortal
    }));
  };

  closeWindowPortal = () => {
    this.setState({ showWindowPortal: false });
  };
  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>

        <button onClick={this.toggleWindowPortal}>
          {this.state.showWindowPortal ? "Close the" : "Open a"} Portal
        </button>

        {this.state.showWindowPortal && (
          <MyWindowPortal closeWindowPortal={this.closeWindowPortal}>
            <h1>Counter in a portal: {this.state.counter}</h1>
            <p>Even though I render in a different window, I share state!</p>

            <button onClick={() => this.closeWindowPortal()}>Close me!</button>
          </MyWindowPortal>
        )}
      </div>
    );
  }
}

export default Portal;
