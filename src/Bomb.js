// your Bomb code here!
import React, { Component } from "react";

class Bomb extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state.secondsLeft = this.props.initialCount;
  }
  render() {
    const { secondsLeft } = this.state;
    if (secondsLeft > 0) {
      return <div>{`${secondsLeft} seconds left before I go boom!`}</div>;
    } else {
      return <div>Boom!</div>;
    }
  }
}

export default Bomb;
