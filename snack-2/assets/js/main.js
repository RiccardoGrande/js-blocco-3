//A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

const arrayRandom = ['pippo', 'PLUTO', 'Paperino'] 

const lower = arrayRandom.map(element => {
    return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
  });
  
  console.log(lower);


/* [‘Pippo’, ‘Pluto’, ‘Paperino’] */