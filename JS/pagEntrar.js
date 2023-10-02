var email = document.getElementById('exampleInputEmail1')
var senha = document.getElementById('inputPassword6')
var msg = document.getElementById('msg')
var botão = document.getElementById('btnEntrar').addEventListener('click', click)

function click(){

    if (email.value == '' || senha.value == ''){
        msg.innerHTML = 'Por favor, preencha todos os campos antes de continuar.'
    } else {

        if (String(email.value).includes('@')){

            if (String(email.value).includes('.com') || String(email.value).includes('.org')){
                if (String(senha.value).length > 8 && String(senha.value).length < 20){
                    window.window.location.href = "index.html";
                } else {
                    msg.innerHTML = 'Por favor, insira uma senha válida.'
                }
            } else {
        msg.innerHTML = 'Por favor, insira um email válido.'
        }
        } else {
            msg.innerHTML = 'Por favor, insira um email válido.'
        }
    }
}