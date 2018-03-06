import React, { Component, Fragment } from "react";

const Columns = () => (
  <Fragment>
    <td>Hello</td>
    <td>World</td>
  </Fragment>
);

class FragmentDemo extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <table>
          <tr>
            <Columns />
          </tr>
        </table>
        Some text.
        <h2>A heading</h2>
        More text.
        <h2>Another heading</h2>
        Even more text.
      </React.Fragment>
    );
  }
}

export default FragmentDemo;
