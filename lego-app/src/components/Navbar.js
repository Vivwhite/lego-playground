import React, { Component } from 'react';
import { auth } from '../utils/firebase';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
// import { Link } from 'react-router'

class Navbar extends Component {
  sessionButton() {
    if (!this.props.currentUser ) {
      return <LoginButton { ...this.props }>Log in with Google</LoginButton>;
    } else {
      return (
        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
          <img className="navbar-profile-pic" src={ this.props.currentUser.photoURL } alt="" /> { this.props.currentUser.displayName } <span className="caret"></span>
        </a>
      )
    }
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              
              <li className="dropdown">
                { this.sessionButton() }
                <ul className="dropdown-menu">
                  <li><a href="#" className="logo-home pull-left">Home</a></li>
                  <li><a href="#">View profile</a></li>
                  <li role="separator" className="divider"></li>
                  <li><LogoutButton { ...this.props }>Log out</LogoutButton></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
