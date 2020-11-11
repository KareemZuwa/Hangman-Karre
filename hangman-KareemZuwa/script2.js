//Lista med ord
let words = ["MARGIN", "HTML", "GRID", "DISPLAY", "SCOPE", "POKEMON", "FUNCTION", "ARRAY", "HANG"]

//Generera random från words
let randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord);

//Gissa-ordet Array som skrivs i "main-text__input"
let s;
let theHangManWord =[];
let count = 0;

const knappar = document.querySelectorAll('.button');

knappar.forEach((e) => {
    e.addEventListener('click', function() {
        e.style.backgroundColor = "#ED7253";
        e.style.color = "white";
        return knappar
    })
});

console.log(knappar);