var firebaseConfig = {
  apiKey: "AIzaSyD_gMVOzQoqQvjkL93ZakV0aEZasnas8xs",
  authDomain: "fir-b23bf.firebaseapp.com",
  databaseURL: "https://fir-b23bf.firebaseio.com",
  projectId: "fir-b23bf",
  storageBucket: "fir-b23bf.appspot.com",
  messagingSenderId: "182198124364",
  appId: "1:182198124364:web:e3c707f1a6d6c7d75019e9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get dom elements
var loginForm = document.getElementById("loginForm")
var registerForm = document.getElementById("registrationForm")

function loginUser(evt) {


  evt.preventDefault();
  let formData = new FormData(loginForm);

  user = {}
  for (var pair of formData.entries()) {
    user[pair[0]] = pair[1];
  }
  console.log(user);
  // Login a user
  firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(function(result) {
        // user is logged in
        console.log(result);
        // save that to localStorage!
        localStorage.setItem("user", JSON.stringify(result))
        window.location.assign("view-profile.html");
    })
    .catch(function (error) {
    // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage)
    });
}

function registerUser(evt) {
  // Register a new user account

  evt.preventDefault();
  let formData = new FormData(loginForm);

  user = {}
  for (var pair of formData.entries()) {
    user[pair[0]] = pair[1];
  }
  // Create a user and sign them in
  firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(function(result) {
        // user is logged in
        console.log(result);
        // save that to localStorage!
        localStorage.setItem("user", JSON.stringify(result))
        window.location.assign("view-profile.html");
    })
    .catch(function (error) {
    // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage)
    });
}

// Listen to Login Form
var form = document.getElementById("loginForm").addEventListener("submit", loginUser);