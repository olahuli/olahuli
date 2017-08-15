
$(document).on("click", ".add-search-data", function(){

  var input = $(".wiki-search-input").val().trim();
  var gettyApi = "9pmqn85smrhhhx3wq5zjhgk7";
  var firstURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q="+ input +"&type=video&key=AIzaSyB4_u1AG7P6ykJ68p080pjfIpjjZk7SJP0";
  var secondURL = "https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=most_popular&phrase=" + input;
  var thirdURL="https://en.wikipedia.org/w/api.php?action=parse&origin=*&prop=text&format=json&redirects=1&page=" + input;


  $.ajax({
    url: secondURL,
    method: "GET",
    beforeSend: function(request){
      request.setRequestHeader("Api-Key", gettyApi);
    }

  }).done(function(response){
    
    for(i = 0; i < 8; i++){
      var newDiv = $("<div class ='col-xs-3'>");
      var image = response.images[i].display_sizes[0].uri;
      var imageTag = $("<img width='250' height='200'>").attr("src", image);
      newDiv.append(imageTag);
    
    $(".getty-view").append(newDiv);
  }
    console.log(response);
  });

  $.ajax({
    url: firstURL,
    method: "GET"
  }).done(function(response){

    for(i = 0; i < response.items.length; i++){
          var newDiv = $("<div class ='col-xs-3'>");
      var videos = response.items[i].id.videoId;
      var vidTag = $("<iframe width='250' height='200' class='videos'>").attr("src", "https://www.youtube.com/embed/" + videos);
      newDiv.append(vidTag);
    
    $(".youtube-view").append(newDiv);
  }
    console.log(response);
  });

    $.ajax({
    url: thirdURL,
    method: "GET"
  }).done(function(response){
     console.log(response);
     console.log(thirdURL);
     $(".wiki-view").empty();

     var newDiv = $("<div class ='col-xs-12 search-div'>");
     var headerDiv = $("<div class ='col-xs-3 title-div'>");
     var title = response.parse.title;
     var content = response.parse.text["*"];

     headerDiv.append(title);
     newDiv.append(content);

     $(".wiki-view").append(newDiv);
     $("#getty-container").prepend(headerDiv);
     console.log(response);
  });

});
