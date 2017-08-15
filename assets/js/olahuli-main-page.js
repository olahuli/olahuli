
var baseURL = "olahuli-results.html#";


$("#inputlg").on("change", function(event){
	var inputVal = $(this).val().trim();
	console.log(inputVal);

	$(".add-search-data").attr("href", baseURL + inputVal);
})