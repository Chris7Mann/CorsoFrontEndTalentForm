// dichiarazione
let primaVariabile;
console.log(primaVariabile);
// inizializzazione
primaVariabile = "sono la prima variabile";
console.log(primaVariabile);
// dichiarazione e inizalizzazione
let secondaVariabile = 100;
console.log(secondaVariabile);
// riassegnazione
secondaVariabile = true;
console.log(secondaVariabile);

let divisore = 2;
let dividendo = 27;

console.log(divisore != 0 && dividendo > 5);

// esercizi
// 1.Scrivi nella console la concatenazione delle tre parti della scrittura 'ciao a tutti';

let uno = "ciao";
let due = "a";
let tre = "tutti";

// soluzione uno
console.log(uno + " " + due + " " + tre);
// soluzione due
console.log(`${uno} ${due} ${tre}`);

//2. Dichiara una variabile e assegnale un valore numerico. Cambia il valore della variabile aggiungendole 10

let num1 = 5;
num1 += 10;
console.log(num1);

//3. Stampa sulla console il risultato del confronto tra due variabili numeriche per verificare se la prima è maggiore della seconda.

let numero1 = 5;
let numero2 = 7;

console.log(numero1 > numero2);


//4. Calcola l’area di un rettangolo i cui lati sono lunghi rispettivamente 4 e 6. Stampa il risultato nella console;

let base = 4;
let altezza = 6;

console.log(`l'area del rettangolo è ${base * altezza}`);


//5. Stampa sulla console il risultato del confronto tra un numero e una stringa per verificare se sono diversi di valore o di tipo.

let num = 5;
let str = '5';

console.log(num !== str);

//6. Stampa sulla console il risultato del confronto tra due numeri per verificare se il primo numero è minore-uguale del secondo.

const n1 = 5;
const n2 = 10;

console.log(n1 <= n2);

// 7. Stampa sulla console il risultato del confronto tra due numeri per verificare se il primo numero è diverso dal secondo.

const number1 = 5;
const number2 = 10;

console.log(number1 != number2);

// 8. Date due variabili valutare se valore1 è maggiore di 0 e valore2 è minore di 20, oppure se valore1 è uguale a 5.

const valore1 = 5;
const valore2 = 15;

console.log(valore1 > 0 && valore2 < 20 || valore1 === 5 );

// 9 Date due stringhe valutare se stringa1 non è vuota e stringa2 non è la parola "treno".

const stringa1 = "";
const stringa2 = "casa";

console.log(stringa1 != '' && stringa2 != 'treno');

console.log(stringa1.length > 0 && stringa2 !== "treno");

// 10. Dati tre numeri valutare se: valore1 è maggiore di zero oppure valore2 è minore di venti. Queste condizioni devono verificarsi insieme a valore3 compreso tra 10 e 20.
const val1 = 5;
const val2 = 10;
const val3 = 15;
console.log((val1 > 0 || val2 < 20) && val3 >= 10 && val3 <= 20);



