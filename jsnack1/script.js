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

let i = 0;

let userName = prompt("Digita il tuo nome (con iniziale maiuscola):");

if (invitati.includes(userName)) {
  alert("Fai parte degli invitati, buon divertimento!");
} else {
  alert("Mi dispiace, non sei invitato alla festa!");
}
