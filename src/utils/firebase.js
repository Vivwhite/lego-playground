import firebase from 'firebase';

// TODO: replace with your project's customized code snippet
const config = {
    apiKey: "AIzaSyCMfBNjWKitGsqzuGdKg-iShIWjqIqOp_k",
    authDomain: "lego-app-93210.firebaseapp.com",
    databaseURL: "https://lego-app-93210.firebaseio.com",
    projectId: "lego-app-93210",
    storageBucket: "lego-app-93210.appspot.com",
    messagingSenderId: "804056040622"
  };

// initialize firebase app with config information
firebase.initializeApp(config);

const auth = firebase.auth();
export { firebase, auth }
