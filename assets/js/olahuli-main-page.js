$(document).ready(function (event) {
    var baseURL = "olahuli-results.html#";

    $("#inputlg").on("keyup", function (event) {
        var inputVal = $(this).val().trim();
        console.log(inputVal);

        $(".add-search-data").attr("href", baseURL + inputVal);
    })

    //-----Code for user input to work on enter press-----------------------

    $(event).keypress(function (e) {

        var keycode = e.which;
        console.log(keycode);
        if (keycode == 13) {
            e.preventDefault();
            var href = $(".add-search-data").attr("href");
            console.log(href);
            window.location.href = href;

        }
    });
});

//-------------------------Modal Javascript-----------------------------------

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var login = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == login) {
        login.style.display = "none";
    }
}