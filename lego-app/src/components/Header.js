import React, {Component} from 'react';
import {auth} from '../utils/firebase';
import LibraryContainer from '../containers/LibraryContainer'

class Header extends Component{
  constructor(props){
    super(props)
    this.state = {
      currentUser: auth.currentUser
    }
  }

  render(){
    return (
      <div className="App">
        {
          this.props.currentUser !=null ?
          <LibraryContainer />
          :<div className="row homepage">
            <img className="home-logo" src="http://i.imgur.com/N01aT2W.png"></img>

            <h1 className="row tagline">Play with code now!</h1>
          </div>
        }
      </div>
    );
  }
};



export default Header;
