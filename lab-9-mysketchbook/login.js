// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAM_FD7RMGFvwRJs7EESFYr1UKgF0liuy0",
    authDomain: "sketchbookv1-55538.firebaseapp.com",
    databaseURL: "https://sketchbookv1-55538.firebaseio.com",
    projectId: "sketchbookv1-55538",
    storageBucket: "sketchbookv1-55538.appspot.com",
    messagingSenderId: "218012686845",
    appId: "1:218012686845:web:898cb57189abf9e4dea194"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var loginForm = document.getElementById("loginForm");
var registerForm = document.getElementById("registerForm");

function loginUser(evt) {
    evt.preventDefault();

    let formData = new FormData(loginForm);
    user = {};
    for (var pair of formData.entries()) {
        user[pair[0]] = pair[1];
    }

    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(function (result) {
            window.location.assign("sketchbook.html");
        })
        .catch(function (error) {
            var errorMessage = error.message;
            alert(errorMessage);
        });

}

function registerUser(evt) {
    evt.preventDefault();

    let formData = new FormData(registerForm);
    user = {};
    for (var pair of formData.entries()) {
        user[pair[0]] = pair[1];
    }

    if (user.password !== user.passwordConfirm) {
        alert("Passwords do not Match");
    } else {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(function(result) {
                console.log(result);
                window.location.assign("sketchbook.html");
            })
            .catch(function(error) {
                var errorMessage = error.message;
                alert(errorMessage);
            })
    }
}

loginForm.addEventListener("submit", loginUser);
registerForm.addEventListener("submit", registerUser);