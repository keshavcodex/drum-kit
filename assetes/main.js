var previousSubtitle = document.getElementById("subtitle").innerHTML;
var subtitleText = "Main kya kru fir job chhod du? 😐😪";

var areNahiBhai = new Audio("assetes/sounds/areNahiBhai.mp3");
document.getElementById("title").addEventListener("click", function (){
    setTimeout(function(){ document.getElementById("subtitle").innerHTML = previousSubtitle; }, 7000);
    setTimeout(function(){ document.getElementById("subtitle").style.color = "white"; }, 7000);
    document.getElementById("subtitle").style.color = "springgreen";
    document.getElementById("subtitle").innerHTML = subtitleText;
    areNahiBhai.play();
});

var noOfDrumButtons = document.querySelectorAll(".drum").length;

for(let i = 0; i < noOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        for(let j = 0; j < noOfDrumButtons; j++){
            document.getElementsByClassName("drum")[j].style.color = "crimson";
        }
        this.style.color = "cyan"
        var key = this.innerHTML;
        makeSound(key);
    });
}

document.addEventListener("keypress", function(event){
    var key = this.innerHTML;

    makeSound(event.key)
    keyColour(event.key)
});

function makeSound(key){
    switch(key){
        case "a": 
            var audio = new Audio("assetes/sounds/tom1.mp3");
                audio.play();
        break;
        case "s": 
            var audio = new Audio("assetes/sounds/tom3.mp3");
                audio.play();
            break;
        case "d": 
            var audio = new Audio("assetes/sounds/crash.mp3");
                audio.play();
            break;
        case ";": 
            var audio = new Audio("assetes/sounds/baby.mp3");
                audio.play();
            break;
        case "j": 
            var audio = new Audio("assetes/sounds/tom2.mp3");
                audio.play();
            break;
        case "k": 
            var audio = new Audio("assetes/sounds/snare.mp3");
                audio.play();
            break;
        case "l": 
            var audio = new Audio("assetes/sounds/tom4.mp3");
                audio.play();
            break;
        case "f": areNahiBhai.play();

    }
}
function keyColour(key){
    for(let j = 0; j < noOfDrumButtons; j++){
        document.getElementsByClassName("drum")[j].style.color = "crimson";
    }
    switch(key){
        case "a": 
           document.querySelector(".a").style.color="white";
        break;
        case "s": 
            document.querySelector(".s").style.color="cyan";
            break;
        case "d": 
            document.querySelector(".d").style.color="indigo";
            break;
        case ";": 
            document.querySelector(".baby").style.color="darkslategray";
            break;
        case "j": 
            document.querySelector(".j").style.color="yellow";
            break;
        case "k": 
            document.querySelector(".k").style.color="maroon";
            break;
        case "l": 
            document.querySelector(".l").style.color="cornsilk";
            break;
        case "f": 
            setTimeout(function(){ document.getElementById("subtitle").innerHTML = previousSubtitle; }, 7000);
            setTimeout(function(){ document.getElementById("subtitle").style.color = "white"; }, 7000);
            document.getElementById("subtitle").style.color = "springgreen";
            document.getElementById("subtitle").innerHTML = subtitleText;
            break;
    }
}