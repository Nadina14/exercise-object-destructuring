/* Analisi di JSON

Converti la seguente stringa JSON in un 
oggetto JavaScript e registra l'`email` 
e l'`id` nella console.

'{"id": 1, "nome": "John Doe", "email": "john.doe@example.com"}' */

const stringaJSON = {"id": 1, "nome": "John Doe", "email": "john.doe@example.com"};
const oggetto = JSON.parse(stringaJSON);
const {id, email} = oggetto;
console.log(id, email);