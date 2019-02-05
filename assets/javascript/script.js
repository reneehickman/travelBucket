// Initialize Firebase
var config = {
  apiKey: "AIzaSyAacNRFRGzgHM8W0blNJyjBtMEZ23nkWpQ",
  authDomain: "travelbucket-f12cf.firebaseapp.com",
  databaseURL: "https://travelbucket-f12cf.firebaseio.com",
  projectId: "travelbucket-f12cf",
  storageBucket: "travelbucket-f12cf.appspot.com",
  messagingSenderId: "1042574383776"
};
firebase.initializeApp(config);

var database = firebase.database();

var initialSearchDIV = $("#initialSearchBodyContent");
var resultsDIV = $("#resultsDIV");
var bucketListDIV = $("#bucketListDIV");
var loginDIV = $("#loginDIV");
var loginButton = $("#login");
var loggedInButton = $("#loggedIn");
var addToBucketListButton = $("#addToBucketListLink");
var removeFromBucketListButton = $("#RemoveFromBucketListLink");



resultsDIV.hide();
bucketListDIV.hide();
loginDIV.hide();
loggedInButton.hide();
addToBucketListButton.hide();
removeFromBucketListButton.hide();
initialSearchDIV.show();
loginButton.show();


$("#initialSearchButton").on("click", function (event) {

  $("#cityName").empty();
  // $(".searchInput").empty();

  // We're optionally using a form so the user may hit Enter to search instead of clicking the button
  event.preventDefault();

  // Here we grab the text from the input box
  var userInput = $("#initialSearchInput").val().trim();

  var limit = 1;

  // Here we construct our URL
  var queryURL = "https://dataservice.accuweather.com/locations/v1/cities/search?apikey=TniUBmLQMyMOCQn9JQeefxCVZEbpTolr&q=" + userInput + "&offset=" + limit;

  // Creates AJAX call for the specific input value the user enters
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)
    // console.log(JSON.stringify(response));

    showResults();

    var cityName;
    var cityKey;
    var latitude;
    var longitude;

    var results = response;

    for (var i = 0; i < limit; i++) {
      var cityName = results[i].EnglishName;
      var cityKey = results[i].Key;
      var latitude = results[i].GeoPosition.Latitude;
      var longitude = results[i].GeoPosition.Longitude;
      // console.log(cityName, cityKey, latitude, longitude);

    }

    var cityNameText = $("<h1>").text(cityName);
      $("#cityName").append(cityNameText);

      var queryURL = "https://pixabay.com/api/?key=11499654-c065dd5a493546456b466ce84&q=" + userInput + "&image_type=photo";

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
        console.log(response)
        // console.log(JSON.stringify(response));
      
        var results = response;
        var lgImageSRC;
        var previewSRC;

      for (var i = 0; i < limit; i++) {
        var lgImageSRC = results.hits[i].largeImageURL;
        var previewSRC = results.hits[i].previewURL;
        console.log(lgImageSRC, previewSRC);

        // var cityImg = $("<img>")
      // cityImg.attr("src", lgImageSRC);
      // cityImg.attr("class", "cityImg")
      $("#cityPhoto").css("background-image", "url("+ lgImageSRC +")");

      }  

  });

});

formInitialInput.reset();

});


$("#searchButton").on("click", function (event) {

  $("#cityName").empty();
  // $(".searchInput").empty();


  // We're optionally using a form so the user may hit Enter to search instead of clicking the button
  event.preventDefault();

  // Here we grab the text from the input box
  var userInput = $("#searchInput").val().trim();

  var limit = 1;

  // Here we construct our URL
  var queryURL = "https://dataservice.accuweather.com/locations/v1/cities/search?apikey=TniUBmLQMyMOCQn9JQeefxCVZEbpTolr&q=" + userInput + "&offset=" + limit;

  // Creates AJAX call for the specific input value the user enters
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    // console.log(response)
    console.log(JSON.stringify(response));

    showResults();

    var results = response;

    for (var i = 0; i < limit; i++) {

      // var cityNameDiv = $("<div>");

      var cityName = results[i].EnglishName;
      var cityKey = results[i].Key;
      var latitude = results[i].GeoPosition.Latitude;
      var longitude = results[i].GeoPosition.Longitude;
      console.log(cityName, cityKey, latitude, longitude);


      var cityNameText = $("<h1>").text(cityName);
      $("#cityName").append(cityNameText);

    }

    
    var queryURL = "https://pixabay.com/api/?key=11499654-c065dd5a493546456b466ce84&q=" + userInput + "&image_type=photo";

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
        // console.log(response)
        console.log(JSON.stringify(response));
      
        var results = response;
        var lgImageSRC;
        var previewSRC;

      for (var i = 0; i < limit; i++) {
        var lgImageSRC = results.hits[i].largeImageURL;
        var previewSRC = results.hits[i].previewURL;
        console.log(lgImageSRC, previewSRC);

      // var cityImg = $("<img>")
      // cityImg.attr("src", lgImageSRC);
      // cityImg.attr("class", "cityImg")
      $("#cityPhoto").css("background-image", "url("+ lgImageSRC +")");
      
      
      } 

  });

  });

  formSearchInput.reset();

});





// $("#initialSearchButton").on("click", function (event) {

//   $("#cityName").empty();
//   // $(".searchInput").empty();


//   // We're optionally using a form so the user may hit Enter to search instead of clicking the button
//   event.preventDefault();

//   // Here we grab the text from the input box
//   var userInput = $("#initialSearchInput").val().trim();

//   var limit = 1;

//   // Here we construct our URL
//   var queryURL = "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=TniUBmLQMyMOCQn9JQeefxCVZEbpTolr&q=" + userInput + "&offset=" + limit;

//   // Creates AJAX call for the specific input value the user enters
//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function (response) {
//     // console.log(response)
//     console.log(JSON.stringify(response));

//     showResults();

//     var cityName;
//     var cityKey;
//     var latitude;
//     var longitude;

//     var results = response;

//     for (var i = 0; i < limit; i++) {
//       var cityName = results[i].EnglishName;
//       var cityKey = results[i].Key;
//       var latitude = results[i].GeoPosition.Latitude;
//       var longitude = results[i].GeoPosition.Longitude;
//       // console.log(cityName, cityKey, latitude, longitude);

//     }

//     var cityNameText = $("<h1>").text(cityName);
//       $("#cityName").append(cityNameText);
//   });
//   formInitialInput.reset();
// });



// $("#searchButton").on("click", function (event) {

//   $("#cityName").empty();
//   // $(".searchInput").empty();


//   // We're optionally using a form so the user may hit Enter to search instead of clicking the button
//   event.preventDefault();

//   // Here we grab the text from the input box
//   var userInput = $("#searchInput").val().trim();

//   var limit = 1;

//   // Here we construct our URL
//   var queryURL = "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=TniUBmLQMyMOCQn9JQeefxCVZEbpTolr&q=" + userInput + "&offset=" + limit;

//   // Creates AJAX call for the specific input value the user enters
//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function (response) {
//     // console.log(response)
//     console.log(JSON.stringify(response));

//     showResults();

//     var results = response;

//     for (var i = 0; i < limit; i++) {

//       // var cityNameDiv = $("<div>");

//       var cityName = results[i].EnglishName;
//       var cityKey = results[i].Key;
//       var latitude = results[i].GeoPosition.Latitude;
//       var longitude = results[i].GeoPosition.Longitude;
//       console.log(cityName, cityKey, latitude, longitude);


//       var cityNameText = $("<h1>").text(cityName);
//       $("#cityName").append(cityNameText);

//       // formSearchInput.reset();
//       // ("#searchInput").reset();

//     }

//   });

//   formSearchInput.reset();

// });



function showResults() {
  initialSearchDIV.hide();
  resultsDIV.show()
  addToBucketListButton.show();
};


function checkAuthentication() {
  //check if user is logged in
  //if user is logged in show users bucket list
  bucketListDIV.show();
  //show users name button instead of sign in sign up button
  loggedInButton.show();
  loginButton.hide();
  //if user is not logged in, prompt user to login via modal
  //if no account, prompt to sign up
};

function addToBucketList() {
  // checkAuthentication();
  // function that pushes the city the user is saving into bucket list array
  //display in users bucket list
};

// $(document).on("click", ".searchButton", onSearch, showResults);
// $(".searchButton").on("click", onSearch);
// $("#addToBucketListButton").on("click", addToBucketList);

// $(".searchButton").on("click", function(){
//   initialSearchDIV.hide();
//   resultsDIV.show()
// });






//var tmURL = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=bAS6qJ9GjnzpjGB3vGbEXGpiwlpn1ppZ';

//var googlePlacesURL = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=PHOTOREF&key=AIzaSyCSGl6uFr0JoT1c9RHRu369r_hdYj0eknA';

//AccuWeather: TniUBmLQMyMOCQn9JQeefxCVZEbpTolr

// Flickr Key:
// 7f87bd8e1e86f5d6c30f6bd29c51f953

// Secret:
// b0aed7eeef745371