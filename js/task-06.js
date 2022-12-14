const inputVal = document.querySelector("#validation-input");
const lengthVal = inputVal.getAttribute("data-length"); 

console.log(lengthVal)
console.log(`value`, inputVal)

inputVal.addEventListener("blur", () => {
    console.log(`klasy`,inputVal.classList)
    console.log(`długość`, inputVal.value.trim().length)
    if (parseInt(lengthVal) === inputVal.value.trim().length) {
        inputVal.classList.add("valid")
        inputVal.classList.remove("invalid")
    } else {
        inputVal.classList.add("invalid")
        inputVal.classList.remove("valid")
    }
});



// Napisz skrypt, który przy utracie fokusu na polu input (zdarzenie blur) sprawdza jego zawartość na prawidłową liczbę wprowadzonych symboli.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Informacja o liczbie symboli, która powinna znajdować się w polu input, pokazuje się w jego atrybucie data-length.
// Jeśli wprowadzono odpowiednią liczbę symboli, to border pola input staje się zielone, a jeśli liczba jest nieprawidłowa - czerwone.
// Aby dodać style, używaj klas CSS valid i invalid, które już dodaliśmy do plików źródłowych zadania.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }