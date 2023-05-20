let email = document.getElementById("email");
let nome = document.getElementById('nome')
let senha = document.getElementById("senha");
let form = document.querySelector("form");
let textForm = document.getElementById("textForm");
let textEmail = document.getElementById("textEmail");
let textSenha = document.getElementById("textSenha");
let cadastro = document.getElementById('cadastro');
let sobrenome = document.getElementById('sobrenome');
let tipo = document.getElementById('tipo');

let num = 1;
let novocadastro;
function criarcadastro(nomee, sobrenomee, emaill, senhaa, tipoo) {
    return {
    nomec : nomee,
    sobrenomec : sobrenomee,
    emailc : emaill,
    senhac : senhaa,
    tipoc : tipoo,
}
}

cadastro.addEventListener("submit", (e) => {
  if (email.value == "" && senha.value == "") {
    textForm.textContent = "Você precisa preencher todos os campos!";
  } else if (
    validatorEmail(email.value) === true &&
    validatorSenha(senha.value) === true
  ) {
    console.log(email.value);
    console.log(senha.value);
    textForm.textContent = "";
    textEmail.textContent = "";
    textSenha.textContent = "";
    nome.setAttribute("style", "border: 2px solid red");
    email.setAttribute("style", "border: 2px solid red");
    console.log("Nome: ", nome.value);
    console.log("E-mail: ", email.value);
    localStorage.setItem(`novocadastro${num}`, JSON.stringify(criarcadastro(nome.value, sobrenome.value, email.value, senha.value, tipo.value)))
    num++;
  } else {
    console.log("Requisição não atendida");
  }
 

  e.preventDefault();
});

email.addEventListener("keyup", () => {
  if (validatorEmail(email.value) !== true) {
    textEmail.textContent = "O formato do email deve ser Ex: name@abc.com";
  } else {
    textEmail.textContent = "";
  }
});

senha.addEventListener("keyup", () => {
  if (validatorSenha(senha.value) !== true) {
    textSenha.textContent = "A senha deve ter entre 6-16 dígitos, no mínimo uma letra maiúscula, um número e um caractere especial (!@#$%^&*).";
  } else {
    textSenha.textContent = "";
  }
});

function validatorEmail(email) {
  let emailPattern =
    /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return emailPattern.test(email);
}

function validatorSenha(senha) {
  let senhaPattern =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return senhaPattern.test(senha);
}