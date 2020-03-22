var user = {};

user["email"] = localStorage.getItem("user");

if (!user["email"]) {
    window.location.assign("/");
}

document.getElementById("email").innerHTML = user["email"];

var form = document.getElementById("profileForm");
var profile = localStorage.getItem("profile");

if(!profile) {
    profile = {};
} else {
    profile = JSON.parse(profile);
    // document.getElementById("id_name").innerHTML = profile.name;
    var keys = Object.keys(profile);
    for (var i = 0; i < keys.length; i++) {
        document.getElementById("id_" + keys[i]).value = profile[keys[i]];
    }
}

function saveProfile(evt) {
    evt.preventDefault();
    let formData = new FormData(form);
    for(var pair of formData.entries()) {
        profile[pair[0]] = pair[1];
    }

    console.log(profile);
    localStorage.setItem("profile", JSON.stringify(profile));
    window.location.assign("view-profile.html");

}

form.addEventListener("submit", saveProfile);



