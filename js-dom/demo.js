
// The document object
var wholeDocumnet = document.documentElement;
console.log(wholeDocumnet);

// Get the head
var header = wholeDocumnet.firstChild;
console.log(header)

// get the body element
var body = wholeDocumnet.lastChild;
console.log(body);

// Get the nodes in the body
var bodyChildren = body.lastChild;
console.log(bodyChildren);

// Get an element by id
var main = document.getElementById("content");
console.log(main);

// change the header color to red
main.getElementsByTagName("h2")[0].style.color = "red";
// getElementsByTagName returns a NodeList which is a collection to we
// need to get the first one

// Create a new element
var newtag = document.createElement("p");
newtag.innerHTML = "Hello new tag";
newtag.style.position = "absolute";
newtag.style.top = "20px";
newtag.style.left = "50px";
main.appendChild(newtag);

// Show Window properties
console.log(window.innerHeight);

//main.style.height = (window.innerHeight + 3000).toString() + "px";

// setTimeout(function() {
//     main.style.height = window.innerHeight.toString() + "px";
// }, 3000);
// Show other window function

// window.location.assign("https://syracuse.edu");
// Show location properties
// setTimeout setInterval

// window.scrollTo({
//     top: 1200,
//     behavior: 'smooth'
//   });

document.getElementsByTagName("a")[0].addEventListener("click", function(evt) {
    evt.preventDefault();
    console.log(evt.target.href);
    if (true) {
        window.location.assign("http://localhost:5500/whycors.html")
    }
    
})
