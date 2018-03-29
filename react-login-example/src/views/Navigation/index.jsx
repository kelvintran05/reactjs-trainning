import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { LogoutHeaderAction, clickHeaderAction } from './actions';

class Navigation extends Component {
    render() {
        return (
            <div hidden={!this.props.isLogin}>
                <nav className="navbar navbar-light" >
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#"> <img src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" /></a>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/homepage" value="UPLOAD" onClick={this.onClickTitle} className="home-link">UPLOAD</Link></li>
                                <li><Link to="/homepage" className="home-link">REPORT</Link></li>
                                <li className="dropdown">
                                    <a className="dropdown-toggle home-link" data-toggle="dropdown">
                                        <span className="glyphicon glyphicon-user"></span>
                                        <span className="caret"></span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Company</a></li>
                                        <li><a href="#">User Profile</a></li>
                                        <li><a href="#">Notifications</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">About</a></li>
                                        <li role="separator" className="divider"></li>
                                        <li><Link to="/" onClick={this.onLogoutButtonClick}>Logout</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
    //view actions
    onLogoutButtonClick = (e) => {
        e.preventDefault();
        this.props.actions.logout();
    }
    onClickTitle = (e) => {
        e.preventDefault();
        this.props.actions.click(this.props.children);
        console.log(this.props.children);
        console.log("Click: " + this.props.actions.click(this.props.children));
    }
}
const mapStateToProps = state => ({
    isLogin: state.App.isLogin,
    isClick: state.Nav.isClick,
    titleName: state.Nav.titleName
});

const mapActionToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ logout: LogoutHeaderAction, click: clickHeaderAction  }, dispatch)
    }
}

export default connect(mapStateToProps, mapActionToProps)(Navigation);