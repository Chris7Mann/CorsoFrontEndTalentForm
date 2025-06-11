let coloreSemaforo = 'rosso';
let msg = '';

switch (coloreSemaforo) {
    case 'rosso':
        msg = 'fermati';
        break;

    case 'giallo':
        msg = 'rallenta';
        break;    
    case 'verde':
        msg = 'via!!!!';
        break;
    default:
        msg = 'semaforo spento';
        break;
}

console.log(msg);

// 1. Dichiarare la variabile giorno e testarla per i seguenti casi: 0 = Lunedì, 1 = Martedi…6 = domenica e stampare nella console;


let giorno = 0;
let messaggio = '';

switch(giorno) {
    case 0:
        messaggio = 'Lunedi';
        break;
    case 1:
        messaggio = 'Martedi';
        break;
    case 2:
        messaggio = 'Mercoledi';
        break;
    case 3:
        messaggio = 'Giovedi';
        break;
    case 4:
        messaggio = 'Venerdi';
        break;
    case 5:
        messaggio = 'Sabato';
        break;
    case 6:
        messaggio = 'Domenica';
        break;
    default:
        messaggio =  'Inserire un numero da 0 a 6 ';
}

console.log(messaggio);
