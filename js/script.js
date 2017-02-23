var textElement = document.getElementById("text");

function myFunction() {
    var resultElement = document.getElementById("result");

    var xd = textElement.value;

        xd = xd.replace(/:D|:O|:\)|\(/g, "--");


    resultElement.innerHTML = xd;
};
