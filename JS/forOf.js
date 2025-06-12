// ciclo for of ---- introdotto dal 2015

const frutta = [ 'mela' , 'banana', 'arancia']

for ( let frutto of frutta){
    console.log(frutto);
    
}


numeri = [1, 2, 3, 45, 30, 67, 100, 8, 9];

for( const numero of numeri){
    if (numero < 4 || numero > 10) {
        console.log(numero);
        
    }
}

//1.Scrivi un programma che prenda un array di numeri e calcoli la somma di tutti gli elementi.

number = [1, 2, 3, 45, 30, 67, 100, 8, 9];
somma = 0;

for( const numb of number){
    somma += numb
}

console.log('la somma di numeri nell array è ' +  somma);

// ---------------------------------------------------------

//2.Scrivi un programma che prenda un array di stringhe e le concateni in un'unica stringa.

stringhe = [ 'ciao ', 'sono ', 'il ciclo ', 'for Of ',];
text = ''
for(let stringa of stringhe) {
  text += stringa
}
console.log(text);
