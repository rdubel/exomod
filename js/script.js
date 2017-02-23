// var textElement = document.getElementById("text");
//
// function myFunction() {
//     var resultElement = document.getElementById("result");
//
//     var xd = textElement.value;
//
//         xd = xd.replace(/:D|:O|:\)|\(/g, "--");
//
//
//     resultElement.innerHTML = xd;
// };

$(document).ready(function() {
    $("#btn").on("click", function() {
        var text = $("#text").val().replace(/:D|:O|:\)|:\(/g, "--");
        $("#result").html(text);
    });
});
