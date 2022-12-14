const span = document.getElementById("name-output")
const input = document.getElementById("name-input")

console.log(span)
span.innerHTML = "Anonymous"


function typeIn () {
   if (parseInt(input.value.length) === 0) {
      span.innerHTML = "Anonymous"
   } else {
      span.innerHTML = input.value
   }
}

input.addEventListener('input', typeIn);