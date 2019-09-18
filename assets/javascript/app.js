// $("#starOne").on ("click", function(){
//     $("#starOne").html("&#9733;");
// });
// $("#starTwo").on ("click", function(){
//     $("#starTwo").html("&#9733;&#9733;");
// });
// $("#starThree").on ("click", function(){
//     $("#starThree").html("&#9733;&#9733;&#9733;");
// });
// $("#starFour").on ("click", function(){
//     $("#starFour").html("&#9733;&#9733;&#9733;&#9733;");
// });
//$("#starFive").on("click", function () {
 //   $("#starFive").html("&#9733;&#9733;&#9733;&#9733;&#9733;");
//});
// Add active class to the current button (highlight it)
// var header = $("#ratingContainer");
// var btns = $(".star");
// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function () {
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     });
// }
const toogleActive = function(button){
    var state = button.attr("data-state");
    if(state == "inactive"){
        button.attr("data-state", "active");
        button.addClass("active");
    }
    else if (state == "active"){
        button.attr("data-state", "inactive");
        button.removeClass("active");
    }
};
$(".star").on("click", function(event) {
    toogleActive($(this));  
})
$(".time").on("click", function(event) {
    toogleActive($(this));  
})
$(".price").on("click", function(event) {
    toogleActive($(this));  
})




const algoliaApiKey = "420478f8416cbf67fc5dc4b1617e298a";
const algoliaAppId  = "pl4NIPBVHT19";

const aerisWeather = {
    apiKey: "XfKCLeB7QSZnVmsSSrlqL5abBWmH1kLv4GiHMpWB",
    accessId: "IhoPBape6zamvrXhAop7j",
    currentWeatherBaseUrl: "https://api.aerisapi.com/observations/",
    getCurrentWeather(location,callback){
        let queryUrl = `${this.currentWeatherBaseUrl}${location}?&format=json&filter=allstations&limit=1&client_id=${this.accessId}&client_secret=${this.apiKey}`; 
        console.log(queryUrl);
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function(response){
          callback(response);
        });
    }
};

let latLng;  //latitude and longitude in an object returned from the suggestion from Algolia places

function logOutToConsole(obj){
    console.log(obj);
}



$(document).ready(function(){

    //instantiate places and attach it to an input text box in the html
    var placesAutocomplete = places({
        appId: algoliaAppId,
        apiKey: algoliaApiKey,
        container: document.querySelector('#location')
      });
    
      placesAutocomplete.on('change', function(e) {
        console.log(e.suggestion);
      });

      //When user selects a suggested address, save off the latitude and longitude
      placesAutocomplete.on('change', e => {latLng = e.suggestion.latlng;});

      aerisWeather.getCurrentWeather("33.4486,-112.077",logOutToConsole);  //testing with lat/long for Phoenix
});
