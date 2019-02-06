//the flag for the function the know what to do
var  flagg = false;

var btn = document.getElementById("btn");
var  txt = document.getElementById("texxt");

// WHne the button is clicked it will disable the textarea
btn.addEventListener("click", function(e){
    console.log("click button");
    if (flagg){
        txt.setAttribute("disabled", "");
        flagg = false;
    }
    else{
        //toggles the disable function
        txt.removeAttribute(("disabled"));
        flagg = true;

    }
});