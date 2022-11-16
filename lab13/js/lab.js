// Authors: Sophie Han <sojhan@ucsc.edu> Kazarina Liao  <kmliao@ucsc.edu>
// Created: 14 November 2022
// License Public Domain

var newText;
function fizzBuzz(){
  for (i=1; i <= 200; i++) {
      if (i%35 == 0) {
          console.log("BuzzBoom!");
          document.getElementById("output").innerHTML += "BuzzBoom! ";
      } else if (i%21 == 0) {
          console.log("FizzBoom!");
          document.getElementById("output").innerHTML += "FizzBoom! ";
      }else if (i%15 == 0) {
          console.log("FizzBuzz!");
          document.getElementById("output").innerHTML += "FizzBuzz! ";
      } else if (i%7 == 0) {
          console.log("Boom!");
          document.getElementById("output").innerHTML += "Boom! ";
      } else if (i%5 == 0) {
          console.log("Buzz!");
          document.getElementById("output").innerHTML += "Buzz! ";
      } else if (i%3 == 0) {
          console.log("Fizz!");
          document.getElementById("output").innerHTML += "Fizz! ";
      } else {
          console.log(i);
          document.getElementById("output").innerHTML += i + " ";
      }
  }
}


fizzBuzz();
//document.getElementById("output").innerHTML += newText;
