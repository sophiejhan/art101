// Authors: Sophie Han <sojhan@ucsc.edu> Kazarina Liao  <kmliao@ucsc.edu>
// Created: 2 November 2022
// License Public Domain

$('#challenges').append('<button id="buttonChalEl">Click me!</button>');

$('#problems').append('<button id="buttonProbEl">Hello!</button>');

$('#results').append('<button id="buttonResEl">Click here!</button>');

$('#buttonChalEl').click (function(){
  $('#challenges').toggleClass("special");
});

$('#buttonProbEl').click(function(){
  $('#problems').toggleClass("special");
});

$('#buttonResEl').click(function(){
  $('#results').toggleClass("special");
});
