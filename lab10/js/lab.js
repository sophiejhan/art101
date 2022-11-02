// Authors: Sophie Han <sojhan@ucsc.edu> Kazarina Liao  <kmliao@ucsc.edu>
// Created: 2 November 2022
// License Public Domain


//Function from lab 7
function sortUserName(nameInput)  {
    var userName = nameInput;

    var nameArray = userName.split('');

    var nameArraySort = nameArray.sort();

    var nameSorted = nameArraySort.join('');

    return (nameSorted);
}


var buttonEl = document.getElementById("my-button");
var outputEl = document.getElementById("output");

buttonEl.addEventListener('click', function(){
  var inputVal = document.getElementById("user-name").value;
  var sortedNewName = sortUserName(inputVal);
  outputEl.innerHTML = sortedNewName;
})
