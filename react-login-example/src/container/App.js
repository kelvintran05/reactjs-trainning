import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginView from '../views/Login';
import HomeView from '../views/Home';
import NavView from '../views/Navigation';

class App extends Component {
    render() {
        return (
            <div>
                <NavView />
                <div className="container">
                    <Router>
                        <div>
                            <Route path="/" exact component={LoginView} />
                            <Route path="/homepage" exact component={HomeView} />
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}
export default App;
