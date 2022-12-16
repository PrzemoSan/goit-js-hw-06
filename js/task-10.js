const box = document.getElementById("boxes");
const input = document.querySelector("input");
const creation = document.querySelector("[data-create");
const destruction = document.querySelector("[data-destroy]");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
let amount = 0;
input.addEventListener("input", (ev) => {
  amount = Number(ev.currentTarget.value);
  console.log("creation", amount);
});
// destruction.addEventListener("click", (ev) => {
//   amount = 0;
//   input.value = 0;
//   console.log("destr", amount);
// });
console.log(creation);
creation.addEventListener("click", createBoxes);
function createBoxes() {
  console.log("input:", input.value);
  console.log("creating...", typeof amount);
  for (let i = 1; i <= amount; i++) {
    console.log("creating..");
    const newBox = document.createElement("div");
    box.append(newBox);
    let sizer = 20 + i * 10;
    newBox.style.width = `${sizer}px`;
    newBox.style.height = `${sizer}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    console.log(newBox);
  }
};;


// const create = document.querySelector(`button[data-create]`);
// const destroy = document.querySelector(`button[data-destroy]`);
// const input = document.getElementsByTagName("input");
// const box = document.getElementById("boxes");

// const createBoxes = (amount) => {

// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// button.addEventListener("click", createBoxes)

// Write a script to create and clear a collection of elements. 
// The user enters the number of elements into input and clicks the New button, 
// after which a collection is rendered. When you click on the Clear button, 
// the collection is cleared.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Create a createBoxes(amount) function that takes one parameter, a number. 
// The function creates as many <div> as specified in amount and 
// adds them to div#boxes.

// The dimensions of the very first <div> are 30px by 30px.
// Each element after the first one should be 10px wider and higher than the 
// previous one.
// All elements must have a random HEX background color. Use the ready-made 
// getRandomHexColor function to get a color.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Create a destroyBoxes() function that clears the contents of div#boxes, 
// thereby removing all created elements.