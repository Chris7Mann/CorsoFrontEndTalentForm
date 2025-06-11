// if - else

let colore = 'purple';

if( colore == 'red'){
    console.log('il colore e viola');
    
}else{
    console.log('il colore e sbagliato');
};

//-----------------------------------------------------------------------

// if - else if

if( colore == 'blue'){
    console.log('il colore mi piace molto');
    
}else if(colore == 'green'){
    console.log('il colore non mi piace');
    
}else if(colore == 'purple'){
    console.log('finalmente ci siamo');   
}

//-----------------------------------------------------------------------

// if - else if - else

if( colore == 'blue'){
    console.log('il colore mi piace molto');
    
}else if(colore == 'green'){
    console.log('il colore non mi piace');
    
}else if(colore == 'yellow'){
    console.log('finalmente ci siamo');  
} else {
    console.log('il colore ' + colore + ' non e il colore che mi interessa');
}

//-----------------------------------------------------------------------

// esercizi

// 1. Immagina di dover dire all'utente che cosa deve fare in base ai colori di un semaforo

let semaforo = '';

if( semaforo == 'rosso'){
    console.log('non puoi partire');
}else if(semaforo == 'giallo'){
    console.log('rallenta'); 
}else if( semaforo == 'verde'){
    console.log('puoi andare'); 
}else{
    console.log('semaforo rotto "ATTENZIONE"'); 
}

//-----------------------------------------------------------------------------

//2. Scrivi un programma che prenda un numero e stampi sulla console se è positivo, negativo o zero.

let numb = 2;

if (numb > 0) {
    console.log('positivo');
    
} else if(numb < 0){
    console.log('negativo');
    
}else{
    console.log('zero');  
}

//-----------------------------------------------------------------------------

//3. Dichiara una variabile nome .Se nome è uguale a “Maria” o “Stefania” o “Francesca” stampare sulla console “donna”, 
// altrimenti “genere non rilevato”;

let nome = "Luca";

if (nome === "Maria" || nome === "Stefania" || nome === "Francesca") {
    console.log("donna");
} else {
    console.log("genere non rilevato");
}

//-----------------------------------------------------------------------------

// 4. Dichiara una variabile num e assegnale valori diversi per testare i vari casi.Se num compresa fra 10 e 15(compresi) 
// oppure uguale a 20 stampare sulla console “caso 1”, se invece la variabile è compresa fra 0 e 9(compresi) ma diversa da 7 stampare sulla console “caso 2”, 
// se la variabile maggiore di 20 stampare sulla console “caso 3”. In tutti gli altri casi stampare sulla console “altro”;

let num = 7;

if ((num >= 10 && num <= 15) || num === 20) {
    console.log("caso 1"); // Output: "caso 1"
} else if (num >= 0 && num <= 9 && num !== 7) {
    console.log("caso 2");
} else if (num > 20) {
    console.log("caso 3");
} else {
    console.log("altro");
}

//-----------------------------------------------------------------------------

//5. Scrivi un programma che testa una variabile voto e stampa sulla console il  
// livello dello studente (A, B, C, D). A parte da 90 punti (compresi), B ne richiede minimo 80 e C minimo 70 punti.

let voto = 78;

if(voto >= 90){
    console.log('Livello A');
    
}else if(voto >= 80 && voto <= 89){
    console.log('livello B');
    
}else if(voto >= 70 && voto <= 79 ){
    console.log('Livello C');
    
}else{
    console.log('Livello D');
}

// soluzione piu ottimizzatta

let livello = 'Livello ';

if(voto >= 90){
    livello += 'A';
}else if( voto >= 80){
    livello += 'B';
}else if(voto >= 70 ){
    livello += 'C';
}else {
    livello += 'D';
}

console.log(livello);
