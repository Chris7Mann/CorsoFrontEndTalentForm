/**
 * Array di 60 nomi 
 */
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

  console.log(nomi.length);

  let text = 'Diamo il benvenuto a ';
  
 for (let i = 0; i < nomi.length; i++) {
    const nome = nomi[i] ;
    text += nome + ', ';
 };

console.log(text);

//--------------------------------------------------------------------------------------------------------------------------------------------------

let risultato = '';

for (let i = 0; i < 10; i++) {
   if(i != 3 && i != 7){
      risultato += i + ', ';
   }
} 

console.log(risultato);



//--------------------------------------------------------------------------------------------------------------------------------------------------

// ESERCIZI 

//1. Data una stringa e un numero N,  stampa N volte la stringa.

let saluto = 'ciao';
risultato = '';
let numb = 4;

for (let i = 0; i < numb; i++) {
   // console.log(saluto);
   risultato += saluto + ', ';
}
console.log(risultato);

//2. Scrivere un ciclo for che iteri da 0 a 20. Ad ogni iterazione verificherà se il numero è pari o dispari. 
// Dopo il ciclo stampa nella console le due stringhe seguenti: Numeri pari = 0, 2, 4,… Numeri dispari = 1, 3, 5…

let numeriPari = ''; 
let numeriDispari = '';

for (let i = 0; i <= 20; i++) {
   if( i % 2 === 0){
      numeriPari += i + ', ';
      
   }else{
      numeriDispari += i + ', ';
   }
}
console.log('Pari = ' + numeriPari.slice(0, -2))
console.log('Dispari = ' +numeriDispari.slice(0, -2))