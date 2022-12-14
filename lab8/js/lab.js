// Authors: Sophie Han <sojhan@ucsc.edu> Kazarina Liao  <kmliao@ucsc.edu>
// Created: 26 October 2022
// License: Public Domain


//ourFunction adds 1
function ourFunction(x) {
    var results = x + 1;
    return results;
}

//test function
console.log("1 + 1 is ", ourFunction(1));
console.log("33 + 1 is ", ourFunction(33));
console.log("6 + 1 is ", ourFunction(6));
console.log("12 + 1 is ", ourFunction(12));

array = [2, 7, 17, 91, 63]
console.log("My array:", array);

//result variable for array map addition results
var result= array.map(ourFunction);
console.log("Addition to array:", result);

//Anon function subtracts 5
var mapResult = array.map(function(x) {
     return x - 5;
})

//reults to console
console.log("Subtract 5 from the array:", mapResult);

//bonus
var outputEl = document.getElementById("output");
outputEl.innerHTML = "Original array: [" + array + "]. Add 1 to the array: [" + result + "]. Subtract 5 from array: [" + mapResult + "].";
