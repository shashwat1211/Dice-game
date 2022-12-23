var randomnumber1 = Math.floor(Math.random()*6)+1;
var randomImageSource = "images/dice"+randomnumber1+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomnumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "images/dice"+randomnumber2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);


if(randomnumber1>randomnumber2){
    var winner = document.querySelector("h1");
    winner.innerHTML = "Player 1 wins!";
}
else if(randomnumber1<randomnumber2){
    var winner = document.querySelector("h1");
    winner.innerHTML = "Player 2 wins!";
}
else{
    var winner = document.querySelector("h1");
    winner.innerHTML = "Draw!";
}