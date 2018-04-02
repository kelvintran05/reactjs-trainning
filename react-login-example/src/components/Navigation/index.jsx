import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import logo from '../../assets/bat-favicon.png';

const ACTION_TYPES = {
    LOGOUT: 'LOGOUT',
    COMPANY: 'COMPANY',
    USER_PROFILE: 'USER PROFILE',
    NOTIFICATION: 'NOTIFICATION',
    CONTACT_US: 'CONTACT US',
    ABOUT: 'ABOUT',
    UPLOAD: 'UPLOAD',
    REPORT: 'REPORT'
};

const Navigation = props => {
    // actions
    const onItemSelect = actionType => {
        const { onSelected } = props;
        onSelected(actionType);
    };

    const { show } = props;
    if (!show) {
        return null;
    }
    return (
        <header className="navbar-default" role="banner">
            <div className="container">
                <nav >
                    <div className="container-fluid">
                        <div>
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#myNavbar" >
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" > <img src={logo} width="30" height="30" alt="" /></a>
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a className="dropdown-toggle pull-right" data-toggle="dropdown">
                                    <span className="glyphicon glyphicon-user"></span>
                                    <span className="caret"></span>
                                </a>
                                <ul className="dropdown-menu">
                                    <div className="dropdown-content">
                                        <li onClick={onItemSelect.bind(null, ACTION_TYPES.COMPANY)}><a>Company</a></li>
                                        <li onClick={onItemSelect.bind(null, ACTION_TYPES.USER_PROFILE)}><a>User Profile</a></li>
                                        <li onClick={onItemSelect.bind(null, ACTION_TYPES.NOTIFICATION)}><a>Notifications</a></li>
                                        <li onClick={onItemSelect.bind(null, ACTION_TYPES.CONTACT_US)}><a>Contact Us</a></li>
                                        <li onClick={onItemSelect.bind(null, ACTION_TYPES.ABOUT)}><a>About</a></li>
                                        <li onClick={onItemSelect.bind(null, ACTION_TYPES.LOGOUT)}><a>Logout</a></li>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                        <div className="collapse navbar-collapse" id="myNavbar" >
                            <ul className="nav navbar-nav navbar-right">
                                <li role="separator" className="divider"></li>
                                <li onClick={onItemSelect.bind(null, ACTION_TYPES.UPLOAD)}><a>UPLOAD</a></li>
                                <li onClick={onItemSelect.bind(null, ACTION_TYPES.REPORT)}><a>REPORT</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};
Navigation.propTypes = {
    onSelected: PropTypes.func.isRequired,
    show: PropTypes.bool
};
Navigation.defaultProps = {
    show: true
};
Navigation.ACTION_TYPES = ACTION_TYPES;

export default Navigation;