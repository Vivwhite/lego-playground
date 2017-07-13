import React, { Component } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import { browserHistory } from 'react-router'
import { firebase, auth } from './utils/firebase';

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
        {this.props.children}
      </div>
    );
  }
}

export default App;
