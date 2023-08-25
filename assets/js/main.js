/* 
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in solo console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
Consigli:
non usate bootstrap, fate a mano per ora meno cose dobbiamo gestire e meglio é.
per semplificarvi un pó la vita almeno per ora non usate il tag form per racchiudere gli input ma metteteli semplicemente in un div.  div>input e non form>input
Bonus (opzionale):
Prova a racchiudere gli input ed il bottone in un tag form e prova a far funzionare il form evitando che la pagina si refreshi quando il form viene inviato cliccando su genera.
Questo richiederá un minimo di ricerca per capire come usare il parametro e dentro la funzione anonima dell'event listener. function(e){ console.log(e) }
*/

const ticketForm = document.getElementById("ticketForm");
const errorMessage = document.getElementById("errorMessage");
const ticketName = document.getElementById("ticketName");
const ticketDistance = document.getElementById("ticketDistance");
const ticketPrice = document.getElementById("ticketPrice");
const discountTicketM = document.getElementById("discountM");
const discountTicketE = document.getElementById("discountE");
const ticket = document.getElementById("ticket");

ticketForm.addEventListener("submit", function(e) 
{

    console.log(e);

    e.preventDefault();

    // NOME DEL PASSEGGERO
    const passengerName = document.getElementById("userName").value;

    ticketName.innerHTML = passengerName
    console.log("Il nome del passeggero è " + passengerName);

    // DISTANZA
    const distance = document.getElementById("distance").value;
    console.log("la distanza da percorrere è: " + distance);
    ticketDistance.innerHTML = `${distance} Km`;

    // ETA'
    const age = document.getElementById("ageRange").value;
    console.log("l'età del passeggero è: " + age);

    if (distance == 0 || passengerName == 0) {

        // VIENE VISUALIZZATO UN MESSAGGIO DI ERRORE IN CASO DI INESATTEZZA DEI PARAMETRI
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "Uno dei valori inseriti non è valido. Riprova.";

        // IL BIGLIETTO VIENE NASCOSTO
        ticket.style.display = "none";
    } 
    
    else 
    {
        if (age == "minor") {
            // IL MESSAGGIO DI ERRORE SE VISIBILE VIENE RIMOSSO
            errorMessage.style.display = "none";  
            // VIENE VISUALIZZATO IL MESSAGGIO DI SCONTO CORRETTO
            discountTicketE.style.display = "none";
            discountTicketM.style.display = "inline";

            // CALCOLO DEL PREZZO  
            console.log("Il passeggero è minorenne");
            const price = distance * 0.21;
            console.log("Il prezzo è " + price);
            const discount20 = (price * 20) / 100;
            console.log("lo sconto applicato è: " + discount20);
            const discountedPrice = (price - discount20).toFixed(2);
            console.log("Il prezzo scontato del biglietto è " + discountedPrice);

            // IL PREZZO VIENE STAMPATO IN PAGINA E IL BIGLIETTO VIENE VISUALIZZATO
            ticketPrice.innerHTML = `${discountedPrice} €`;
            ticket.style.display = "flex";
        } 
        
        else if (age == "elder") {
            // IL MESSAGGIO DI ERRORE SE VISIBILE VIENE RIMOSSO
            errorMessage.style.display = "none";
            // VIENE VISUALIZZATO IL MESSAGGIO DI SCONTO CORRETTO
            discountTicketM.style.display = "none";
            discountTicketE.style.display = "inline" ;

            // CALCOLO DEL PREZZO  
            console.log("Il passeggero è un anziano");
            const price = distance * 0.21;
            console.log("Il prezzo è " + price);
            const discount40 = (price * 40) / 100;
            console.log("lo sconto applicato è: " + discount40);
            const discountedPrice = (price - discount40).toFixed(2);
            console.log("Il prezzo scontato del biglietto è " + discountedPrice);

            // IL PREZZO VIENE STAMPATO IN PAGINA E IL BIGLIETTO VIENE VISUALIZZATO
            ticketPrice.innerHTML = `${discountedPrice} €`;
            ticket.style.display = "flex";
        } 
        
        else {
            // IL MESSAGGIO DI ERRORE SE VISIBILE VIENE RIMOSSO
            errorMessage.style.display = "none";
            // I MESSAGGI DI SCONTO VENGONO RIMOSSI
            discountTicketM.style.display = "none";
            discountTicketE.style.display = "none";

            // CALCOLO DEL PREZZO  
            console.log("Il passeggero è adulto");
            const price = (distance * 0.21).toFixed(2);
            ticketPrice.innerHTML = `${price} €`;
            console.log("Il prezzo è " + price);

            // IL PREZZO VIENE STAMPATO IN PAGINA E IL BIGLIETTO VIENE VISUALIZZATO
            ticket.style.display = "flex";
        }
    }
});
