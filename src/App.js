import React, { Component } from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";
// Fragments
import FragmentDemo from "./Fragment";
// Error Boundaries
import BuggyCounter from "./ErrorBoundary/BuggyCounter";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
// Portals
import HelloFromPortal from "./Portal/HelloFromPortal";
import Portal from "./Portal/Portal";
import EventBubbling from "./Portal/EventBubbling";
// Context API
import { ThemeConsumer, ThemeProvider } from "./Context/index";
import UsefulComponent from "./Context/UsefulComponent";
// Render Props
import Mouse from "./RenderProps/Mouse";
// static getDerivedStateFromProps
import Parent from "./LifeCycle/Parent";

const portalContainer = document.getElementById("another-root");

const myStyle = {
  border: "2px solid green",
  height: "300px",
  margin: 0
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <FragmentDemo /> */}
        {/* <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary> */}
        {/* {ReactDOM.createPortal(<HelloFromPortal />, portalContainer)} */}
        {/* <Portal /> */}
        {/* <EventBubbling /> */}
        <ThemeProvider>
          <UsefulComponent />
        </ThemeProvider>
        {/* <Mouse /> */}
        {/* <Mouse
          render={({ x, y, message }) => (
            <h2 style={myStyle}>
              The mouse position is 👉 ({x}, {y})
            </h2>
          )}
        /> */}
        {/* <Parent /> */}
      </div>
    );
  }
}

export default App;
