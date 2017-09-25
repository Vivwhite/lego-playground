import React, { Component } from 'react';
import { Link } from 'react-router'

class Home extends Component  {
  render(){
    return(
      <div className="row homepage">
        <img className="home-logo" src="http://i.imgur.com/N01aT2W.png"></img>

        <h1 className="row tagline">Play with code now!</h1>
      </div>
    )
  }
}

export default Home;
