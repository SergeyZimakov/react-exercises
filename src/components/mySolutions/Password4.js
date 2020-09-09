import React from 'react';
import './style.css'

class Password4 extends React.Component {
    secret = 0;
    guess = 0;

    showResult(event) {
        console.log('guess:' + this.guess + '; secret: ' + this.secret);
        if (this.guess === this.secret) {
            alert('Success');
        }
        else {
            alert('Failure');
        }
    }

    updateGuess(event) {
        this.guess = '';
        for (let i = 1; i < 4; i ++) {
            this.guess += document.getElementById('digit' + i).value; 
        }
        this.guess = parseInt(this.guess);
    }

    

    render() {
        this.secret = Math.floor(Math.random() * Math.floor(1000));
    
        let options = [0,1,2,3,4,5,6,7,8,9].map( (n) => <option value={n}>{n}</option>)
        
        

        return (
            <div className="exercise">
                <h1>Exercise 4:</h1>
                <label for="guess">Guess:</label>
                <select name="guess" id="digit1" onChange={(e) => { this.updateGuess(e) }}>
                    {options}
                </select>
                <select name="guess" id="digit2" onChange={(e) => { this.updateGuess(e) }}>
                    {options}
                </select>
                <select name="guess" id="digit3" onChange={(e) => { this.updateGuess(e) }}>
                    {options}
                </select>
                <button onClick={(e) => {this.showResult(e)}}>Check!</button>
                
                    

            </div>
            

        )
    }
}

export default Password4;