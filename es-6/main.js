/* Distrutturazione dei Parametri delle Funzioni

Scrivi una funzione `presentati` che prende un 
oggetto con le proprietà `nome` e `occupazione` 
e registra un messaggio nella console.

const persona = {
    nome: "Jane",
    occupazione: "sviluppatrice"
}; */

const persona = {
    nome: "Jane",
    occupazione: "sviluppatrice"
};
const presentati = ({nome, occupazione}) => {
    console.log(`Ciao, sono ${nome} e sono una ${occupazione}`);
}
presentati(persona);