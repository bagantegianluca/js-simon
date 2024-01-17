/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma. */

//Create empty array to store numbers
const numbers = [];

//Create a loop to insert five random number into the array
for (let i = 0; i < 5; i++) {
    const number = Math.floor(Math.random() * 100) + 1;
    numbers.push(number);
}

console.log(numbers);

//Eseguo ciclo per creare "n" numeri casuali quando indicato dall'utente ed aggiungo ad un array

//Visualizzazione numeri in pagina e countdown timer (tempo da prompt)

//A fine timer svuoto pagina dai numeri

//Richiedo "n" prompt quanti i numeri da indovinare

//Controllo che i numeri indicati siano presenti sull'array e visualizzo il risultato