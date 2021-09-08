    var areNahiBhai = new Audio("assetes/sounds/areNahiBhai.mp3");
    var previousSubtitle = document.getElementById("subtitle").innerHTML;
    
    function arreNahiBhai() {
        var subheading = document.getElementById("subtitle");
        subheading.innerHTML = "🤓🧐";

    setTimeout(function () { subheading.innerHTML = previousSubtitle; }, 7000);
    areNahiBhai.play();
}
document.getElementById("title").addEventListener("click", function () {
    arreNahiBhai();
});

var noOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < noOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var instrument = document.querySelectorAll(".drum")[i];
        this.classList.add("pressed");
        setTimeout(function () { instrument.classList.remove("pressed"); }, 200);
        var key = this.innerHTML;
        makeSound(key);
    });
}

document.addEventListener("keypress", function (event) {
    var key = this.innerHTML;

    makeSound(event.key)
    keyColour(event.key)
});

function makeSound(key) {
    key = key.toLowerCase();
    switch (key) {
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

function keyColour(key) {
    key = key.toLowerCase();

    if (key === ";") {
        var instrument = document.querySelector(".baby");
        instrument.classList.add("pressed");
        setTimeout(function () { instrument.classList.remove("pressed"); }, 150);
    }
    else if (key === "f") {
        arreNahiBhai();
    }
    else if (key == "a" || key == "s" || key == "d" || key == "j" || key == "k" || key == "l") {
        var instrument = document.querySelector("." + key)
        instrument.classList.add("pressed");
        setTimeout(function () { instrument.classList.remove("pressed"); }, 200);
    }
}