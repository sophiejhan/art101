// Authors: Sophie Han <sojhan@ucsc.edu> Kazarina Liao  <kmliao@ucsc.edu>
// Created: 31 October 2022
// License

var outputEl= document.getElementById("output");

var new1El = document.createElement("p");
var new2El = document.createElement("p");

new1El.innerHTML="Hello.";
new2El.innerHTML="Bye. Have a Great Day!";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

new1El.style.fontFamily="Tahoma";
new1El.style.fontSize="30px";
new2El.style.fontSize="40px";
