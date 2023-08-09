let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let passwordGerado = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvxywzABCDEFGHIJKLMNOPQRSTUVXYWX0123456789!@$&";
let novaSenha = "";


// Capturando e alterando as quantidades de caracter
sizePassword.innerHTML = slider.value;
slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}


// Gera a senha
function generatePassword() {
    let pass= "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    passwordGerado.innerHTML = pass;
    novaSenha = pass;
}

// Copia a senha gerada
function copyPassword() {
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha)
}


  