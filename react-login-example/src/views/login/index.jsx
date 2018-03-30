import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom';

import LoginPage from './pages/loginPage';
import * as loginViewActions from './actions';

import './style.css';

class LoginView extends Component {
    render() {
        if (this.props.isLogin === true) {
            return <Redirect to="/homepage"></Redirect>
        }
        return (
            <LoginPage submit={this.submit} />
        );
    }
    //view actions
    submit = credentials => {
        console.log(credentials.data);
        this.props.actions.loginAction(credentials.data);
    }
}
const mapStateToProps = state => ({
    isLogin: state.App.isLogin,
    error: state.App.error
});
const mapActionToProps = (dispatch) => {
    return {
        actions: bindActionCreators(loginViewActions, dispatch)
    }
}
export default connect(mapStateToProps, mapActionToProps)(LoginView);