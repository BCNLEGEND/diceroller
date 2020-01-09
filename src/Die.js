import React, { Component } from "react";

class Die extends Component {
  render() {
    return (
      <div>
        <i className={`die ${this.props.shake && 'shake'} fas fa-dice-${this.props.num}`} />
      </div>
    );
  }
}

export default Die;
