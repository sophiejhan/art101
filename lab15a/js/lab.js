// Authors: Sophie Han <sojhan@ucsc.edu> Kazarina Liao  <kmliao@ucsc.edu>
// Created: 21 November 2022
// License Public Domain


$('#activate').click(function(){
  $.ajax({
    url: "https://api.chucknorris.io/",
    data: {categories:[], created_at :"2020-01-05 13:42:26.991637",icon_url:"https://assets.chucknorris.host/img/avatar/chuck-norris.png",id :"jHDeYSU-R_WZ71w1ITCPKw",updated_at:"2020-01-05 13:42:26.991637",url:"https://api.chucknorris.io/jokes/jHDeYSU-R_WZ71w1ITCPKw",value:"Chuck Norris can jump...without leaving the ground."},
    type: "GET",
    dataType : "json",
    success: function(data) {
      console.log(data);
      $.get( "https://api.chucknorris.io/jokes/random", function( data ) {
      	$("#output").html(data);
      }).fail(function(){
          alert("There was an error");
      });
      }
  },

  )
})
