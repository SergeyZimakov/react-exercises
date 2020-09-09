import React from 'react';
import './style.css'

class Password3 extends React.Component {
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
        this.guess = parseInt(event.target.value);
    }

    

    render() {
        this.secret = Math.floor(Math.random() * Math.floor(100));
        
        

        return (
            <div className="exercise">
                <h1>Exercise 3:</h1>
                <label for="guess">Guess:</label>
                <input name="guess" id="guess" onChange={(e) => {this.updateGuess(e)}}/>
                <button onClick={(e) => {this.showResult(e)}}>Check!</button>
                
                    

            </div>
            

        )
    }
}

export default Password3;