// See here for most of the code that will be used.
// https://konvajs.org/docs/sandbox/Free_Drawing.html

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

var user;
var docRef;

var width = window.innerWidth;
var height = window.innerHeight - 25;

// set up Konva
var stage;

var isPaint = false;
var mode = 'brush';
var lastLine;
var lineColor = "blue";

firebase.auth().onAuthStateChanged(function(udata) {
    if(udata) {
        user = udata;
        initApp();
    } else {
        window.location.assign("/");
    }
});


function initKonva(jdata) {

    if(jdata) {
        stage = Konva.Node.create(jdata, 'sketchBook');
    } else {
        stage = new Konva.Stage({
            container: 'sketchBook',
            width: width,
            height: height
        });
    }

    var layer = new Konva.Layer();
    stage.add(layer);

    stage.on('mousedown touchstart', function (e) {
        isPaint = true;
        var pos = stage.getPointerPosition();
        lastLine = new Konva.Line({
            stroke: lineColor,
            strokeWidth: 5,
            globalCompositeOperation: mode === 'brush' ? 'source-over' : 'destination-out',
            points: [pos.x, pos.y]
        });
        layer.add(lastLine);
    });

    stage.on('mouseup touchend', function () {
        isPaint = false;
    });

    // and core function - drawing
    stage.on('mousemove touchmove', function () {
        if (!isPaint) {
            return;
        }

        const pos = stage.getPointerPosition();
        var newPoints = lastLine.points().concat([pos.x, pos.y]);
        lastLine.points(newPoints);
        layer.batchDraw();
    });
}

function saveSketch(evt) {
    evt.preventDefault();
    console.log("Saving Sketched");
    var sk = stage.toJSON();
    docRef.set({
        sketch: sk
    }).then(function() {
        console.log("Sketch Saved Successfully")
    });
}

function clearCanvas(evt) {
    evt.preventDefault();
    console.log("Clear Canvas");
    stage.clear();
    stage.clearCache();
    initKonva();
}

// Because we need to call the function
function initApp() {
    docRef = db.collection("sketches").doc(user.email);
    docRef.get().then(function(doc) {
        if(doc.exists) {
            console.log("Loaded Saved Data");
            initKonva(doc.data().sketch);
        } else {
            console.log("Loaded Empty Sketch");
            initKonva();
        }
    })
    initKonva();
}

// Setup Event Listeners
var select = document.getElementById('tool');
select.addEventListener('change', function () {
    mode = select.value;
});

document.getElementById("saveButton").addEventListener("click", saveSketch);
document.getElementById("clearButton").addEventListener("click", clearCanvas);