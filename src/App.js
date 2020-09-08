import React from 'react';
import './App.css';
import Password1 from './components/solutions/Password1';
import Password2 from './components/solutions/Password2';
import Password3 from './components/solutions/Password3';
import Password4 from './components/solutions/Password4';

function App() {
  return (
    <div className="App">
      <Password1 secret="2" />
      <Password2 secret="2" />
      <Password3 secret="2" />
      <Password4 secret="123" />
    </div>
  );
}

export default App;
