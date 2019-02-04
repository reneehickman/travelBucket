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

  

  function showResults(){
    initialSearchDIV.hide();
    resultsDIV.show()
    addToBucketListButton.show();
  };


  // function checkAuthentication(){
  //   //check if user is logged in
  //   //if user is logged in show users bucket list
  //   bucketListDIV.show();
  //   //show users name button instead of sign in sign up button
  //   loggedInButton.show();
  //   loginButton.hide();
  //   //if user is not logged in, prompt user to login via modal
  //   //if no account, prompt to sign up
  // };

  // function addToBucketList(){
  //   // checkAuthentication();
  //   // function that pushes the city the user is saving into bucket list array
  //   //display in users bucket list
  // };


  $(".searchButton").on("click", showResults);
  // $("#addToBucketListButton").on("click", addToBucketList);

  // $(".searchButton").on("click", function(){
  //   initialSearchDIV.hide();
  //   resultsDIV.show()
  // });

  




//var tmURL = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=bAS6qJ9GjnzpjGB3vGbEXGpiwlpn1ppZ';

//var googlePlacesURL = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=PHOTOREF&key=AIzaSyCSGl6uFr0JoT1c9RHRu369r_hdYj0eknA';

//AccuWeather: TniUBmLQMyMOCQn9JQeefxCVZEbpTolr
