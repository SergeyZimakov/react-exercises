import React, { Component } from 'react';

class Password2 extends Component {

  checkPassword1(e) {
    const guess = e.target.value;
    if (guess == '-1') {
      return;
    }
    if (guess == this.props.secret) {
      alert("You are rigth !")
    } else {
      alert("Wrong answer");
    }
  }

  render() { 
    let options = [1,2,3].map((n) => <option value={n + ''}>{n}</option>);
    options = [<option value='-1'>Guess</option>, ...options];
    return ( 
      <div className="password-element">
        <h1>Exercise 2</h1>
        <select onChange={(e) => this.checkPassword1(e)}>
          {options}
        </select>
      </div>
     );
  }
}
 
export default Password2;