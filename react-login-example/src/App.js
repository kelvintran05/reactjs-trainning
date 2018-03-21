import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomPage';
import LoginPage from './LoginPage';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Route path='/' exact component={HomePage} />
          <Route path='/login' exact component={LoginPage} />
        </div>
    );
  }
}

export default App;
