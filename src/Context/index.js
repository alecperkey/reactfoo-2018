import React, { Component } from "react";

// Provide initial value and it returs object with Provider and Consumer
export const ThemeContext = React.createContext({
  background: "black",
  color: "white"
});

export const ThemeConsumer = ThemeContext.Consumer;

export class ThemeProvider extends Component {
  state = { background: "black", color: "white" };

  toggleTheme = () => {
    this.setState(state => ({
      background: state.background === "black" ? "white" : "black",
      color: state.color === "white" ? "black" : "white"
    }));
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
