alert("Calculadora");

let y = prompt("Y é igual");
let z = prompt("Funcao");
let x = prompt("X é igual");
let k = 0;

function subtracao(x, y){
    return x-y;}
function soma(x, y){
    return x+y;} 
function divisao(x, y){
    return x/y;}
function multiplicacao(x, y){
    return x*y;}

/*
if (z == "-") {
    k = x-y;
    alert(k);
    } else if (z == "+") {
    k = (parseInt(x)+parseInt(y));
    alert(k);
    } else if (z == "/") {
    k = x/y;
    alert(k);
    } else {
    k = x*y;
    alert(k);
    }
*/
    
if (z == "-") {
    k = subtracao(x,y);
    alert(k);
    } else if (z == "+") {
    k = soma(parseInt(x),parseInt(y));
    alert(k);
    } else if (z == "/") {
    k = divisao(x,y);
    alert(k);
    } else {
    k = multiplicacao(x,y);
    alert(k);
    }



console.log(soma(parseInt(x),parseInt(y)), subtracao(x,y), divisao(x,y), multiplicacao (x,y));
