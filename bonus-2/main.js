/* Gestione dei Dati Mancanti con la Distrutturazione

Dato il JSON degli utenti, scrivi una funzione che 
distruttura ogni oggetto utente per estrarre il nome, 
l'email e l'indirizzo dell'utente. Se l'indirizzo non è fornito, 
la funzione dovrebbe assegnare un valore predefinito di 
"Indirizzo non fornito". Registra le informazioni estratte 
per ogni utente.

[
    {
        "name": "Alice",
        "email": "alice@example.com",
        "address": "123 Via Acero, Meraviglia"
    },
    {
        "name": "Bob",
        "email": "bob@example.com"
    },
    {
        "name": "Charlie",
        "email": "charlie@example.com",
        "address": "456 Via Olmo, Sognilandia"
    }
] */

const persons = [
    {
        "name": "Alice",
        "email": "alice@example.com",
        "address": "123 Via Acero, Meraviglia"
    },
    {
        "name": "Bob",
        "email": "bob@example.com"
    },
    {
        "name": "Charlie",
        "email": "charlie@example.com",
        "address": "456 Via Olmo, Sognilandia"
    }
];

const analizza = (people) => {
    for (let i = 0; i < people.length; i++) {
        const person = people[i];
        const { name, email, address = "Indirizzo non fornito" } = person;
        console.log(`Ciao sono ${name}, la mia mail é ${email} e abito in ${address}`);
    }
}
analizza(persons);