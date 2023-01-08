const letters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacters = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let inputEl = document.getElementById("input-el")
let firstPasswordEl = document.getElementById("firstPassword-el")
let secondPasswordEl = document.getElementById("secondPassword-el")
let lettersCheckboxEl = document.getElementById("lettersCheckbox-el")
let numbersCheckboxEl = document.getElementById("numbersCheckbox-el")
let specialCharactersCheckboxEl = document.getElementById("specialCharactersCheckbox-el")


function showPasswords(){
    firstPasswordEl.textContent = "Password 1 : " + generatePasswords()
    secondPasswordEl.textContent = " Password 2 : " + generatePasswords()
    return 0
}

function clearDefaultInput(){
    if (inputEl.value === "ex: 15"){
        inputEl.value = ''
    }
}

function generatePasswords(){
    let password = ''
    for (let i = 0; i < inputEl.value ; i++){
        if (lettersCheckboxEl.checked === true){
            let randomIndex = Math.floor(Math.random() * letters.length)
            let passwordCaracter = letters[randomIndex]
            password = password + passwordCaracter
        } else if (numbersCheckboxEl.checked === true){
            let randomIndex = Math.floor(Math.random() * numbers.length)
            let passwordCaracter = numbers[randomIndex]
            password = password + passwordCaracter
        }else if (specialCharactersCheckboxEl.checked === true){
            let randomIndex = Math.floor(Math.random() * specialCharacters.length)
            let passwordCaracter = specialCharacters[randomIndex]
            password = password + passwordCaracter
        }
    }
    return password
}