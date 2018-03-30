import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as appActions from '../actions/app';
import LoginView from '../views/Login';
import HomeView from '../views/Home';
import NavComponent from '../components/Navigation';

class App extends Component {
    constructor(props) {
        super(props);
        this.props.actions.updateAppStateAction();
    }
    render() {
        return (
            <div>
                <NavComponent onSelected={this.onNavigationSelected} show={this.props.isLogin} />
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
    // Navigation actions
    onNavigationSelected = actionType => {
        switch (actionType) {
            case NavComponent.ACTION_TYPES.LOGOUT:
                this.props.actions.logoutAction();
                break;
            case NavComponent.ACTION_TYPES.COMPANY:
                break;
            case NavComponent.ACTION_TYPES.USER_PROFILE:
                break;
            case NavComponent.ACTION_TYPES.NOTIFICATION:
                break;
            case NavComponent.ACTION_TYPES.CONTACT_US:
                break;
            case NavComponent.ACTION_TYPES.ABOUT:
                break;
            case NavComponent.ACTION_TYPES.UPLOAD:
                break;
            case NavComponent.ACTION_TYPES.REPORT:
                break;
            default:
                break;
        }
    }
}
const mapStateToProps = state => ({
    isLogin: state.App.isLogin
});
const mapActionToProps = (dispatch) => {
    return {
        actions: bindActionCreators(appActions, dispatch)
    }
}
export default connect(mapStateToProps, mapActionToProps)(App);
