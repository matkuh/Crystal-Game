var targetNumber = "";
var yourScore = 0;
var wins = 0;
var losses = 0;

$(document).ready(function() {

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

var targetNumber = getRndInteger(19, 120)

var img1Val = getRndInteger(1, 12)
var img2Val = getRndInteget(1, 12)
var img3Val = getRndInteget(1, 12)
var img3Val = getRndInteget(1, 12)

function reset() {
    var targetNumber = getRndInteger(19, 120)
    var img1Val = getRndInteger(1, 12)
    var img2Val = getRndInteget(1, 12)
    var img3Val = getRndInteget(1, 12)
    var img3Val = getRndInteget(1, 12)
    var yourScore = 0;
}

function checkScore() {
    if ((yourScore) === (targetNumber));
    alert("Nice Job! You've successfully made the potion")
    wins++
    reset();
    
    if ((yourScore) > (targetNumber));
    alert("The witch's cauldron explodes in your face, Boom!!! You've added to much!!!")
    losses++
    reset();
}

$("#img1").on("click", function() {
    yourScore + img1Val; 
    checkScore();
    


});
