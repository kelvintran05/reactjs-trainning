import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
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
        const data = {
            email: 'caotri212@gmail.com', password: '123456'
        };
        this.props.actions.loginAction(data);
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