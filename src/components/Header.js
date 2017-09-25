import React, {Component} from 'react';
import {auth} from '../utils/firebase';
import LibraryContainer from '../containers/LibraryContainer';
import Home from './Home.js'

class Header extends Component{
  constructor(props){
    super(props)
    this.state = {
      currentUser: auth.currentUser
    }
  };

  checkLogin(){
    if (!this.props.currentUser){
      return (
        <div className="row homepage">
          <img className="home-logo" src="http://i.imgur.com/N01aT2W.png"></img>

          <h1 className="row tagline">Play with code now!</h1>
        </div>
      )
    }
  }

  render(){
    return (
      <div className="App">
        {this.checkLogin()}
      </div>
    );
  }
};



export default Header;
