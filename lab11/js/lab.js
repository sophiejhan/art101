// Authors: Sophie Han <sojhan@ucsc.edu> Kazarina Liao  <kmliao@ucsc.edu>
// Created: 7 November 2022
// License Public Domain

$('#challenges').append('<button id="buttonChalEl">Click me!</button>');

$('#problems').append('<button id="buttonProbEl">Hello!</button>');

$('#results').append('<button id="buttonResEl">Click here!</button>');

$('#buttonChalEl').click (function(){
  $('#challenges').toggleClass("specialChal");
});

$('#buttonProbEl').click(function(){
  $('#problems').toggleClass("specialProb");
});

$('#buttonResEl').click(function(){
  $('#results').toggleClass("specialRes");
});


//bonus task
//create a button that changes the other botton's color and vice versa!
$('#bonus').append('<button id ="buttonOneEl">I am button one! </button>');
$('#bonus').append('<button id ="buttonTwoEl">I am button two!</button>');

$('#buttonOneEl').click(function(){
  $('#buttonTwoEl').toggleClass("bonusSpecial");
});

$('#buttonTwoEl').click(function(){
  $('#buttonOneEl').toggleClass("bonusSpecial");
});
