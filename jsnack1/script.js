//  JSnack 1
//  In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

let invitati = [
  "Peppe",
  "Mario",
  "Luca",
  "Maria",
  "Topolino",
  "Michela",
  "Genoveffa",
  "Matilde",
  "Giacomo",
];

let userName = prompt("Digita il tuo nome (con iniziale maiuscola):");

if (invitati.includes(userName)) {
  alert("Fai parte degli invitati, buon divertimento!");
} else {
  alert("Mi dispiace, non sei invitato alla festa!");
}
