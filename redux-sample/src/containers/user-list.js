import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class UserList extends Component{
    render(){
        return(
            <ul>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

export default connect(mapStateToProps)(UserList);