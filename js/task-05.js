const span = document.querySelector("#name-output");
const nameVal = document.querySelector("#name-input");

nameVal.addEventListener("input", () => {
   // span.innerHTML = nameVal.value;
   if (parseInt(nameVal.length) === 0) {
      span.innerHTML = "Anonymous"
   } else {
      span.innerHTML = nameVal.value
   }
})

// nameVal.addEventListener("input", spanValue)

// if (currentTarget.value) {nameVal.value} else {span.textContent = "Anonymous"};

// if (parseInt(nameVal.length) === 0) {
//    span.textContent = "Anonymous"
// } else {
//    span.textContent = currentTarget.value;
// }

// if wykonuje sie tylko raz w tej chwili na początku jak odpalisz stronę, jak zmieniasz wartość w inpucie wykonuje Ci sie tylko funkcja spanValue()

// Napisz skrypt, który przy wpisywaniu tekstu w polu input input#name-input (zdarzenie input) wstawia jego aktualną wartość do span#name-output. Jeśli pole input jest puste, w spanie powinien wyświetlić się komunikat "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>