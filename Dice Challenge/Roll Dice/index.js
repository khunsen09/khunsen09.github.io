var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDice = "dice" + randomNumber1 + ".png";

var randomImage = "images/" + randomDice;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImage);


var randomDigit = Math.floor(Math.random() * 6) + 1;

var randomSource= "images/dice" + randomDigit + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomSource);

if (randomImage > randomSource) {
    document.querySelector("h1").innerHTML = "Player 1 Won!"
}
else if (randomImage < randomSource) {
    document.querySelector("h1").innerHTML = ("Player 2 Won!")
}
else  {
    document.querySelector("h1").innerHTML = ("Draw!")
}








