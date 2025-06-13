// LE FUNZIONI IN JS    
//--------------------------------------------------------

function stampInConsole () {
    console.log('ciao');
}

stampInConsole();


// LE FUNZIONI SENZA PARAMETRI E SENZA VALORI DI RITORNO

function somma(a, b) {
  //console.log(a+b);
  return a + b;
}

console.log(somma(78,60));
console.log(14 + somma(4,9) -100 + somma(45,1000) %70);

// ESERCIZI LE FUNZIONI    
//--------------------------------------------------------

function getArea(b, h) {
    return b * h;
}

let arearettangolo = getArea(4,6)
console.log(`area del rettangolo è pari a ${arearettangolo} mq`);

// 2. scrivi una funzione che restituisca se il valore passato è pari o dispari


function isPari(numero) {
  return numero % 2 === 0;
}
console.log(isPari(4));



// scrivi una funzione che aggiunga un valore ad un array
let numeri = [1, 2, 3];

function aggiungiVal(arr, val) {
  arr[arr.length] = val;
  return arr;
}

console.log(aggiungiVal(numeri, 4));

console.log(numeri);

//--------------------------------------------------------------------------------------------

// scrivi una funzione che concatena gli elementi di un array separandoli con un separatore parametrico (restituisce una stringa )




// function concatArray(arr, sep) {
 
//   let ris = "";
 

//   for (let elemento of arr) {
//     if (elemento == arr[arr.length -1]) {
//         ris += elemento;
//     }else {
//     str += elemento + sep;
//   } 
//   } 

//   return ris;
// }

// let colori = ["rosso", "blu", "verde"];
// console.log(concatArray(colori, "|")); // Output: "rosso, blu, verde"


//4. Scrivi una funzione che prenda un array di numeri come parametro e restituisca la somma di tutti gli elementi.

function sommaArray(numeri) {
    let somma = 0;
    for (let numero of numeri) {
        somma += numero;
    }
    return somma;
}

const array = [10, 34, 2, 9, 11];
console.log(sommaArray(array)); 

//-------------------------------------------------------------------------

// 5. Crea una funzione che stampi una tabellina qualsiasi 
function tabellina(numero) {
    for (let i = 1; i <= 10; i++) {   
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

tabellina(7);

//------ SOLUZIONE 2 ------------------------------------------------------------------------------

function tabella (numb){

let tabellina = "" ;
for (let i = 3; i <= 12; i++) {
    tabellina += numb + " x " + i + " = " + (numb*i) + '| ';
    } 
    return tabellina;
}
let numb = 7;
console.log(tabella(numb));


// --------- soluzione 3 rendendo parametrici i limiti ----------------------------------

function tabellina(num, da, a) {
  let risultato = [];
  for (let i = da; i <= a; i++) {
    risultato[i - da] = num + " x " + i + " = " + (num * i);
  }
  return risultato;
}
console.log(tabellina(7,3,7));