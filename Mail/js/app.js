// Mail

// controlla che sia nella lista di chi può accedere,
const emailcontainer = ["arseniolupin@gmail.com", "bikermice@gmail.com", "ispettoregadget@gmail.it" ];
console.log(emailcontainer);
// Chiedi all’utente la sua email,
let emailInserita = prompt('Inserisci il tuo indirizzo email');
let epresente;
for (let i = 0; i < emailcontainer.length; i++) {
    console.log(i);
    const mailcorrente = emailcontainer[i]
    console.log(mailcorrente);
    if (emailInserita === mailcorrente) {
        console.log("Login effettuato");
        epresente = true
    } else {
        console.log("Non ti sei registrato");
    }
}
// stampa un messaggio appropriato sull’esito del controllo.
if (epresente) {
    alert("Login avvenuto con successo!")
} else{
    alert("Devi prima registrarti")
}
// (non usare includes())