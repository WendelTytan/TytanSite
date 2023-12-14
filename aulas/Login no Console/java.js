let banana = 1;
let pera = 1;
let abacaxi = true;
let pitanga = 3;
let uva = abacaxi + pera;

let login = true;

let boleano = false;
 
if (boleano || pera == 3) {
    if (pitanga == uva) {
        console.log("2x-verdadeiro")    
    }
    else{
        console.log("1x-verdadeiro")
    }
    
}else{
    if (boleano || (abacaxi * 3)== pitanga) {
        console.log("1x-falso");
    } else {
        console.log("2x-falso")
    }
}


let email_banco = "A_Maquina@gmail.com"
let senha_banco = "Senhaforte"

let email_usuario = "A_Maquina@gmail.com"
let senha_usuario = "Senhaforte"

if (email_usuario == email_banco && senha_usuario == senha_banco) {
    logado = true;
    console.log ("login inválido");
} else {
    logado = false;
    console.log("login inválido");
}




 