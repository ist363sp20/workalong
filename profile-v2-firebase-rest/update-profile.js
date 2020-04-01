var user = {};

var user = JSON.parse(localStorage.getItem("user"));

if (!user) {
    window.location.assign("/");
}

var form = document.getElementById("profileForm");
var email = user.user.email;
var accessToken = user.user.stsTokenManager.accessToken;
var profile = {};

function init() {
    console.log(profile);
    document.getElementById("id_name").value = profile.fields.name.stringValue;
    document.getElementById("id_jobTitle").value = profile.fields.jobTitle.stringValue;
    document.getElementById("id_department").value = profile.fields.department.stringValue;
    document.getElementById("id_bio").value = profile.fields.bio.stringValue;

}

var url = "https://firestore.googleapis.com/v1beta1/projects/fir-b23bf/databases/(default)/documents/profiles/";
axios.get(url + email, {headers: {'Authorization': 'Bearer ' + accessToken}}).then(function(response) {
    profile = response.data;
    init();
}).catch(function (error) {
    // handle error
    alert("Couldn't get profile!");
  });



document.getElementById("email").innerHTML = email;

function saveProfile(evt) {
    evt.preventDefault();
    let formData = new FormData(form);
    for(var pair of formData.entries()) {
        profile.fields[pair[0]] = { stringValue: pair[1]}; 
    }


    
    axios.patch(url + email, profile, {headers: {'Authorization': 'Bearer ' + accessToken}}).then(function(response) {
        window.location.assign("view-profile.html");
    });

}

form.addEventListener("submit", saveProfile);

