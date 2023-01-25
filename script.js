// CODE VOOR DE MENU 
var menuButton = document.querySelector("button");
var menuSee = document.querySelector("header nav ul");

function menuverschijnt(){
  menuButton.classList.toggle("change");
  menuSee.classList.toggle("terug")

}

menuButton.addEventListener("click", menuverschijnt);