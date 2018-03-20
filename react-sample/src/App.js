import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <Person name="Manu" age="23"/>
        <Person name="Max" age="28">My Hobbies: Racing</Person>
      </div>
    );
  }
}

export default App;
