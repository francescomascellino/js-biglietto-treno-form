/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (ovvero con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca nella documentazione di JS. 
*/

const ticketForm = document.getElementById("ticketForm");
const result = document.getElementById("priceResult");
const ticketName = document.getElementById("ticketName");
const ticketDistance = document.getElementById("ticketDistance");

ticketForm.addEventListener("submit", function(e) 
{

    console.log(e);

    e.preventDefault();

    const passengerName = document.getElementById("userName").value;

    ticketName.innerHTML = passengerName

    console.log("Il nome del passeggero è " + passengerName);

    const distance = document.getElementById("distance").value;

    console.log("la distanza da percorrere è: " + distance);

    ticketDistance.innerHTML = `${distance} Km`

    const age = document.getElementById("ageRange").value

    console.log("l'età del passeggero è: " + age);

    if (distance == 0 || passengerName == 0) {
        result.innerHTML = "Uno dei valori inseriti non è valido. Riprova."
    } 
    
    else 
    {
        if (age == "minor") {
            console.log("Il passeggero è minorenne");
            const price = distance * 0.21;
            console.log("Il prezzo è " + price);
            const discount20 = (price * 20) / 100;
            console.log("lo sconto applicato è: " + discount20);
            const discountedPrice = (price - discount20).toFixed(2);
            console.log("Il prezzo scontato del biglietto è " + discountedPrice);
            result.innerHTML = `${passengerName}, il prezzo del biglietto per la distanza richiesta è ${discountedPrice}€.`
        } 
        
        else if (age == "elder") {
            console.log("Il passeggero è un anziano");
            const price = distance * 0.21;
            console.log("Il prezzo è " + price);
            const discount40 = (price * 40) / 100;
            console.log("lo sconto applicato è: " + discount40);
            const discountedPrice = (price - discount40).toFixed(2);
            console.log("Il prezzo scontato del biglietto è " + discountedPrice);
            result.innerHTML = `${passengerName}, il prezzo del biglietto per la distanza richiesta è ${discountedPrice}€.`
        } 
        
        else {
            console.log("Il passeggero è adulto");
            const price = (distance * 0.21).toFixed(2);
            result.innerHTML = `${passengerName}, il prezzo del biglietto per la distanza richiesta è ${price}€.`
            console.log("Il prezzo è " + price);        
        }
    }
});
