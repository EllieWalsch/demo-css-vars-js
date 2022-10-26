const h1 = document.querySelector("h1");
const h2 = document.querySelector(".art-title");

const input = document.querySelector(".art-title");

// selects all buttons on the page
const buttons = document.querySelectorAll("button");

// adds event listener to all buttons
buttons.forEach(function (button) {
  button.addEventListener("click", handleClick);
  // when we click, then do this function "handleClick"
});

// calls back event listener
function handleClick(event) {
  const currentFontSize = Number.parseFloat(
    getComputedStyle(h2).getPropertyValue("--font-size")
  );

  // Use 'target' to get the specific button that was clicked
  if (event.target.id === "increase") {
    // .id pulls the value of the id so it reads more clear
    h2.style.setProperty("--font-size", currentFontSize + 0.05 + "em");
  } else {
    // decrease
    h2.style.setProperty("--font-size", currentFontSize - 0.05 + "em");
  }
}

// getComputedStyle all css styles of h2 - turns it into an object for JS to read
// getPropertyValue picks the exact one you want

// Number.parseFloat turns string into a number so we can add an increase (+0.05)

// GRAB CODE FOR CHANGING h1 COLOR
