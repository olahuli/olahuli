function search() {

  var input = $(".wiki-search-input").val().trim();
  var gettyApi = "9pmqn85smrhhhx3wq5zjhgk7";
  var firstURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=" + input + "&type=video&key=AIzaSyB4_u1AG7P6ykJ68p080pjfIpjjZk7SJP0";
  var secondURL = "https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=most_popular&phrase=" + input;
  var thirdURL = "https://en.wikipedia.org/w/api.php?action=parse&origin=*&prop=text&format=json&redirects=1&page=" + input;

  //------------------------------------Getty API---------------------------

  $.ajax({
    url: secondURL,
    method: "GET",
    beforeSend: function (request) {
      request.setRequestHeader("Api-Key", gettyApi);
    }

  }).done(function (response) {

    $(".getty-view").empty();
    $(".getty-header-text").empty();

    var headerElement = $("<h2>").text("Trending Images: ");

    for (i = 0; i < 8; i++) {
      var newDiv = $("<div class ='col-xs-3'>");
      var image = response.images[i].display_sizes[0].uri;
      var imageTag = $("<img width='250' height='200'>").attr("src", image);
      newDiv.append(imageTag);

      $(".getty-view").append(newDiv);
    }
    $(".getty-header-text").append(headerElement);
    console.log(response);
  });

  //------------------------------------Youtube API---------------------------

  $.ajax({
    url: firstURL,
    method: "GET"
  }).done(function (response) {

    $(".youtube-view").empty();
    $(".youtube-header-text").empty();

    var headerElement = $("<h2>").text("Popular Videos: ");

    for (i = 0; i < response.items.length; i++) {
      var newDiv = $("<div class ='col-xs-3'>");
      var videos = response.items[i].id.videoId;
      var vidTag = $("<iframe width='250' height='200' class='videos'>").attr("src", "https://www.youtube.com/embed/" + videos);
      newDiv.append(vidTag);

      $(".youtube-view").append(newDiv);
    }
    $(".youtube-header-text").append(headerElement);
    console.log(response);
  });

  //------------------------------------Wiki API---------------------------

  $.ajax({
    url: thirdURL,
    method: "GET"
  }).done(function (response) {
    console.log(response);
    console.log(thirdURL);

    $(".wiki-view").empty();
    $(".title-view").empty();
    $(".wiki-header-text").empty();

    var textElement = $("<h2>").text("Subject Information: ");
    var newDiv = $("<div class ='col-xs-12 search-div'>");

    var title = response.parse.title;
    var headerElement = $("<h1>").text(title);
    var content = response.parse.text["*"];

    console.log(title);
    newDiv.append(content);

    $(".wiki-header-text").append(textElement);
    $(".wiki-view").append(newDiv);
    $(".title-view").append(headerElement);
    console.log(response);
  });
};

//----Copy of API Data for search button to work from one Index to another--------

var placeHolderInput = window.location.href.split("#");
var queryInput = placeHolderInput[1].replace(/ /g, '+');

var gettyApi = "9pmqn85smrhhhx3wq5zjhgk7";
var firstURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=" + queryInput + "&type=video&key=AIzaSyB4_u1AG7P6ykJ68p080pjfIpjjZk7SJP0";
var secondURL = "https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=most_popular&phrase=" + queryInput;
var thirdURL = "https://en.wikipedia.org/w/api.php?action=parse&origin=*&prop=text&format=json&redirects=1&page=" + queryInput;

console.log(queryInput);
//------------------------------------Wiki API---------------------------

$.ajax({
  url: thirdURL,
  method: "GET"
}).done(function (response) {
  console.log(response);
  console.log(thirdURL);

  $(".wiki-view").empty();
  $(".title-view").empty();
  $(".wiki-header-text").empty();

  var textElement = $("<h2>").text("Subject Information: ");
  var newDiv = $("<div class ='col-xs-12 search-div'>");

  var title = response.parse.title;
  var headerElement = $("<h1>").text(title);
  var content = response.parse.text["*"];

  console.log(title);
  newDiv.append(content);

  $(".wiki-header-text").append(textElement);
  $(".wiki-view").append(newDiv);
  $(".title-view").append(headerElement);
  console.log(response);
});

//------------------------------------Getty API---------------------------

$.ajax({
  url: secondURL,
  method: "GET",
  beforeSend: function (request) {
    request.setRequestHeader("Api-Key", gettyApi);
  }

}).done(function (response) {

  $(".getty-view").empty();
  $(".getty-header-text").empty();

  var headerElement = $("<h2>").text("Trending Images: ");

  for (i = 0; i < 8; i++) {
    var newDiv = $("<div class ='col-xs-3'>");
    var image = response.images[i].display_sizes[0].uri;
    var imageTag = $("<img width='250' height='200'>").attr("src", image);
    newDiv.append(imageTag);

    $(".getty-view").append(newDiv);
  }
  $(".getty-header-text").append(headerElement);
  console.log(response);
});

//------------------------------------Youtube API---------------------------

$.ajax({
  url: firstURL,
  method: "GET"
}).done(function (response) {

  $(".youtube-view").empty();
  $(".youtube-header-text").empty();

  var headerElement = $("<h2>").text("Popular Videos: ");

  for (i = 0; i < response.items.length; i++) {
    var newDiv = $("<div class ='col-xs-3'>");
    var videos = response.items[i].id.videoId;
    var vidTag = $("<iframe width='250' height='200' class='videos' allowfullscreen> ").attr("src", "https://www.youtube.com/embed/" + videos);
    newDiv.append(vidTag);

    $(".youtube-view").append(newDiv);
  }
  $(".youtube-header-text").append(headerElement);
  console.log(response);
});

//-----Code for user input to work on enter press-----------------------

$(document).ready(function (event) {
  $(".add-search-data").on("click", search);

  $(event).keypress(function (e) {

    var keycode = e.which;
    if (keycode == 13) {
      e.preventDefault();
      search();
    }
  });
});

//------------------------------------Modal Javascript---------------------------

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the modal
var login = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == login) {
    login.style.display = "none";
  }
}