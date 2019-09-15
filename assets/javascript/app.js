const algoliaApiKey = "420478f8416cbf67fc5dc4b1617e298a";
const algoliaAppId  = "pl4NIPBVHT19";

let latLng;  //latitude and longitude in an object returned from the suggestion from Algolia places

$(document).ready(function(){

    //instantiate places and attach it to an input text box in the html
    var placesAutocomplete = places({
        appId: algoliaAppId,
        apiKey: algoliaApiKey,
        container: document.querySelector('#location')
      });
    

      //When user selects a suggested address, save off the latitude and longitude
      placesAutocomplete.on('change', e => {latLng = e.suggestion.latlng;});

});
