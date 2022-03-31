// JSnack 2
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

const numbers = [];

let i = 1;

while (i <= 6) {
  let userNumber = prompt("Inserisci un numero:");
  i++;
  // console.log(userNumber);
  if (userNumber % 2 == 1) {
    numbers.push(userNumber);
  }
}

if (numbers.length > 0) {
  document.getElementById(
    "app"
  ).innerHTML = `Ecco la lista dei numeri dispari: ${numbers}`;
} else {
  document.getElementById(
    "app"
  ).innerHTML = `Non hai digitato nessun numero dispari!`;
}
