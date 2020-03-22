var form = document.getElementById("LoginForm");

function login(evt) {
    evt.preventDefault();
    let formData = new FormData(form);
    user = {}
    for(var pair of formData.entries()) {
        user[pair[0]] = pair[1]; 
    }

    console.log(user);

    if (user.password === "test") {
        localStorage.setItem("user", user.username);
        window.location.assign("view-profile.html");
    }
}

form.addEventListener("submit", login)