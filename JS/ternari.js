/* 
Il confronto ternario in JavaScript è un modo compatto per scrivere un'istruzione if...else.

Sintassi

condizione ? valore_se_vero : valore_se_falso;

Come funziona
Se la condizione è vera (true), viene eseguito (o restituito) valore_se_vero.

Se la condizione è falsa (false), viene eseguito (o restituito) valore_se_falso.

---------------------------------------------------------------------------------
Esempio semplice

let età = 20;
let messaggio = età >= 18 ? "Sei maggiorenne" : "Sei minorenne";
console.log(messaggio);


----- In questo esempio:

La condizione è età >= 18

Se è vera, messaggio sarà "Sei maggiorenne"

Se è falsa, messaggio sarà "Sei minorenne"

Equivalente con if...else

let messaggio;
if (età >= 18) {
  messaggio = "Sei maggiorenne";
} else {
  messaggio = "Sei minorenne";
}
Quando usarlo?
Il ternario è utile per espressioni semplici, soprattutto quando vuoi assegnare un valore in base a una condizione. 
Ma se la logica è più complicata, è meglio usare if...else per chiarezza.


-------------------------------------------------------------------------------------------------------------------------*/



// 2. Dichiara le variabili a, b e assegna a ciascuna un valore. 
// Se le variabili a e b sono uguali fra di loro come valore e tipo. 
// stampare sulla console il valore di una delle due altrimenti stampare “differenti”;

// Confronto con operatore ternario (confronto per valore e tipo con ===)

// Esempio con valori diversi:
let a = 5;
let b = 'cinque';

console.log( a === b ? a : 'differenti');

// se fossero uguali 
b = 5;
console.log( a === b ? a : 'differenti');

//3 Dichiara una variabile nome e assegnale un valore. 
// Se il valore di nome è uguale ad “Anna” stampare sulla console "mamma", altrimenti stringa vuota (cioè "");


// Dichiarazione e assegnazione della variabile nome
let nome = "Anna";

console.log(nome == 'Anna' ? 'mamma' : '');

nome = 'Maria';
console.log(nome == 'Anna' ? 'mamma' : '');

//4.Dichiara una variabile gradi e assegnale un valore . 
// Se il valore della variabile gradi è maggiore di 100 
// stampare sulla console “sala e butta la pasta” altrimenti “aspetta ancora un attimo”

let gradi = 90;

console.log(gradi > 100 ? "sala e butta la pasta" : "aspetta ancora un attimo");

gradi = 105;

console.log(gradi > 100 ? "sala e butta la pasta" : "aspetta ancora un attimo");

