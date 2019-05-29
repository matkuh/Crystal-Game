var targetNumber = "";
var yourScore = 0;
var wins = 0;
var losses = 0;

$(document).ready(function() {

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

var targetNumber = getRndInteger(19, 120)

var img1Val = getRndInteger(1, 13)
var img2Val = getRndInteger(1, 13)
var img3Val = getRndInteger(1, 13)
var img4Val = getRndInteger(1, 13)

function reset() {
    targetNumber = getRndInteger(19, 120)
    img1Val = getRndInteger(1, 13)
    img2Val = getRndInteger(1, 13)
    img3Val = getRndInteger(1, 13)
    img4Val = getRndInteger(1, 13)
    yourScore = 0;
}

function checkScore() {
    if ((yourScore) === (targetNumber)) {
    alert("Nice Job! You've successfully made some Wildfire.  The Mad King will be pleased!")
    wins++
    reset();
}    
    else if ((yourScore) > (targetNumber)) {
    alert("AHHHHHH IT BURNS AHHHH")
    losses++
    reset();
}
    $("#currentScore").html(yourScore);
    $("#targNumb").html(targetNumber);
    $("#wins").html(wins);
    $("#losses").html(losses);
}

checkScore();

$("#img1").on("click", function() {
    yourScore += img1Val;
    checkScore();
})
$("#img2").on("click", function() {
    yourScore += img2Val; 
    checkScore();
})
$("#img3").on("click", function() {
    yourScore += img3Val; 
    checkScore();
})
$("#img4").on("click", function() {
    yourScore += img4Val; 
    checkScore();
})


});
