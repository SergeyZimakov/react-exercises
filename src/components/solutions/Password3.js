import React, { Component } from 'react';
import './Password.css';

class Password3 extends Component {
  state = {
    guess: ''
  }

  guessChanged(e) {
    const newGuess = e.target.value;
    this.setState({guess: newGuess});
  }

  checkGuess(){
    if (this.state.guess == this.props.secret) {
      alert('You are right');
    } else {
      alert('Wrong guess !');
    }
  }

  render() {
    return (
      <div className='password-element'>
        <h1>Exercise 3</h1>
        <input type="text" onChange={(e) => this.guessChanged(e)} />
        <button onClick={() => this.checkGuess()}>Check !</button>
      </div>);
  }
}

export default Password3;