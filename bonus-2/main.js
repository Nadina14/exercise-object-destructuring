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
]
### BONUS 3: Distrutturazione ed Elaborazione dei Dati JSON

Hai ricevuto una stringa JSON contenente un array di prodotti con i loro prezzi e quantità. Scrivi una funzione che analizza il JSON e calcola il valore totale di ogni prodotto (prezzo moltiplicato per la quantità). Utilizza la distrutturazione degli oggetti per estrarre le proprietà necessarie. Quindi, registra il nome del prodotto e il suo valore totale.
[
    {
        "product": "Laptop",
        "price": 1200,
        "quantity": 5
    },
    {
        "product": "Telefono",
        "price": 500,
        "quantity": 10
    },
    {
        "product": "Tablet",
        "price": 750,
        "quantity": 3
    }
] */