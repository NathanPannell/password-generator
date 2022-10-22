const upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const special = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
const passwordLength = 10;

let passwordEls = document.getElementsByClassName("password")
console.log(passwordEls)
let numbersEl = document.getElementById("numbers-box")
let specialEl = document.getElementById("special-box")
let upperEl = document.getElementById("upper-box")
let lowerEl = document.getElementById("lower-box")

let allowedChars = []
let password = ""
let randomIndex, randomChar;

function generatePasswords() {
    determineChars()
    if (allowedChars.length === 0) {
        return
    }

    for (let k = 0; k < passwordEls.length; k++) {
        password = ""
        for (let i = 0; i < passwordLength; i++) {
            randomIndex = Math.floor(Math.random() * allowedChars.length)
            randomChar = allowedChars[randomIndex]
            password += randomChar
        }
        passwordEls[k].textContent = password
    }
}

function determineChars() {
    allowedChars = []
    if (numbersEl.checked) {
        allowedChars = allowedChars.concat(numbers)
    }
    if (specialEl.checked) {
        allowedChars = allowedChars.concat(special)
    }
    if (upperEl.checked) {
        allowedChars = allowedChars.concat(upper)
    }
    if (lowerEl.checked) {
        allowedChars = allowedChars.concat(lower)
    }
}