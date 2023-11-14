/* Distrutturazione ed Elaborazione dei Dati JSON

Hai ricevuto una stringa JSON contenente un 
array di prodotti con i loro prezzi e quantità. 
Scrivi una funzione che analizza il JSON e calcola 
il valore totale di ogni prodotto (prezzo moltiplicato 
per la quantità). Utilizza la distrutturazione degli 
oggetti per estrarre le proprietà necessarie. 
Quindi, registra il nome del prodotto e 
il suo valore totale.
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

const stringa = `[
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
]`;

const products = JSON.parse(stringa);
const analizza = (prodotto) => {
    for(let i = 0; i < prodotto.length; i++){
        const obj = prodotto[i];
        const {product, price, quantity} = obj;
        const valore = price * quantity;
        console.log(`Il ${product} vale ${valore}€`);
    };
};
analizza(products);