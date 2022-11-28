/
 * Author:    Kazarina Liao, Sophie Han
 * Created:   11.21.2022
 *
 /
 console.log("inside js file");

$('#activate').click(function(){
   console.log("action button is clicked");
   $.ajax({
     url: "https://api.chucknorris.io/jokes/random",
     data: { api_key: RgNBs4TjYNVjwPSQLLvkMtIj4zOflKWVB3TikTry},
     type: "GET",
     dataType : "json",

   })
   .done(function(data) {
     console.log(data);
     var printableData = "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
     $("#output").append("<p>" + data.value + "</p>");

 })
});
