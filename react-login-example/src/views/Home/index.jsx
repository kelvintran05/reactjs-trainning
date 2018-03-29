import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import * as homeViewActions from './actions';

class HomePage extends React.Component {
    render() {
        if (this.props.isLogin === false) {
            return <Redirect to="/"></Redirect>
        }
        return (
            
            <div>
                <h1>Hi!!!!{localStorage.getItem('data')}</h1>
                <button onClick={this.onLogoutButtonClick}>Logout</button>
            </div>
        );
    }
    //view actions
    onLogoutButtonClick = (e) => {
        e.preventDefault();
        this.props.actions.homeLogoutAction();
    }
}
const mapStateToProps = state => ({
    isLogin: state.App.isLogin
});

const mapActionToProps = (dispatch) => {
    return {
        actions: bindActionCreators(homeViewActions, dispatch)
    }
}

export default connect(mapStateToProps, mapActionToProps)(HomePage);