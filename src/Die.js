import React, { Component } from "react";

class Die extends Component {
  shake = () => {
    return this.props.shake ? "shake" : "";
  };
  render() {
    return (
      <div>
        <i className={`die ${this.shake()} fas fa-dice-${this.props.num}`} />
      </div>
    );
  }
}

export default Die;
