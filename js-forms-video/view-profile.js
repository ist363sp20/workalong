var user = {};

user["email"] = localStorage.getItem("user");

if (!user["email"]) {
    window.location.assign("/");
}

var profile = localStorage.getItem("profile");

if(!profile) {
    profile = {}
} else {
    profile = JSON.parse(profile);
    // document.getElementById("id_name").innerHTML = profile.name;
    var keys = Object.keys(profile);
    for (var i = 0; i < keys.length; i++) {
        document.getElementById("id_" + keys[i]).innerHTML = profile[keys[i]];
    }
}

document.getElementById("email").innerHTML = user["email"];

function logout(evt) {
    if (confirm("Are you sure that you want to logout? ALL DATA WILL BE LOST!")) {
        localStorage.clear();
        window.location.assign("/");
    }
}

document.getElementById("logout").addEventListener("click", logout);