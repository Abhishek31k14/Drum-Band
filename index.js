
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var button = this.innerHTML;
        makeSound(button);

        buttonAnimantion(button);
    });

    
}
document.addEventListener("keydown",function(event){
    
        makeSound(event.key);

        buttonAnimantion(event.key);
})


function makeSound(button) {
    switch (button) {
        case "w":
            var tom1 = new Audio('tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var crash = new Audio('crash.mp3');
            crash.play();
            break;
        case "k":
            var kick = new Audio('kick-bass.mp3');
            kick.play();
            break;
        case "l":
            var snare = new Audio('snare.mp3');
            snare.play();
            break;

        default:console.log(button);
            break;
    }
}

function buttonAnimantion(key)
{
    var s=document.querySelector("."+key);
    s.classList.add("pressed");

    setTimeout(function(){
        s.classList.remove("pressed");
    },100);
}