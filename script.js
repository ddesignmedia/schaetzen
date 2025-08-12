// --- Spieldaten ---
const allQuestions = [
    // Deutschland
    { question: "Wie viele Bundesländer hat Deutschland?", answer: 16 },
    { question: "Wie hoch ist die Zugspitze in Metern?", answer: 2962 },
    { question: "Wie viele Einwohner hat Berlin (in Millionen, gerundet)?", answer: 4 },
    { question: "Fläche von Deutschland in Tausend Quadratkilometern (gerundet)?", answer: 357 },
    { question: "Wie viele Nachbarländer hat Deutschland?", answer: 9 },
    { question: "In welchem Jahr wurde die Bundesrepublik Deutschland gegründet?", answer: 1949 },
    { question: "Länge des Rheins in Deutschland in km (ca.)?", answer: 865 },
    { question: "Wie viele Zeichen hat die deutsche Nationalhymne (nur Text, 3. Strophe)?", answer: 148 },
    { question: "Durchschnittliche Lebenserwartung in Deutschland in Jahren (ca.)?", answer: 81 },
    { question: "Wie viele zugelassene PKW gab es in Deutschland 2023 (in Millionen, gerundet)?", answer: 49 },
    { question: "Wie viele Kontinente gibt es?", answer: 7 },
    { question: "Wie hoch ist der Mount Everest in Metern?", answer: 8848 },
    { question: "Wie lang ist der Nil in Kilometern (gerundet)?", answer: 6650 },
    { question: "Einwohnerzahl von Tokio in Millionen (Metropolregion, gerundet)?", answer: 37 },
    { question: "Wie viele Ozeane gibt es auf der Erde?", answer: 5 },
    { question: "Fläche von Russland in Millionen Quadratkilometern (gerundet)?", answer: 17 },
    { question: "Wie viele Länder gibt es auf der Welt (ca.)?", answer: 195 },
    { question: "Tiefster Punkt der Erde (Marianengraben) in Metern?", answer: 10994 },
    { question: "Durchmesser des Äquators in Kilometern (ca.)?", answer: 12756 },
    { question: "Wie viele Zeitzonen gibt es auf der Erde?", answer: 24 },
    { question: "In welchem Jahr fiel die Berliner Mauer?", answer: 1989 },
    { question: "In welchem Jahr entdeckte Kolumbus Amerika?", answer: 1492 },
    { question: "Wie lange dauerte der Dreißigjährige Krieg (in Jahren)?", answer: 30 },
    { question: "In welchem Jahr begann der Erste Weltkrieg?", answer: 1914 },
    { question: "In welchem Jahr landete der erste Mensch auf dem Mond?", answer: 1969 },
    { question: "Wie alt wurde die ägyptische Königin Kleopatra (in Jahren)?", answer: 39 },
    { question: "In welchem Jahrhundert fand die Französische Revolution statt?", answer: 18 },
    { question: "Wie lange regierte Queen Victoria von England (in Jahren)?", answer: 63 },
    { question: "In welchem Jahr wurde das Römische Reich geteilt?", answer: 395 },
    { question: "Wie viele Thesen veröffentlichte Martin Luther?", answer: 95 },
    { question: "Was ist die ungefähre Temperatur auf der Sonnenoberfläche in Grad Celsius?", answer: 5500 },
    { question: "Wie viele Knochen hat ein erwachsener Mensch?", answer: 206 },
    { question: "Siedepunkt von Wasser in Grad Celsius bei Normaldruck?", answer: 100 },
    { question: "Ungefähre Schallgeschwindigkeit in Luft in m/s?", answer: 343 },
    { question: "Wie viele Planeten hat unser Sonnensystem?", answer: 8 },
    { question: "Lichtgeschwindigkeit im Vakuum in km/s (gerundet)?", answer: 300000 },
    { question: "Wie viele Elemente gibt es im Periodensystem (Stand 2023)?", answer: 118 },
    { question: "Ungefährer pH-Wert von reinem Wasser?", answer: 7 },
    { question: "Wie viele Chromosomenpaare hat ein Mensch?", answer: 23 },
    { question: "In welchem Jahr wurde das erste iPhone vorgestellt?", answer: 2007 },
    { question: "Wie viele Beine hat eine Spinne?", answer: 8 },
    { question: "Wie schnell kann ein Gepard rennen (in km/h)?", answer: 110 },
    { question: "Wie viele Herzen hat ein Oktopus?", answer: 3 },
    { question: "Maximales Alter einer Riesenschildkröte in Jahren (ca.)?", answer: 150 },
    { question: "Wie viele Flügel hat eine Biene?", answer: 4 },
    { question: "Wie hoch kann ein Floh im Verhältnis zu seiner Körpergröße springen (Faktor)?", answer: 100 },
    { question: "Wie viele Mägen hat eine Kuh?", answer: 4 },
    { question: "Durchschnittliche Tragzeit eines Elefanten in Monaten?", answer: 22 },
    { question: "Wie viele Stacheln hat ein Igel durchschnittlich?", answer: 6000 },
    { question: "Wie viele Liter Wasser kann ein Kamel auf einmal trinken (ca.)?", answer: 150 },
    { question: "Wie viele Spieler hat eine Fußballmannschaft auf dem Feld?", answer: 11 },
    { question: "Wie lang ist ein Marathonlauf in Kilometern (gerundet)?", answer: 42 },
    { question: "Wie viele Runden hat ein Formel-1-Rennen in Monaco (ca.)?", answer: 78 },
    { question: "Wie viele Punkte ist ein Touchdown im American Football wert?", answer: 6 },
    { question: "Wie hoch hängt ein Basketballkorb (in Metern)?", answer: 3 },
    { question: "Wie viele Löcher hat ein Standard-Golfplatz?", answer: 18 },
    { question: "Wie oft gewann Deutschland die Fußball-Weltmeisterschaft der Männer?", answer: 4 },
    { question: "Wie viele Sätze braucht man, um ein Tennis-Match bei den Herren Grand Slams zu gewinnen?", answer: 3 },
    { question: "Wie viele Kegel gibt es beim Bowling?", answer: 10 },
    { question: "Wie lange dauert ein Drittel im Eishockey (in Minuten)?", answer: 20 },
    { question: "Wie viele Felder hat ein Schachbrett?", answer: 64 },
    { question: "Wie viele Karten hat ein Standard-Skatblatt?", answer: 32 },
    { question: "Wie viele Oscars gewann der Film 'Titanic' (1997)?", answer: 11 },
    { question: "Wie viele Harry Potter Bücher gibt es?", answer: 7 },
    { question: "Wie viele Saiten hat eine Standard-Gitarre?", answer: 6 },
    { question: "Wie viele Staffeln hat die Serie 'Friends'?", answer: 10 },
    { question: "Wie viele Tasten hat ein Standard-Klavier?", answer: 88 },
    { question: "In welchem Jahr wurde die erste Star Wars Episode (IV) veröffentlicht?", answer: 1977 },
    { question: "Wie viele Spieler braucht man für eine Skatrunde?", answer: 3 },
    { question: "Wie viele Punkte hat der höchste Würfel beim Kniffel (Yahtzee)?", answer: 50 },
    { question: "Wie viele Zähne hat ein erwachsener Mensch normalerweise?", answer: 32 },
    { question: "Wie viele Tage hat ein Schaltjahr?", answer: 366 },
    { question: "Wie viele Sekunden hat eine Stunde?", answer: 3600 },
    { question: "Wie viele Milliliter passen in einen Liter?", answer: 1000 },
    { question: "Wie viele Ecken hat ein Würfel?", answer: 8 },
    { question: "Wie viele Farben hat ein Regenbogen traditionell?", answer: 7 },
    { question: "Wie viele Wochen hat ein Jahr (gerundet)?", answer: 52 },
    { question: "Wie viele Buchstaben hat das deutsche Alphabet (ohne Umlaute/ß)?", answer: 26 },
    { question: "Standard-Trinkgeld in Prozent in Deutschland (ca.)?", answer: 10 },
    { question: "Wie viele Nullen hat eine Milliarde?", answer: 9 },
    { question: "Wie viele Monde hat der Mars?", answer: 2 },
    { question: "In welchem Jahr wurde Google gegründet?", answer: 1998 },
    { question: "Wie viele Figuren sind beim Schach auf dem Brett?", answer: 32 },
    { question: "Wie viele Ringe hat das Audi-Logo?", answer: 4 },
    { question: "Wie viele Streifen hat die Flagge der USA?", answer: 13 },
    { question: "Wie viele Kanten hat ein Tetraeder?", answer: 6 },
    { question: "Wie viele Weltwunder der Antike gab es?", answer: 7 },
    { question: "Wie viele Stunden Schlaf braucht ein Erwachsener durchschnittlich pro Nacht?", answer: 8 },
    { question: "Wie viele Oscars gewann Meryl Streep (Stand 2023)?", answer: 3 },
    { question: "Wie viele Planeten in unserem Sonnensystem haben Ringe?", answer: 4 },
    { question: "Wie viele Freiheitsgrade hat ein starrer Körper im Raum?", answer: 6 },
    { question: "Wie viele Kammern hat das menschliche Herz?", answer: 4 },
    { question: "Wie viele Töne hat eine Oktave (diatonisch)?", answer: 8 },
    { question: "Wie viele Beine hat ein Tausendfüßler maximal (ca.)?", answer: 750 },
    { question: "Wie viele Liter Bier werden in Deutschland pro Kopf jährlich getrunken (ca.)?", answer: 90 },
    { question: "Wie lautet Pi auf 2 Nachkommastellen (Format X.YY -> 314 für 3.14)?", answer: 314 },
    { question: "Wie viele Weihnachtsbäume werden in Deutschland jährlich verkauft (in Millionen, ca.)?", answer: 30 },
    { question: "Wie viele Muskeln braucht man zum Lächeln (ca.)?", answer: 17 },
    { question: "Wie viele Sprachen werden auf der Welt gesprochen (ca.)?", answer: 7000 },
    { question: "Wie viele Meter misst ein olympisches Schwimmbecken in der Länge?", answer: 50 }
];

// --- Spielzustand ---
let currentQuestionIndex = 0;
let score1 = 0; // Punktestand für Spieler EINS
let score2 = 0; // Punktestand für Spieler ZWEI
let questionsOrder = [];

// --- DOM-Elemente ---
const questionTextElement = document.getElementById('question-text');
const guess1Element = document.getElementById('guess1');
const guess2Element = document.getElementById('guess2');
const submitButton = document.getElementById('submit-guess');
const nextButton = document.getElementById('next-question');
const resultArea = document.getElementById('result-area');
const resultTextElement = document.getElementById('result-text');
const score1Element = document.getElementById('score1');
const score2Element = document.getElementById('score2');
const gameOverArea = document.getElementById('game-over-area');
const finalScoreElement = document.getElementById('final-score');
const restartButton = document.getElementById('restart-game');
const inputArea = document.getElementById('input-area');
const messageBoxOverlay = document.getElementById('message-box-overlay');
const messageBoxText = document.getElementById('message-box-text');
const messageBoxOk = document.getElementById('message-box-ok');

// --- Hilfsfunktionen ---
function showMessage(message) {
    messageBoxText.textContent = message;
    messageBoxOverlay.classList.add('visible');
}
function hideMessage() {
    messageBoxOverlay.classList.remove('visible');
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// --- Spiellogik-Funktionen ---
function displayQuestion() {
    if (currentQuestionIndex < questionsOrder.length) {
        const questionIndex = questionsOrder[currentQuestionIndex];
        questionTextElement.textContent = allQuestions[questionIndex].question;
        resultArea.classList.add('hidden');
        resultTextElement.innerHTML = '';
        guess1Element.value = '';
        guess2Element.value = '';
        guess1Element.disabled = false;
        guess2Element.disabled = false;
        submitButton.classList.remove('hidden');
        nextButton.classList.add('hidden');
        inputArea.classList.remove('hidden');
        gameOverArea.classList.add('hidden');
        guess1Element.focus();
    } else {
        endGame();
    }
}
function handleSubmit() {
    const guess1 = parseInt(guess1Element.value);
    const guess2 = parseInt(guess2Element.value);
    if (isNaN(guess1) || isNaN(guess2)) {
        showMessage("Bitte gebt beide eine gültige Zahl als Schätzung ein.");
        return;
    }
    const questionIndex = questionsOrder[currentQuestionIndex];
    const correctAnswer = allQuestions[questionIndex].answer;
    const diff1 = Math.abs(guess1 - correctAnswer);
    const diff2 = Math.abs(guess2 - correctAnswer);

    let resultMessage = `Die richtige Antwort ist: <strong>${correctAnswer}</strong>.<br>`;
    if (diff1 < diff2) {
        score1++;
        resultMessage += `Player ONE gewinnt diese Runde! (Schätzung: ${guess1}, Differenz: ${diff1} vs ${diff2})`;
    } else if (diff2 < diff1) {
        score2++;
        resultMessage += `Player TWO gewinnt diese Runde! (Schätzung: ${guess2}, Differenz: ${diff2} vs ${diff1})`;
    } else {
        score1++;
        score2++;
        resultMessage += `Unentschieden! Beide Player waren gleich nah dran (Differenz: ${diff1}). Beide bekommen einen Punkt!`;
    }
    score1Element.textContent = score1;
    score2Element.textContent = score2;
    resultTextElement.innerHTML = resultMessage;
    resultArea.classList.remove('hidden');
    guess1Element.disabled = true;
    guess2Element.disabled = true;
    submitButton.classList.add('hidden');
    if (currentQuestionIndex < questionsOrder.length - 1) {
        nextButton.classList.remove('hidden');
        nextButton.focus();
    } else {
        setTimeout(endGame, 3000);
    }
}
function handleNextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}
function endGame() {
    questionTextElement.textContent = "SPIEL BEENDET!";
    inputArea.classList.add('hidden');
    submitButton.classList.add('hidden');
    nextButton.classList.add('hidden');
    resultArea.classList.add('hidden');
    gameOverArea.classList.remove('hidden');
    let finalMessage = '';
    if (score1 > score2) {
        finalMessage = `Player ONE gewinnt mit ${score1} zu ${score2} Punkten! GLÜCKWUNSCH!`;
    } else if (score2 > score1) {
        finalMessage = `Player TWO gewinnt mit ${score2} zu ${score1} Punkten! GLÜCKWUNSCH!`;
    } else {
        finalMessage = `Unentschieden mit ${score1} zu ${score1} Punkten! GUT GESPIELT!`;
    }
    finalScoreElement.textContent = finalMessage;
    restartButton.focus();
}
function initializeGame() {
    currentQuestionIndex = 0;
    score1 = 0;
    score2 = 0;
    score1Element.textContent = score1;
    score2Element.textContent = score2;
    let allIndices = Array.from(allQuestions.keys());
    shuffleArray(allIndices);
    questionsOrder = allIndices.slice(0, 10); // Wählt 10 zufällige Fragen aus
    displayQuestion();
}

// --- Event Listeners ---
submitButton.addEventListener('click', handleSubmit);
nextButton.addEventListener('click', handleNextQuestion);
restartButton.addEventListener('click', initializeGame);
messageBoxOk.addEventListener('click', hideMessage);

// Erlaube das Absenden mit der Enter-Taste in den Input-Feldern
guess1Element.addEventListener('keyup', function(event) {
    if (event.key === "Enter") {
        submitButton.click();
    }
});
guess2Element.addEventListener('keyup', function(event) {
    if (event.key === "Enter") {
        submitButton.click();
    }
});


// --- Spielstart ---
window.onload = initializeGame;
