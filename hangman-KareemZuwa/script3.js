////-------LISTA MED ORD-------////
let words = ["MARGIN", "HTML", "GRID", "DISPLAY", "SCOPE", "POKEMON", "FUNCTION", "ARRAY", "HANG"]

////-------ORD GENERATOR-------////
//Generera random från words
let randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord);

//Gissa-ordet Array som skrivs i "main-text__input"
let theHangManWord =[];
let letters = [];
let errors = 6;

//Göm orden
for (let i = 0; i < randomWord.length; i++) {
        theHangManWord[i] = " - ";
        theHangManWordWithOutCommas= theHangManWord.join(" ");
    //Hämta 'main-text__input' och sätt en variabel på den
    randomWordHidden = document.getElementById('main-text__input').innerHTML= theHangManWordWithOutCommas;
}

////-------BUTTONS-------////
//Eventlisteners på knapparna
const knappar = document.querySelectorAll('.button');

knappar.forEach((e) => {
    e.addEventListener('click', function() {
        e.style.backgroundColor = "#ED7253";
        e.style.color = "white";
        let stringad = e.innerHTML.toString();
        console.log(stringad);
    })
});

askLetter = (stringad) => {
    for (let i = 0; i < randomWord.length; i++) {
        if (randomWord.indexOf(stringad) > -1) {
            return;
        }
        theHangManWord.push(stringad);
        let correct = theHangManWord[i].indexOf(stringad) > -1;
    
        if (!correct) {
            errors -= 1;
        }
        return correct;

    }
   
}

console.log(randomWordHidden);


