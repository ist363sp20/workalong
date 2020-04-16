import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Firebase
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  // PUT YOUR CODE HERE
};

// Create a global level firebase application
var fb = firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App firebase={fb} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
