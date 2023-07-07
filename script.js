const generateButton = document.querySelector("#button")
const textInput = document.querySelector(".textInput")
const copyButton = document.querySelector("#button-addon2")
const alertCopy = document.querySelector(".alert")

function generatePassword(){
    let password = "";
    const passwordLength = 14;
    const characters = "0123456789abcdefghijklmnopqrstuvwxz!@$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXZ";
    for (let index = 0; index < passwordLength; index++) {
        const randomNumber = Math.floor(Math.random()*characters.length)
        password+=characters[randomNumber]
    }
    textInput.value = password
}

function copyPassword(){
    if(textInput.value){
        textInput.select();
        navigator.clipboard.writeText(textInput.value)
        alertCopy.style.display = "block"
        setTimeout(() => {
            alertCopy.style.display = "none"
        }, 2000);
      
    }
}

generateButton.addEventListener("click",generatePassword)
copyButton.addEventListener("click",copyPassword)
