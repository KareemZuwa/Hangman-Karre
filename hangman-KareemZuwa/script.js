////-------TIMER-------////
//tidsdisplay
let timeLeftDisplay = document.querySelector('#time-left');
//startknappen
const startBtn = document.getElementById('start-button');
//tid
timeLeft = 90;
//Paus/Stop av tiden när man gissat rätt eller bränt sina chanser
let clockStop;

//nedräkningsfunktion
function countdown () {
        clockStop = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(timeLeft = 0);
            timeLeftDisplay = document.querySelector('#time-left').innerHTML = "Bonus Lost";
        }
        timeLeftDisplay.innerHTML = timeLeft;
        timeLeft -=1;
    }, 1000) //millisekunder//
}

//Start-knapp för timer
startBtn.addEventListener('click', countdown);

////-------LISTA MED ORD-------////
let words = ["MARGIN", "HTML", "GRID", "DISPLAY", "SCOPE", "FUNCTION", "ARRAY", "HANG", "DOCUMENT", "RANDOM", "ANIMATION", "LEGEND", "JAVA", "PADDING", "FONT"]

////-------ORD GENERATOR-------////
//Generera random från words
let randomWord = words[Math.floor(Math.random() * words.length)];

//Gissa-ordet Array som skrivs i "main-text__input"
let theHangManWord =[];

//räknare för gissningar
let count = 0;

let wrongs = [];
let wrongsShort = [];

let chanses = 7;

let scoreBoard = 0;

//Göm orden
for (let i = 0; i < randomWord.length; i++) {
        theHangManWord[i] = " - ";
        theHangManWordWithOutCommas= theHangManWord.join(" ");
    //Hämta 'main-text__input' och sätt en variabel på den
    randomWordHidden = document.getElementById('main-text__input').innerHTML= theHangManWordWithOutCommas;
}

//sätt variabler på SVG animationerna
let ground = document.getElementById('ground');
let head = document.getElementById('head');
let scaffold = document.getElementById('scaffold');
let body = document.getElementById('body');
let arms = document.getElementById('arms');
let legs = document.getElementById('legs');

////-------BUTTONS-OCH-HANGMAN-GAME-FUNCTIONS-----////
//Eventlisteners på knapparna
const knappar = document.querySelectorAll('.button');

knappar.forEach((e) => {
    e.addEventListener('click', function() {
        e.style.backgroundColor = "#ED7253";
        e.style.color = "white";
        let stringad = e.innerHTML.toString();

        //Matcha bostav med ord
        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === stringad) {
                //skriver över bostaven om den finns med i ordet
                theHangManWord[i] = stringad;
            }
            
            else if (-1 === randomWord.indexOf(stringad)) {
                //första SVGn visar sig
                ground = document.getElementById('ground').style.display = "block";

                //pusha fel bostav in i en array med fel bokstäver
                wrongs.push(stringad);

                //for loop för att ta bort flera av samma bostav Ooops, gjorde bort mig så jag löste det på detta sätt!!
                for (let c = 0; c < wrongs.length; c++) {
                    if (wrongsShort.indexOf(wrongs[c])=== -1){
                        wrongsShort.push(wrongs[c]);
                        console.log(wrongsShort);
                        if (wrongsShort.push(wrongs[c])) {
                            //räknar ner på antal chanser
                            chanses -= 1;
                            if (scoreBoard > 0) {
                                scoreBoard -= 10;
                            }
                        }
                    }
                    //resten av SVG:na visar sig efter varje feltryck
                    if (wrongsShort.indexOf(stringad) && chanses === 6) {
                        head = document.getElementById('head').style.display = "block";
                    } else if (wrongsShort.indexOf(stringad) && chanses === 4) {
                        scaffold = document.getElementById('scaffold').style.display = "block";
                    } else if (wrongsShort.indexOf(stringad) && chanses === 3) {
                        legs = document.getElementById('legs').style.display = "block";
                    } else if (wrongsShort.indexOf(stringad) && chanses === 2) {
                        arms = document.getElementById('arms').style.display = "block";
                    } else if (wrongsShort.indexOf(stringad) && chanses === 1){
                        body = document.getElementById('body').style.display = "block";
                        document.getElementById('win or loose').innerHTML = "Sorry, You lost, <br>Correct word is: " + randomWord;
                        
                        clearInterval(clockStop);//Stoppa klockan
                      
                        document.getElementById('score').innerHTML = "SCORE: No Points";  //0 Poäng

                        document.getElementById('loser').play(); //förlorar ljudet
                        
                        //Starta om spelet efter 9 sekunder
                        setTimeout(function(){
                            window.location.reload(1);
                         }, 9000);
                    } 
                } 
            }   
        }
        //Räkna antal rätt gissningar
        guessWord = theHangManWord.indexOf(stringad);

        if (guessWord >= 0) {
            count++;
            scoreBoard += 10;
        }
        document.getElementById('trials').innerHTML = "You've got: " + count + " correct letter";
         
        //Skriv över innerHTML med rätt gissad bokstav
        document.getElementById('main-text__input').innerHTML = theHangManWord.join(" ");

        //För vinst jämnförs finalWord med randomWord
        console.log(theHangManWord);
        let finalWord = theHangManWord.join("");

        if (finalWord === randomWord) {
            clearInterval(clockStop);                           //Stoppa klockan
            document.getElementById('winner').play();           //vinnar ljudet
            setTimeout(function(){                              //reset efter 9 sekunder
                window.location.reload(1);
             }, 9000);
            document.getElementById('win or loose').innerHTML = "Congratulations, You Won!!!"; //Bonuspoäng Skala
            //extra poäng tillägg vid olika klockslag
            if (timeLeft === 90 || timeLeft === 0) {
                scoreBoard += 0;
            } else if (timeLeft >= 60 && timeLeft <= 89) {
                scoreBoard += 100;
            } else if (timeLeft >= 30){
                scoreBoard += 50;
            } else if (timeLeft >= 1){
                scoreBoard += 20;
            }
        }

        //Poängräknare
        document.getElementById('score').innerHTML = "SCORE: " + scoreBoard + "points"; 
   
    })    
});

//Reset knappen för att starta nytt spel
document.querySelector('.reset-button').addEventListener ('click', () => {window.location.reload();});
