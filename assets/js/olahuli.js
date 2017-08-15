
$(document).on("click", ".add-search-data", function(){
<<<<<<< HEAD
  
  var input = $(".wiki-search-input").val().trim();
  // var gettyApi = "9pmqn85smrhhhx3wq5zjhgk7";

  // var firstURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q="+ input +"&type=video&key=AIzaSyB4_u1AG7P6ykJ68p080pjfIpjjZk7SJP0";
  // var secondURL = "https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=best&phrase=" + input;
  var thirdURL="https://en.wikipedia.org/w/api.php?action=parse&origin=*&prop=text&format=json&redirects=1&page=" + input;
  // var thirdURL = "https://en.wikipedia.org/w/api.php?action=opensearch&&limit=1&format=json&search=" + input;
//   $.ajax({
//     url: firstURL,
//     method: "GET"
//   }).done(function(response){

//     var newDiv = $("<div id ='youtube'>");
//     // for(i = 0; i < response.items.length; i++){
//     //   var videos = response.items[i].id.videoId;
//     //   var vidTag = $("<iframe width='200' height='150' class='videos'>
//     //</iframe>").attr("src", "https://www.youtube.com/embed/" + videos);
//     //   newDiv.append(vidTag);
//     // }
//     //$("#htmlTag").append(newDiv);
//     console.log(response.items[i].id.videoId);

//   });

//   $.ajax({
//     url: secondURL,
//     method: "GET",
//     beforeSend: function(request){
//       request.setRequestHeader("Api-Key", gettyApi);
//     }

//   }).done(function(response){
//     var newDiv = $("<div id='getty'>");
//     //for(i = 0; i < 11; i++){
//       //var image = response.images[i].display_sizes[0].uri;
//       //var imageTag = $("<img>").attr("src", image);
//       //newDiv.append(imageTag);
//     //}
//     //$("#htmlTag").append(newDiv);
//     console.log(response);
//   });


// });


=======
  var input = $(".wiki-search-input").val().trim();
  var gettyApi = "9pmqn85smrhhhx3wq5zjhgk7";
  console.log(input);
  var firstURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q="+ input +"&type=video&key=AIzaSyB4_u1AG7P6ykJ68p080pjfIpjjZk7SJP0";
  var secondURL = "https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=best&phrase=" + input;
>>>>>>> 1c861e44b9c00e2a047d4bed67f088a02751515d
  $.ajax({
    url: thirdURL,
    method: "GET"
  }).done(function(response){
     console.log(response);
     console.log(thirdURL);
     $(".wiki-view").empty();

<<<<<<< HEAD
    var newDiv = $("<div class ='col-xs-12 search-div'>");
     
 
      var title = response.parse.title;
      var content = response.parse.text["*"];
     
=======
    var newDiv = $("<div class='col-md-3' id ='youtube'>");
    for(i = 0; i < response.items.length; i++){
      var videos = response.items[i].id.videoId;
      var vidTag = $("<iframe width='200' height='150' class='videos'>").attr("src", "https://www.youtube.com/embed/" + videos);
      newDiv.append(vidTag);
    }
    $(".youtube-view").html(newDiv);
    console.log(response);
>>>>>>> 1c861e44b9c00e2a047d4bed67f088a02751515d

      newDiv.append(title);
      newDiv.append(content);

<<<<<<< HEAD
    $(".wiki-view").append(newDiv);
=======
  }).done(function(response){
    var newDiv = $("<div class='col-md-3' id='getty'>");
    for(i = 0; i < 9; i++){
      var image = response.images[i].display_sizes[0].uri;
      var imageTag = $("<img width='200' height='150'>").attr("src", image);
      newDiv.append(imageTag);
    }
    $(".getty-view").html(newDiv);
>>>>>>> 1c861e44b9c00e2a047d4bed67f088a02751515d
    console.log(response);
  });


});
