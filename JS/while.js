    // Cos'è il ciclo while?
    // Il ciclo while in JavaScript è una struttura di controllo che permette di eseguire un blocco di codice 
    // ripetutamente fintanto che una condizione specificata rimane vera (true). Quando la condizione diventa falsa (false), 
    // il ciclo termina e il programma continua con l'istruzione successiva

// while (condizione) {
// Blocco di codice da eseguire
// }

// condizione: È un'espressione che viene valutata prima di ogni iterazione. Se è true, il codice all'interno del blocco viene eseguito. 
// Se è false, il ciclo si interrompe.

// Blocco di codice: Le istruzioni dentro le {} che vengono eseguite a ogni iterazione.

// Come funziona
// JavaScript valuta la condizione.

// Se la condizione è true, esegue il blocco di codice.

// Torna a valutare la condizione e ripete il processo.

// Se la condizione è false, salta il blocco e continua con il codice successivo.

// Esempio semplice
// Supponiamo di voler stampare i numeri da 1 a 5:

let i = 1; // Inizializziamo una variabile
while (i <= 5) { // Condizione: continua finché i è minore o uguale a 5   
  i++; // Incrementa i di 1
}

console.log(i);// Stampa il valore di i

// ------------------------------------------------------------------------------------------------------
let somma = 0;
let numero = 1;

while (numero <= 10) {
  somma += numero; // Aggiunge il numero corrente alla somma
  numero++; // Incrementa il numero
}

console.log("La somma è:", somma);

//------------------------------------------------------------------------------------------------------

// ESERCIZI
// 1. Stampa i numeri da 1 a 7 incluso utilizzando il ciclo while.

// let i = 1;
// while (i <= 7) {
//   console.log(i);
//   i++;
// }

// 2. Dichiara una variabile test = true. Scrivi un ciclo while che abbia la variabile uguale a true come condizione e iteri solo due volte  stampando ciao nella console;
//output ("ciao", "ciao")
// let stringa = 'ciao';
// let test = true;
// let numeroStampe = 5;
// let element = 0;
// while (test) {
//   console.log(stringa);
//   element++;
//   if (element == numeroStampe) {
//     test = false;
//   }
// }

//esercizi legato al file while_dowhile.html

// let scelta = "";
// while (!scelta) {
//   scelta = prompt('scrivi qualcosa');
// }

//richiesta password con numero tentativi limitati

//visualizzo il prompt chiedendo la password
//se è corretta vado avanti
//se non è corretta visualizzo un altro prompt che dice password errata hai ancora a disposizione n tentativi
//se ha finito il numero di tentativi visualizzo un alert che dice Tentativi esauriti riprova fra mezz'ora.
// let pwdCorretta = '1234';
// let maxTentativi = 3;
// let testoPrompt = 'Inserisci password. Hai ' + maxTentativi + ' tentativi a disposizione';

// scelta = prompt(testoPrompt);
// //diamo per scontato che l'utente scriva qualcosa
// while (scelta != pwdCorretta && maxTentativi > 1) {
//   --maxTentativi;
//   scelta = prompt('password errata. Hai ancora ' + maxTentativi + ' tentativi a disposizione');
// }

// if (scelta != pwdCorretta) {
//   alert("Tentativi esauriti riprova fra mezz'ora.");
// } else {
//   console.log('sei entrato');
// }



//3 Scrivi un programma che prenda una stringa in input (tramite prompt) e stampi i caratteri della stringa al contrario utilizzando il ciclo while.
//Le stringhe in lettura sono equiparabili a un array di caratteri
// let stringa = 'corso';
// alert('terzo carattere = ' + stringa[2]);


// let stringa = prompt('Inserire testo');
let risultato = '';
// let indice = stringa.length - 1;

// while (indice >= 0) {
//     risultato += stringa[indice];
//     indice--;
// }
    
console.log('STRINGA AL CONTRARIO ' + risultato);

//4. Scrivi un programma che stampi i numeri pari da 2 a 10 utilizzando il ciclo while.

let numb = 2;
while (numb <= 10) {
  if (numb % 2 === 0) {
    console.log(numb);
  }
  numb++;
}

// DO WHILE

let numeroVincente = 3;
let guess = 0; 

do {
    guess = prompt('indovinas il numero');
    if( guess == numeroVincente ){
        alert('Hai vinto il numero vincente e' + ' ' + numeroVincente)
    }
} while (guess != numeroVincente && guess != null);