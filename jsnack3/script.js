// JSnack 3
// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.

let userNumber = prompt("Inserisci un numero positivo intero di 4 cifre:");

let integer = Number.isInteger(parseFloat(userNumber));
// console.log(parseFloat(userNumber));

// l'eccezione userNumber[0] === "-" non permette all'utente di inserire un numero negativo e gestisce anche il caso in cui l'utente scriva -000

if (
  userNumber.length !== 4 ||
  isNaN(userNumber) ||
  !integer ||
  userNumber[0] === "-"
) {
  alert(
    "Non hai inserito un numero positivo intero di 4 cifre: riaggiorna e riprova."
  );
} else if (userNumber.length === 4 && !isNaN(userNumber) && userNumber >= 0) {
  let somma = 0;
  for (let i = 0; i < userNumber.length; i++) {
    somma += parseInt(userNumber[i]);
  }
  document.getElementById("app").innerHTML =
    "<p>Il tuo numero è: " + userNumber + "<p>";
  document.getElementById("app").innerHTML +=
    "<p>La somma di tutte le cifre che compongono il tuo numero è: " +
    somma +
    "<p>";
}
