import React, { Component } from 'react';
import './Password.css';

class Password4 extends Component {
  state = {
    guessPart: []
  }

  guessChanged(index, event) {
    const newGuess = event.target.value;
    const guesses = this.state.guessPart;
    guesses[index] = newGuess;
    this.setState({ guessPart: guesses });
  }

  checkGuess() {
    let guess = '';
    this.state.guessPart.forEach(part => guess += part);
    if (guess == this.props.secret) {
      alert('You are right');
    } else {
      alert('Wrong guess !');
    }
  }

  createSelect(index) {
    const options = Array.from({ length: 10 }, (v, k) => <option value={k + ''}>{k}</option>)
    return <select onClick={(e) => this.guessChanged(index, e)}>
      {options}
    </select>
  }

  render() {
    const selectElements = Array.from({ length: this.props.secret.length }, (v, k) => this.createSelect(k + 1));
    return (
      <div className='password-element'>
        <h1>Exercise 4</h1>
        {selectElements}
        <button onClick={() => this.checkGuess()}>Check !</button>
      </div>);
  }
}

export default Password4;