import React, { Component } from 'react';
import "./App.css";
import UserList from '../containers/user-list';
class App extends Component {
  render() {
    return (
      <div className="App">
       <h2> Username List: </h2>
       <hr/>
       <h2> Username Details: </h2>
      </div>
    );
  }
}

export default App;
