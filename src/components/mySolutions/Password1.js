import React from 'react';
import './style.css'

class Password1 extends React.Component {


    render() {
//// secret should be provided as a property
        const secret = Math.floor(Math.random() * Math.floor(9));
        const guess = Math.floor(Math.random() * Math.floor(9));
        let color = (secret === guess) ? 'green' : 'red';
        const style = {
            backgroundColor: color
        };
        

        return (
            <div className="exercise">
                <h1>Exercise 1:</h1>
                <p style={style}>Secret:  {secret}..........Guess:  {guess}</p>

            </div>
            

        )
    }
}

export default Password1;
