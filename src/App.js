import React, { Component } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import { browserHistory } from 'react-router'
import { firebase, auth } from './utils/firebase';
import Home from './components/Home';
import Header from './components/Header';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser: null,
      currentLegoId: ''
    }
  }

  componentWillMount() {
     auth.onAuthStateChanged(currentUser => {
       if (currentUser) {
         console.log('Logged in:', currentUser);
         this.setState({ currentUser });

       } else {
         this.setState({ currentUser: null });
       }
     });
   }

loginButtonClicked(e) {
  e.preventDefault();
   // set up provider
  const provider = new firebase.auth.GoogleAuthProvider();
  console.log("signing in")
   // tell Firebase auth to log in with a popup and that provider
  auth.signInWithPopup(provider);
  browserHistory.push('/lego-library');
}

logoutButtonClicked(e) {
e.preventDefault();
// tell Firebase auth to log out
console.log("signing out");
auth.signOut();
browserHistory.push('/');
}



  render() {
    return (
      <div className="App">
        <Navbar
            currentUser={ this.state.currentUser }
            loginButtonClicked={ this.loginButtonClicked }
            logoutButtonClicked={ this.logoutButtonClicked } />
            <Header
          currentUser={this.state.currentUser} />
        {this.props.children}
      </div>
    );
  }
}

export default App;
