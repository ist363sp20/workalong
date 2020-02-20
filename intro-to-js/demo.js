let myname = "Nick"
let myage = 20;

myage = myage + 20;

myage++;

var clicked = 0;
document.getElementById("clicker").addEventListener("click", function() {
    clicked++;
    document.getElementById("count").innerHTML = clicked;
})


