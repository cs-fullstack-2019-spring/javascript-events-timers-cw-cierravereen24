
//prevents the user from clicking the check box and delivering them a message
document.querySelector("#check").addEventListener("click", function(e)
{
    document.getElementById("box").innerHTML += "Didn't <code>preventDefault()</code> I tell you not to click the box. I hope you get a virus!<br>";
    event.preventDefault();
}, false);