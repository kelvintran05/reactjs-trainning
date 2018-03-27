import React, { Component } from 'react';
import './login.css';
// import validateInput from '../utils/validateInput';
// import PropTypes from 'prop-types';
import Validator from 'validator';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                email: '',
                password: ''
            },
            isAuthenticated: false,
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }
    onChange = e => this.setState({
        data: { ...this.state.data, [e.target.name]: e.target.value }
    });
    onSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        // console.log(errors);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            // this.state.isAuthenticated = true;
            this.props.submit(this.state);
        }
    };
    validate = (data) => {
        const errors = {};
        if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
        if (!data.password) errors.password = "Can't be blank";
        if (data.password.length < 6) errors.password = "Password need to have at least 6 letters.";
        return errors;
    }
    render() {
        const { data, errors } = this.state;
        return (
            <form className="form-signin" onSubmit={this.onSubmit}>
                <h2>Please sign in</h2>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Email address"
                    value={data.email}
                    onChange={this.onChange}
                />
                {errors.email}
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={data.password}
                    onChange={this.onChange} />
                {errors.password}
                <button
                    className="btn btn-lg btn-primary btn-block"
                    type="submit">Sign in
                </button>
            </form>
        );
    }
}

export default LoginForm;