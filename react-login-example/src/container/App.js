import React, { Component } from 'react';
import LoginView from '../views/Login';
import HomeView from '../views/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route path="/" exact component={LoginView}/>
        <Route path="/homepage" exact component={HomeView}/>
      </div>
      </Router>
    );
  }
}
export default App;
