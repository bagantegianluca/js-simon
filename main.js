/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma. */

//Select html tag elements
const h1El = document.querySelector('h1');
const h2El = document.querySelector('h2');

//Create empty array to store numbers
const comNumbers = [];
const userNumbers = [];
const rightNumbers = [];
const wrongNumbers = [];

//Create a loop to insert five random number into the array
for (let i = 0; i < 5; i++) {
    const number = Math.floor(Math.random() * 100) + 1;
    comNumbers.push(number);
}
console.log(comNumbers);

//Display numbers in page
h1El.innerHTML = `I numeri da indovinare sono:<br/>${comNumbers.join(', ')}`;

//Create variable for clock
let clock;

//Create variable for timer
let timer = 5;

//Create countdown
clock = setInterval(() => {
    console.log(timer);
    h2El.innerHTML = timer;

    //When time is up
    if (timer === 0) {
        //Stop the clock
        clearInterval(clock);
        //Change page messages
        h1El.innerHTML = 'Tempo scaduto! Indovina i numeri';
        h2El.innerHTML = '';
        //Ask user for the five numbers in the right position
        for (let i = 0; i < 5; i++) {
            const userNumber = Number(prompt(`Inserisci il numero che apparica in posizione ${i + 1}:`));
            userNumbers.push(userNumber);
            //If number is right, message OK and add number to right numbers array 
            if (userNumbers[i] === comNumbers[i]) {
                alert(`ESATTO! Il numero alla posizione ${i + 1} era proprio ${userNumber}`)
                rightNumbers.push(userNumber);
            } else {
                //If number is wrong, message wrong and add number to wrong numbers array 
                alert(`SBAGLIATO! Il numero alla posizione ${i + 1} era ${comNumbers[i]} mentre tu hai digitato ${userNumber}`)
                wrongNumbers.push(userNumber);
            }
        };

        //Display result
        h2El.innerHTML = `Numeri da indovinare: ${comNumbers.join(', ')}<br/>Numeri indovinati: ${rightNumbers.join(', ')}<br/>Numeri sbagliati: ${wrongNumbers.join(', ')}`;
    };
    timer--;
}, 1000);