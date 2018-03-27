import React, {Component} from 'react';
import LoginForm from '../index.jsx';
import {connect} from 'react-redux';
import {login} from '../actions';
class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }
    submit = data => 
    this.props.login(data).then(()=>{
        this.props.history.push("/homepage")
        // console.log(data);
    });
    render() {
        return (
            <div>
                <LoginForm submit={this.submit} />
            </div>
        );
    }
}

export default connect(null,{login})(LoginPage);