import React, { Component } from 'react';
import { auth } from '../utils/firebase';
import { Link } from 'react-router';
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

          <div id="navbar" className="navbar-collapse collapse">
            <div className="nav navbar-nav navbar-right">
              <div className="dropdown">

                { this.sessionButton() }

                  <button><LogoutButton { ...this.props }>Log out</LogoutButton></button>

              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
