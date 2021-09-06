var previousSubtitle = document.getElementById("subtitle").innerHTML;
var subtitleText = "Main kya kru fir job chhod du? 😐😪";

var audio = new Audio("sounds/areNahiBhai.mp3");
document.getElementById("title").addEventListener("click", function (){
    setTimeout(function(){ document.getElementById("subtitle").innerHTML = previousSubtitle; }, 7000);
    audio.play();
    document.getElementById("subtitle").innerHTML = subtitleText;
});

var noOfDrumButtons = document.querySelectorAll(".drum").length;

for(let i = 0; i < noOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        for(let j = 0; j < noOfDrumButtons; j++){
            document.getElementsByClassName("drum")[j].style.color = "crimson";
        }
        this.style.color = "cyan"
        var drumName = this.innerHTML;
        switch(drumName){
            case "a": 
                var audio = new Audio("sounds/tom1.mp3");
                    audio.play();
            break;
            case "s": 
                var audio = new Audio("sounds/tom3.mp3");
                    audio.play();
                break;
            case "d": 
                var audio = new Audio("sounds/crash.mp3");
                    audio.play();
                break;
            case "&nbsp;": 
                var audio = new Audio("sounds/baby.mp3");
                    audio.play();
                break;
            case "j": 
                var audio = new Audio("sounds/tom2.mp3");
                    audio.play();
                break;
            case "k": 
                var audio = new Audio("sounds/snare.mp3");
                    audio.play();
                break;
            case "l": 
                var audio = new Audio("sounds/tom4.mp3");
                    audio.play();
                break;
        }
    });
}