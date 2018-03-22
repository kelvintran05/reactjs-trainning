import React, { Component } from 'react';
import './LoginForm.css';
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email:'',
            password:'', 
            invalid:true   
        };
        this.onHandleEmail=this.onHandleEmail.bind(this);
        this.onHandlePassword=this.onHandlePassword.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onSubmit(event){
        event.preventDefault();
        if (event.target.password.value.length<6) {
            this.setState({invalid:false});
            return; 
        }
    }
    onHandleEmail(event){
        this.setState({email: event.target.value});
    }
    onHandlePassword(event){
        this.setState({password: event.target.value});
    }
    render() {
        return (
            <form className="form-signin" onSubmit={this.onSubmit}>
                <h2>Please sign in</h2>
                <input id="email" type="email" className="form-control" placeholder="Email address" value={this.state.email} onChange={this.onHandleEmail}/>
                <input id="password" type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.onHandlePassword}/>
                <p>{this.state.invalid===true?'':'Password need to have at least 6 letters.'}</p>
                <button className="btn btn-lg btn-primary btn-block"  type="submit"  >Sign in</button>
            </form>
        );
    }
}
export default LoginForm;