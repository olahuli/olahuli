
$(document).on("click", ".add-search-data", function(){

  var input = $(".wiki-search-input").val().trim();
  var gettyApi = "9pmqn85smrhhhx3wq5zjhgk7";
  console.log(input);
  var firstURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q="+ input +"&type=video&key=AIzaSyB4_u1AG7P6ykJ68p080pjfIpjjZk7SJP0";
  var secondURL = "https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=most_popular&phrase=" + input;
  var thirdURL="https://en.wikipedia.org/w/api.php?action=parse&origin=*&prop=text&format=json&redirects=1&page=" + input;
  $.ajax({
    url: thirdURL,
    method: "GET"
  }).done(function(response){
     console.log(response);
     console.log(thirdURL);
     $(".wiki-view").empty();

   var newDiv = $("<div class ='col-xs-12 search-div'>");


     var title = response.parse.title;
      var content = response.parse.text["*"];


     newDiv.append(title);
      newDiv.append(content);

   $(".wiki-view").append(newDiv);
    console.log(response);
  });

  $.ajax({
    url: firstURL,
    method: "GET"
  }).done(function(response){

    var newDiv = $("<div class='row' id ='youtube'>");
    for(i = 0; i < response.items.length; i++){
      var videos = response.items[i].id.videoId;
      var vidTag = $("<iframe width='250' height='200' class='videos'>").attr("src", "https://www.youtube.com/embed/" + videos);
      newDiv.append(vidTag);
    }
    $(".youtube-view").html(newDiv);
    console.log(response);
  });

  $.ajax({
    url: secondURL,
    method: "GET",
    beforeSend: function(request){
      request.setRequestHeader("Api-Key", gettyApi);
    }

  }).done(function(response){

    var newDiv = $("<div class='row' id='getty'>");
    for(i = 0; i < 8; i++){
      var image = response.images[i].display_sizes[0].uri;
      var imageTag = $("<img width='250' height='200'>").attr("src", image);
      newDiv.append(imageTag);
    }
    $(".getty-view").html(newDiv);
    console.log(response);
  });

});
