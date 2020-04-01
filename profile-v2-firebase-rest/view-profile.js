var user = {};

var user = JSON.parse(localStorage.getItem("user"));

if (!user) {
    window.location.assign("/");
}

var email = user.user.email;
var accessToken = user.user.stsTokenManager.accessToken;
var profile = {};

function init() {
    console.log(profile);
    document.getElementById("id_name").innerHTML = profile.fields.name.stringValue;
    document.getElementById("id_jobTitle").innerHTML = profile.fields.jobTitle.stringValue;
    document.getElementById("id_department").innerHTML = profile.fields.department.stringValue;
    document.getElementById("id_bio").innerHTML = profile.fields.bio.stringValue;
}

var url = "https://firestore.googleapis.com/v1beta1/projects/fir-b23bf/databases/(default)/documents/profiles/";
axios.get(url + email, {headers: {'Authorization': 'Bearer ' + accessToken}}).then(function(response) {
    profile = response.data;
    if (response.status == 200){
        init();
    }
}).catch(function (error) {
    // handle error
    var newprofile = {
        "fields": {
          "email": {
            "stringValue": email
          },
          "name": {
            "stringValue": email
          },
          "jobTitle": {
            "stringValue": ''
          },
          "department": {
            "stringValue": ''
          },
          "bio": {
            "stringValue": ''
          }
        }
      }
    axios.post(url + "?documentId=ndlyga@syr.edu", newprofile, {headers: {'Authorization': 'Bearer ' + accessToken}}).then(function(response) {
        profile = response.data;
        init();
    });
  });



document.getElementById("email").innerHTML = email;

