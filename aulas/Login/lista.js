let email_banco = "dan";
let senha_banco = "dan";
let email_admin = "dan";
let senha_admin = "dan";
let logado = false;
let email_usuario = prompt("Insira seu Login");
let senha_usuario = prompt("Insira sua senha");

if ((email_banco == email_usuario || email_usuario == email_admin) && senha_usuario == senha_admin) { logado = true;
    console.log("Logado com Sucesso");
    alert("Logado com Sucesso");
    if (email_usuario == email_admin) {
        console.log("Bem vindo admin");
        alert("Bem vindo admin");
    }
} else {
    logado = false;
    console.log("login invalido");
    alert("login invalido");
}