// Authors: Sophie Han <sojhan@ucsc.edu> Kazarina Liao  <kmliao@ucsc.edu>
// Created:  28 November 2022
// License Public Domain

var URL = "https://xkcd.com/info.0.json";

var URLpre = "https://xkcd.com/";
var URLpost = "info.0.json";


function make_safe(str) {
  return str.replace(/'/g, '&apos;').replace(/"/g, '&quot;');
}

function getComic(num) {
  if (typeof num === 'undefined') {
    numStr = "";
  } else {
    numStr = num.toString() + "/";
  }
  var ourURL = URLpre + numStr + URLpost;
  console.log("Our new URL:", ourURL);

  $.ajax({
      // The URL
      url: ourURL,
      // GET request
      type: "GET",
  })
  // If the request succeeds
  .done(function(data) {
      // console.log(data);
      var imageUrl = data.img;
      // we use .replace(/"/g, '\\"') after the text strings because sometimes there are single and double quotes in the text that confuses the html
      var title = data.title;
      console.log("rig title:", title);
      title = make_safe(title);
      console.log("safe title:", title);
      var alt = data.alt;
      console.log("orig alt:", alt);
      alt = make_safe(alt);
      console.log("safe alt:", alt);

      var comicNum = data.num;
      var html = `<div id="imageblock">
          <h2>${title}</h2>
          <img src="${imageUrl}" title="${alt}"><br>
          <button id="prev">Previous</button><button id="next">Next</button>
        </div>`
      // console.log("My new html: \n", html);
      $("#output").html(html);
      //subtract from comic number to get previous comic
      $("#prev").click(function(){
        getComic(comicNum - 1);
      });
      //add to comic number to get the next comic
      $("#next").click(function(){
        getComic(comicNum + 1);
      });
  })
  .fail(function(){
    console.log("^^ Something weird happened, but that's okay.");
    console.log("Have and okay day! :-)");
  })

}

// call getComic
getComic();
