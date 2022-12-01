
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);
}

function handleclick() {
  var buttoninnerHTML = this.innerHTML;
  makesound(buttoninnerHTML);
  buttonAnimation(buttoninnerHTML);



};

document.addEventListener("keypress", function(event) {
  makesound(event.key);
  buttonAnimation(event.key);
});

function makesound(key) {

  switch (key) {
    case "w":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;
    case "a":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "s":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "d":
      var tom = new Audio("sounds/tom-2.mp3");
      tom.play();
      break;
    case "j":
      var tom = new Audio("sounds/tom-3.mp3");
      tom.play();
      break;
    case "k":
      var tom = new Audio("sounds/tom-4.mp3");
      tom.play();
      break;
    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log(innerHTML);
  }
}
function buttonAnimation(flash){
  var activeButton = document.querySelector("."+flash)
  activeButton.classList.add("pressed");

  setTimeout(function(){
      activeButton.classList.remove("pressed");
  },100);
};
