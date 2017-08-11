
$(document).on("click", "#button", function(){
  var input = $("#textInput").val().trim();


  var firstURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q="+ input +"&type=video&key=AIzaSyB4_u1AG7P6ykJ68p080pjfIpjjZk7SJP0";

  $.ajax({
    url: firstURL,
    method: "GET"
  }).done(function(response){

    var newDiv = $("<div id ='youtube'>";)
    // for(i = 0; i < response.items.length; i++){
    //   var videos = response.items[i].id.videoId;
    //   var vidTag = $("<iframe width='200' height='150' class='videos'>
    //</iframe>").attr("src", "https://www.youtube.com/embed/" + videos);
    //   newDiv.append(vidTag);
    // }
    //$("#htmlTag").append(newDiv);
    console.log(response.items[i].id.videoId);

  });


}));
