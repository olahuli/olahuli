$(document).ready(function(event){
var baseURL = "olahuli-results.html#";


$("#inputlg").on("keyup", function(event){
	var inputVal = $(this).val().trim();
	console.log(inputVal);

	$(".add-search-data").attr("href", baseURL + inputVal);
})

  $(event).keypress(function(e){

    var keycode = e.which;
    console.log(keycode);
    if(keycode == 13){
      e.preventDefault();
      var href = $(".add-search-data").attr("href");
      console.log(href);
      window.location.href = href;
      
    }
  });

});