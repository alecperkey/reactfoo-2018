import React from "react";

const styles = {
  container: {
    height: 300,
    border: "solid red"
  }
};

class Mouse extends React.Component {
  state = { x: 0, y: 0, message: "HELLLO" };

  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  render() {
    return (
      <div onMouseMove={this.handleMouseMove} style={styles.container}>
        {this.props.render(this.state)}
        {/* x is: {this.state.x} and y is {this.state.y} */}
      </div>
    );
  }
}

export default Mouse;
