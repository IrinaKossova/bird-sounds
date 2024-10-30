let count=0;

while (count<7)
{
document.querySelectorAll(".bird")[count].addEventListener("click",function() {
  let buttonInnerHtml= this.innerHTML;
  playSound(buttonInnerHtml);
  birdsAnimation(buttonInnerHtml);
  });
count++;
}

document.addEventListener("keypress",function(event){
  this.key;
  playSound(event.key);
  birdsAnimation(event.key);
});

function playSound(xyz){

  switch (xyz) {
      case "bittern":
      let sound1 = new Audio("sounds/bittern.mp3");
      sound1.play();
            break;
      case "bustard":
      let sound2 = new Audio("sounds/bustard.mp3");
      sound2.play();
            break;
      case"koel":
      let sound3 = new Audio("sounds/koel.mp3");
      sound3.play();
             break;
      case"nightjar":
      let sound4 = new Audio("sounds/nightjar.mp3");
      sound4.play();
             break;
      case"pigeon":
      let sound5 = new Audio("sounds/pigeon.mp3");
      sound5.play();
              break;
      case"puffin":
      let sound6 = new Audio("sounds/puffin.mp3");
      sound6.play();
              break;
      case"seagull":
      let sound7 = new Audio("sounds/seagull.mp3");
      sound7.play();
              break;
    default: console.log(xyz);
  }
}

function birdsAnimation(sentButton){
  let activeButton=document.querySelector("."+sentButton);
  activeButton.classList.add("pressed");

  setTimeout(function(){
         activeButton.classList.remove("pressed"); },100);
  }