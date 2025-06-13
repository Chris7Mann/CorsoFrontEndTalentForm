// ciclo for of ---- introdotto dal 2015

const frutta = ["mela", "banana", "arancia"];

for (let frutto of frutta) {
  console.log(frutto);
}

numeri = [1, 2, 3, 45, 30, 67, 100, 8, 9];

for (const numero of numeri) {
  if (numero < 4 || numero > 10) {
    console.log(numero);
  }
}

//1.Scrivi un programma che prenda un array di numeri e calcoli la somma di tutti gli elementi.

number = [1, 2, 3, 45, 30, 67, 100, 8, 9];
somma = 0;

for (const numb of number) {
  somma += numb;
}

console.log("la somma di numeri nell array è " + somma);

// ---------------------------------------------------------

//2.Scrivi un programma che prenda un array di stringhe e le concateni in un'unica stringa.

stringhe = ["STARWAY ", "TO ", "HEAVEN"];
text = "";
for (let stringa of stringhe) {
  text += stringa;
}
console.log(text);

let nomi = [
  "Marco",
  "Giulia",
  "Alessandro",
  "Sofia",
  "Francesco",
  "Chiara",
  "Lorenzo",
  "Martina",
  "Andrea",
  "Giorgia",
  "Matteo",
  "Sara",
  "Luca",
  "Federica",
  "Davide",
  "Valentina",
  "Giovanni",
  "Elisa",
  "Simone",
  "Alice",
  "Roberto",
  "Eleonora",
  "Filippo",
  "Beatrice",
  "Alberto",
  "Francesca",
  "Riccardo",
  "Ludovica",
  "Pietro",
  "Alessia",
  "Emma",
  "Noah",
  "Olivia",
  "Liam",
  "Ava",
  "William",
  "Isabella",
  "James",
  "Sophia",
  "Benjamin",
  "Mia",
  "Lucas",
  "Charlotte",
  "Alexander",
  "Amelia",
  "Daniel",
  "Harper",
  "Henry",
  "Evelyn",
  "Michael",
  "Abigail",
  "David",
  "Emily",
  "Joseph",
  "Ella",
  "Matthew",
  "Scarlett",
  "Samuel",
  "Grace",
  "John",
];

result = "Diamo il benvenuto a ";
for (nome of nomi ) {
  result += nome + ", ";
}
console.log(result);

//1. dato un array di numeri interrompere il ciclo se viene trovato il numero 14. 
// Nel resto dei casi stampare i numeri

numbSerie = [6, 77, 8, 21, 14, 5, 0, 40];

for (const res of numbSerie) {
    if(res === 14){
        break; // usare 'continue' al posto di 'break' se si vuole saltare l iterazione quando trova il numero 14
    } 
    console.log(res)
};