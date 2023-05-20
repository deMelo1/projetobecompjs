const login = document.getElementById('login')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const tipo = document.getElementById('tipo')
const senhaerrada = document.getElementById('senhaerrada')
let testeString;
let testeCerto;
login.addEventListener("submit", event => {
    event.preventDefault();
    for (let i in localStorage){
        testeString = localStorage.getItem(`${i}`)
        testeCerto = JSON.parse(testeString)
        if (testeCerto != null){
            console.log(email.value)
            console.log(testeCerto.emailc)
            if((email.value == testeCerto.emailc)&&(senha.value == testeCerto.senhac)&&(tipo.value == testeCerto.tipoc)){
                console.log("CERTO")
                email.setAttribute("style", "border: 2px solid green");
                senha.setAttribute("style", "border: 2px solid green");
                break
            }
            else{
                console.log("ERRADO")
                email.setAttribute("style", "border: 2px solid red");
                senha.setAttribute("style", "border: 2px solid red");
                console.log(senhaerrada.value)
                if (email.vale == testeCerto.emailc){
                    senhaerrada.textContent = 'Senha incorreta, tente novamente!'
                }
                else{
                    senhaerrada.textContent = 'Usuário não cadastrado, clique em cadastre-se para se cadastrar!'
                }
            }
        }
    }
})