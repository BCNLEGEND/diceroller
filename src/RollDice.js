import React, { Component } from "react";
import Die from "./Die";

const dieFaces = ["one", "two", "three", "four", "five", "six"];

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice1: 1,
      dice2: 5,
      rolling: false,
      shake: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    let num1 = Math.floor(Math.random() * 6);
    let num2 = Math.floor(Math.random() * 6);
    this.setState({
      dice1: num1,
      dice2: num2,
      rolling: true,
      shake: true
    });
    setTimeout(
      function() {
        this.setState({ shake: false, rolling: false });
      }.bind(this),
      500
    );
  }
  render() {
    return (
      <div className="rolldice">
        <Die shake={this.state.shake} num={dieFaces[this.state.dice1]} />
        <Die shake={this.state.shake} num={dieFaces[this.state.dice2]} />
        <button className="button" onClick={this.handleClick} disabled={this.state.rolling}>
          {!this.state.rolling ? "Roll Dice!!!" : "Rolling..."}
        </button>
      </div>
    );
  }
}

export default RollDice;
