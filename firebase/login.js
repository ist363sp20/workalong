var firebaseConfig = {
  
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

  // Create a new Profile

  // redirect to profile page after registration complete
}

// Listen to Login Form
var form = document.getElementById("loginForm").addEventListener("submit", loginUser);