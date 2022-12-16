const form = document.querySelector(".login-form");
const message = "Please fill in all the fields!";

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: {email, password}
    } = event.currentTarget;

if (email.value === "" || password.value === "") {
     alert(message);
}

console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}


// // Opracowanie przesyłania formularza form.login-form powinno przebiegać 
// zgodnie ze zdarzeniem submit.
// // Podczas przesyłania formularza strona nie powinna się restartować.
// // Jeśli w formularzu są nieuzupełnione pola, wprowadź alert 
// z upomnieniem o tym, że wszystkie pola powinny zostać wypełnione.
// // Jeśli użytkownik uzupełnił wszystkie pola i wysłał formularz, 
// zbierz wartość pól jako obiekt, gdzie nazwa pola będzie nazwą właściwości, 
// a wartość pola - wartością właściwości. 
// Aby otrzymać dostęp do elementów formularza użyj właściwości elements.
// // Umieść obiekt z wprowadzonymi danymi do wiersza poleceń i 
// wyczyść wartości pól formularza metodą reset.

// {/* <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form> */}