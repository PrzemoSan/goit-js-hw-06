let span = document.querySelector("#value");
let counterValue = parseInt(document.querySelector("#value").textContent);
console.log(typeof counterValue)


const buttonDec = document.querySelector(`button[data-action = "decrement"]`);
const buttonInc = document.querySelector(`button[data-action = "increment"]`);

const decrement = () => {
    counterValue -= 1;
    span.innerHTML = `<span id="value">${counterValue}</span>`;
}

const increment = () => {
    counterValue += 1;
    span.innerHTML = `<span id="value">${counterValue}</span>`;
}

buttonDec.addEventListener("click", decrement)
buttonInc.addEventListener("click", increment)
