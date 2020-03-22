var form = document.getElementById("LoginForm");

function login(evt) {
    evt.preventDefault();
    
    let formData = new FormData(form);
    var user = {};
    for(var pair of formData.entries()) {
        user[pair[0]] = pair[1]
    }

    if (user.password == "test") {
        localStorage.setItem("user", user.email);
        window.location.assign("view-profile.html");
    } else {
        alert("Incorrect Password");
    }
}

form.addEventListener("submit", login);