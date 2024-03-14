function calcolaLinguaggio() {
    var risposte = document.getElementById("quizForm").elements;
    var linguaggi = [0, 1, 2, 3]; // Indici: 0 = Java, 1 = C, 2 = HTML, 3 = Python

    var conteggioLinguaggi = [0, 0, 0, 0]; // Conteggio delle risposte per ciascun linguaggio

    for (var i = 0; i < risposte.length - 1; i++) { // -1 per escludere il pulsante
        var valoreRisposta = parseInt(risposte[i].value);
        conteggioLinguaggi[valoreRisposta]++;
    }

    var linguaggioFrequente = linguaggi[conteggioLinguaggi.indexOf(Math.max(...conteggioLinguaggi))];

    //console.log(linguaggioFrequente); // Debug

    // Reindirizzamento alla pagina risultato
    window.location.href = "risultato.html?linguaggio=" + linguaggioFrequente;
}