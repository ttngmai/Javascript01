// var radius = document.querySelector("#radius");
var radius = document.querySelector("#radius");
var start = document.querySelector("#start");

var round = document.querySelector("#round");
var area = document.querySelector("#area");

start.addEventListener("click", function calcCircle() {
    console.log(radius.value);
    round.value = 2 * Math.PI * Number(radius.value);
    area.value = Math.PI * Math.pow(Number(radius.value), 2);
});