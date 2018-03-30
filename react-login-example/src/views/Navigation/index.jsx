import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { LogoutHeaderAction } from './actions';
import './style.css';
class Navigation extends Component {
    render() {
        return (
            <header className="navbar-default" role="banner">
                <div hidden={!this.props.isLogin} className="container">
                    <nav role="navigation" >
                        <div class="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#myNavbar" >
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand" > <img src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" /></a>
                            </div>
                            <ul className="nav navbar-nav navbar-right">
                                    <li className="dropdown">
                                        <a className="dropdown-toggle" data-toggle="dropdown">
                                            <span className="glyphicon glyphicon-user"></span>
                                            <span className="caret"></span>
                                        </a>
                                        <ul className="dropdown-menu" id="mainNavBar">
                                            <li><a>Company</a></li>
                                            <li><a>User Profile</a></li>
                                            <li><a>Notifications</a></li>
                                            <li><a>Contact Us</a></li>
                                            <li><a>About</a></li>
                                            {/* <li role="separator" className="divider"></li> */}
                                            <li><Link to="/" onClick={this.onLogoutButtonClick}>Logout</Link></li>
                                        </ul>
                                    </li>
                             </ul>
                            <div class="collapse navbar-collapse" id="myNavbar">
                                <ul className="nav navbar-nav navbar-right">
                                    <li><a>UPLOAD</a></li>
                                    <li><a>REPORT</a></li>
                                    </ul>
                            </div>
                            
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
    //view actions
    onLogoutButtonClick = (e) => {
        e.preventDefault();
        this.props.actions.logout();
    }
}
const mapStateToProps = state => ({
    isLogin: state.App.isLogin
});

const mapActionToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ logout: LogoutHeaderAction }, dispatch)
    }
}

export default connect(mapStateToProps, mapActionToProps)(Navigation);