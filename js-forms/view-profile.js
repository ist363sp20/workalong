var user = {};

user["email"] = localStorage.getItem("user");

if (!user["email"]) {
    window.location.assign("/");
}

var profile = localStorage.getItem("profile")

if (!profile) {
    profile = {}
} else {
    profile = JSON.parse(profile);
    // We could do it like
    // document.getElementById("name") = profile["name"];
    // or event easier!
    var keys = Object.keys(profile);
    for (var i = 0; i < keys.length ; i ++) {
       
       document.getElementById("id_" + keys[i]).innerHTML = profile[keys[i]];
    }

}

document.getElementById("email").innerHTML = user["email"];

