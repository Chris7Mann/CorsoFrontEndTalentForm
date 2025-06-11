let citta = [
    'Firenze',
    'Cremona',
    88100,
    'Bologna',
    'Roma'
];

let sceltaCitta = citta[3];
console.log(sceltaCitta);


console.log(citta)

citta[2] = 'Catanzaro';
console.log(citta);

citta[5] = 'Naples';
console.log(citta);

//-------------------------------------------------------------------------------------------------

// Dichiarazione Arrey vuoto

let frutti = [];

console.log(frutti.length);

frutti [0] = 'Fragola';
frutti [1] = 'Anguria';
frutti [2] = 'Ciliegia';
frutti [5] = 'mora';

console.log(frutti.length);
console.log(frutti);

// DICHIARAZIONI E INIZIALIZZAZIONI CONTESTUALI

let tipiDiPasta = [
    'Rigatoni',
    'Farfalle',
    'Spaghetti',
    'Pennette'
]

// SOSTITUZIONE NUOVI VALORI
tipiDiPasta[1] = 'Fusiddhri';
tipiDiPasta[2] = 'Gnocchi';
// AGGIUNTA NUOVI VALORI
tipiDiPasta[4] = 'Paccheri';
tipiDiPasta[5] = 'Tortellini';


console.log(tipiDiPasta);


