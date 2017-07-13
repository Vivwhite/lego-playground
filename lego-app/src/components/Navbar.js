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
          <img className="navbar-profile-pic" src={ this.props.currentUser.photoURL } alt="" /> { this.props.currentUser.displayName }
        </a>
        
      )
    }
  }

  render() {
    let url = '/create-lego';
    let home = '/lego-library';
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div id="navbar row" className="navbar-collapse collapse">

            <Link to={home}><img className="lego-logo pull-left" src="http://i.imgur.com/c6Ou9HS.png"></img></Link>
            <div className="nav navbar-nav navbar-right">
              <div className="dropdown">
                <Link to={url}><i className="fa fa-plus-circle fa-2x pull-left" aria-hidden="true"></i></Link>

                { this.sessionButton() }

                  <LogoutButton { ...this.props }><i className="fa fa-sign-out fa-2x" aria-hidden="true"></i></LogoutButton>

              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
