import React from 'react';
import './style.css'

class Password2 extends React.Component {
    secret = 0;

    showResult(event) {
        let value = parseInt(event.target.value);
        console.log('guess:' + value + '; secret: ' + this.secret);
        if (value === this.secret) {
            alert('Success');
        }
        else {
            alert('Failure');
        }
    }

    

    render() {
        this.secret = Math.floor(Math.random() * Math.floor(9));
        
        

        return (
            <div className="exercise">
                <h1>Exercise 2:</h1>
                <label for="guess">Guess:</label>
                    <select name="guess" id="guess" onChange={(e) => { this.showResult(e) }}>
                        <option>guess...</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>

            </div>
            

        )
    }
}

export default Password2;