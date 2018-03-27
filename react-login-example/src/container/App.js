import React, { Component } from 'react';
import LoginPage from '../views/login/pages/LoginPage';
import HomePage from '../views/home/pages/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route path="/" exact component={LoginPage}/>
        <Route path="/homepage" exact component={HomePage}/>
      </div>
      </Router>
    );
  }
}
export default App;
