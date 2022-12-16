
const button = document.querySelector(".change-color");
const span = document.querySelector(".color");

const change = () => {
  const newColor = getRandomHexColor();
  span.innerHTML = newColor;
  document.body.style.backgroundColor = newColor;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

button.addEventListener("click", change) 

// Write a script that changes the background colors of the <body> element 
// via inline style when clicking on button.change-color 
// and outputs the color value to span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Use the getRandomHexColor function to generate a random color.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }-+
