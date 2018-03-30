import React, { Component } from 'react';
import Validator from 'validator';

class LoginView extends Component {
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
    //view actions
    onChange = e => this.setState({
        data: { ...this.state.data, [e.target.name]: e.target.value }
    });
    onSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
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
}
export default LoginView;