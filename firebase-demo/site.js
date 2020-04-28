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

  var db = firebase.firestore();
  var storageRef = firebase.storage().ref();

// var docRef = db.collection('nick').doc();


// var food = {
//     name: "apple",
//     calories: 100,
// }

// function callBack(data) {
//     console.log(data);
//     alert("Doc Saved");
// }

// docRef.set(food).then(callBack);

// var citiesRef = db.collection("nick");

// var myFoods = [];

// citiesRef.get().then(querySnapshot => {
//     querySnapshot.forEach(function(doc) {
//         // doc.data() is never undefined for query doc snapshots
//         myFoods.push(doc.data());
//     });
//     initApp();
// });

// function initApp() {
//     sum = 0;
//     for (var food of myFoods) {
//         sum = sum + food.calories;
//     }
//     alert('You ate: ' + sum.toString());
// }

// var file;

// document.getElementById("fileInput").addEventListener("change", function(evt) {
//     file = evt.target.files[0];
//     console.log(file);
// });

// document.getElementById("uploadButton").addEventListener("click", function() {
//     var myfile = storageRef.child(file.name);
//     myfile.put(file).then(function(snapshot) {
//         console.log('Uploaded a blob or file!');
//     });
// });

// var globalUser;

// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//         console.log('logged in');
//         globalUser = user
//         initApp();
//       // ...
//     } else {
//       // User is signed out.
//       // ...
//       console.log("not logged in");
//     }
//   });


//   function initApp() {
//     var docRef = db.collection(globalUser.email).doc();
//     docRef.set({
//         email: globalUser.email,
//         name: "Nick"
//     });
//   }

zipCode = '13219';

myData = [];



function lookup(evt) {

    zipCode = this.value;
    axios.get('https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=' + zipCode)
  .then(function (response) {
    // handle success
    myData = response.data;
    console.log(myData);
    render();
  })
}

document.getElementById("lookUp").addEventListener("change", lookup);


function render() {
    var myul = document.getElementById("results");
    mystr = ""
    for(var d of myData.results) {
        mystr = mystr + ", " + d.marketname;
    }
    myul.innerHTML = mystr;

}
