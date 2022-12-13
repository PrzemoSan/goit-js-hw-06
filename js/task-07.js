const inputVal = document.querySelector("#font-size-control");
const spanVal = document.querySelector("#text");

const fontVal = () => {
    spanVal.style.fontSize = `${inputVal.value}px`;
}

inputVal.addEventListener("input", fontVal)



// Napisz skrypt, który reaguje na zmianę wartości input#font-size-control (zdarzenie input) 
// i zmienia styl inline span#text aktualizując właściwość font-size. 
// W rezultacie, podczas przeciągania paska przesuwania będzie zmieniał się rozmiar tekstu.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>