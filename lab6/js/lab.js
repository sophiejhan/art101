// Authors: Sophie Han <sojhan@ucsc.edu> Kazarina Liao  <kmliao@ucsc.edu>
// Created: 19 October 2022
// License: Public Domain

myTransport = ["walking", "biking", "driving"];

myMainRide = {
    make: "Toyota",
    model: "Corolla",
    color: "White",
    year: 2020,
    age : function() {
        return 2019 - age;
    }
}
document.writeln("Kinds of transport I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
