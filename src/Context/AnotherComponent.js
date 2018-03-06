import React, { Component } from "react";
import { ThemeConsumer } from "./index";

class AnotherComponent extends Component {
  render() {
    return (
      <ThemeConsumer>
        {({ background, color, toggleTheme }) => (
          <React.Fragment>
            <div style={{ background, color }}>
              <h1>Hello ReactFoo</h1>
              <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
          </React.Fragment>
        )}
      </ThemeConsumer>
    );
  }
}

export default AnotherComponent;
