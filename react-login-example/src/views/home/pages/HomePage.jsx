import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions';
import {  Redirect } from 'react-router-dom';
class HomePage extends React.Component {
  logout(e) {
    // e.preventDefault();
    this.props.logout();
  }
  render() {
    if(this.props.HomeView.isAuthenticated === false) {
      return <Redirect to="/"></Redirect>
    }
    return (<div>
      <h1>Hi!!!!{localStorage.getItem('data')}</h1>
      <button className="btn btn-lg btn-primary btn-block" onClick={this.logout.bind(this)}>Logout</button>
    </div>
    );
  }
}
const mapStateToProps = state => ({
  HomeView: state.logout
});

export default connect(mapStateToProps, { logout })(HomePage);