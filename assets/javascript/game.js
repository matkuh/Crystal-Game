var targetNumber = "";
var yourScore = 0;
var wins = 0;
var losses = 0;

$(document).ready(function() {

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

var targetNumber = getRndInteger(19, 121)

var img1Val = getRndInteger(1, 13)
var img2Val = getRndInteger(1, 13)
var img3Val = getRndInteger(1, 13)
var img4Val = getRndInteger(1, 13)

function reset() {
    targetNumber = getRndInteger(19, 121)
    img1Val = getRndInteger(1, 13)
    img2Val = getRndInteger(1, 13)
    img3Val = getRndInteger(1, 13)
    img4Val = getRndInteger(1, 13)
    yourScore = 0;
}

function checkScore() {
    if ((yourScore) === (targetNumber)) {
    alert("You've successfully made some Wildfire.  The Mad King will be pleased!")
    wins++
    $('#bodywrap').css('background-image','url(https://media.giphy.com/media/kjFyZgX4rSZby/giphy.gif)');
    reset();
}    
    else if ((yourScore) > (targetNumber)) {
    alert("You've added too much! The cauldron erupts and engulfs you in fire! AHHHHHHHHHHHHHHHHH")
    losses++
    $('#bodywrap').css('background-image','url(http://24.media.tumblr.com/tumblr_m4qbxmaTU51qkvue8o2_500.gif)');
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
