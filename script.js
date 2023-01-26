// CODE VOOR DE MENU 
var menuButton = document.querySelector("button");
var menuSee = document.querySelector("header nav ul");

function menuverschijnt(){
  menuButton.classList.toggle("change");
  menuSee.classList.toggle("terug")

}

menuButton.addEventListener("click", menuverschijnt);




var addTo = document.querySelector("#calender")

function displayPhrase(){
    document.querySelector("#calender").innerHTML = 'Added to calender!';
}

addTo.addEventListener("click", displayPhrase);