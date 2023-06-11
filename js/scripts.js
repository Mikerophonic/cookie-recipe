window.onload = function() {
    let light = document.getElementById("light");
    let body = document.querySelector("body");
    let dark = document.getElementById("dark")
    let regular = document.getElementById("regular");
    let jumbo = document.getElementById("jumbo");

    light.onclick = function() {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
    dark.onclick = function() {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
    regular.onclick = function() {
        body.style.fontSize = "18px";
    }
    jumbo.onclick = function() {
        body.style.fontSize = "42px";
    }
}