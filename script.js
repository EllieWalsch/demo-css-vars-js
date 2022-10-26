const h1 = document.querySelector("h1");
const h2 = document.querySelector(".art-title");

// selects all buttons on the page
const buttons = document.querySelectorAll("button");

function handleClick(event) {
  // Use 'target' to get the specific button that was clicked
  console.log(event.target.id);
}

buttons.forEach(function (button) {
  button.addEventListener("click", handleClick);
});

// adds event listener to all buttons
// buttons.forEach(funtion (button) {
//   button.addEventListener("click", function(event){
// use "target" to get the specific button that was clicked (increase or decrease)
// console.log(event.target.id)
// .id pulls the value of the id so it reads more clear
// })
// })
