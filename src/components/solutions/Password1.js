import React, { Component } from 'react';
import './Password.css';

class Password1 extends Component {
  render() {
    const guess = Math.ceil(Math.random() * 5);
    const css = guess == Number(this.props.secret)
      ? "success"
      : "failure";
    return (
      <div className="password-element">
        <h1>Exercise 1</h1>
        <h2 className={css}>Secret: {this.props.secret}, Guess: {guess}</h2>
      </div>
    );
  }
}

export default Password1;