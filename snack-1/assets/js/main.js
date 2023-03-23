//Snack 1
//Crea un array composto da 10 automobili.
//Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

//Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
//Infine stampa separatamente i 3 array.


//Crea un array composto da 10 automobili.
//Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

const arrayAuto = [

    {
        marca: 'mercedes',
        modello: 'classe g',
        alimentazione:'diesel'

    },
    {
        marca: 'audi',
        modello:'a4',
        alimentazione:'diesel'

    },
    {
        marca:'fiat',
        modello:'multipla',
        alimentazione:'benzina'

    },
    {
        marca:'ford',
        modello:'puma',
        alimentazione:'benzina'

    },
    {
        marca:'cadillac',
        modello:'64',
        alimentazione:'benzina'

    },
    {
        marca:'toyota',
        modello:'supra',
        alimentazione:'benzina'

    },
    {
        marca:'opel',
        modello:'corsa',
        alimentazione:'diesel'

    },
    {
        marca:'jaguar',
        modello:'xe',
        alimentazione:'benzina'

    },
    {
        marca:'tesla',
        modello:'model x',
        alimentazione:'elettrica'

    },
    {
        marca:'subaru',
        modello:'impreza',
        alimentazione:'benzina'

    },
    
    
]

const autoBenzina = [
    {
        marca:'subaru',
        modello:'impreza',
        alimentazione:'benzina'

    },
    {
        marca:'fiat',
        modello:'multipla',
        alimentazione:'benzina'

    },
    {
        marca:'ford',
        modello:'puma',
        alimentazione:'benzina'

    },
    {
        marca:'cadillac',
        modello:'64',
        alimentazione:'benzina'

    },
    {
        marca:'toyota',
        modello:'supra',
        alimentazione:'benzina'

    },
    {
        marca:'jaguar',
        modello:'xe',
        alimentazione:'benzina'

    },
]

const autoDiesel = [

    {
        marca: 'mercedes',
        modello: 'classe g',
        alimentazione:'diesel'

    },
    {
        marca: 'audi',
        modello:'a4',
        alimentazione:'diesel'

    },
    {
        marca:'opel',
        modello:'corsa',
        alimentazione:'diesel'

    },
]

const autoElettriche = [

    {
        marca:'tesla',
        modello:'model x',
        alimentazione:'elettrica'

    },
]

console.log(autoBenzina);
console.log(autoDiesel);
console.log(autoElettriche);

