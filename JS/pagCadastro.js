var nome = document.getElementById('nome')
var sobrenome = document.getElementById('nome2')

var email = document.getElementById('exampleInputEmail1')
var senha = document.getElementById('inputPassword6')
var senha2 = document.getElementById('inputPasswor7')

var msg = document.getElementById('msg')
var botão = document.getElementById('btnEntrar').addEventListener('click', click)

function click(){

    if (nome.value == '' || sobrenome.value == '' || email.value == '' || senha.value == '' || senha2.value == ''){
        msg.innerHTML = 'Por favor, preencha todos os dados antes de continuar.'
    } else {

        if (String(email.value).includes('@')){

            if (String(email.value).includes('.com') || String(email.value).includes('.org')){

                if (String(senha.value).length > 8 && String(senha.value).length < 20){
                    
                    if (senha.value == senha2.value){
                        window.location.href='index.html'
                    } else {
                        msg.innerHTML = 'As senhas inseridas não são idênticas, por favor, confirme novamente.'
                    }

                } else {
                    msg.innerHTML = 'Por favor, use uma senha que tenha entre 8 e 20 caracteres.'
                }

            } else {
                msg.innerHTML = 'Por favor, insira um email válido.'
            }

        } else {
            msg.innerHTML = 'Por favor, insira um email válido.'
        }

    }
}