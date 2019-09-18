const algoliaApiKey = "420478f8416cbf67fc5dc4b1617e298a";
const algoliaAppId = "pl4NIPBVHT19";
let locationCenter;
var map;
const aerisWeather = {
    apiKey: "XfKCLeB7QSZnVmsSSrlqL5abBWmH1kLv4GiHMpWB",
    accessId: "IhoPBape6zamvrXhAop7j",
    currentWeatherBaseUrl: "https://api.aerisapi.com/observations/",
    getCurrentWeather(location, callback) {
        let queryUrl = `${this.currentWeatherBaseUrl}${location}?&format=json&filter=allstations&limit=1&client_id=${this.accessId}&client_secret=${this.apiKey}`;
        console.log(queryUrl);
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function (response) {
            callback(response);
        });
    }
};

let latLng = {
    lat:33.4487,
    lng:-112.071
};  //latitude and longitude in an object returned from the suggestion from Algolia places

function logOutToConsole(obj) {
    console.log(obj);
}

$(document).on("click","#submitLocation",function(event){
  event.preventDefault()

 map.setCenter(latLng)
});

// })
function initMap() {

     map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: {
          lat: 33.4486,
          lng: -112.077
        },
        mapTypeId: "satellite"
    });
}


$(document).ready(function () {

    //instantiate places and attach it to an input text box in the html
    var placesAutocomplete = places({
        appId: algoliaAppId,
        apiKey: algoliaApiKey,
        container: document.querySelector('#location')
    });


    //When user selects a suggested address, save off the latitude and longitude
    placesAutocomplete.on('change', e => {latLng = e.suggestion.latlng;});

    

    aerisWeather.getCurrentWeather("33.4486,-112.077", logOutToConsole);  //testing with lat/long for Phoenix
});

