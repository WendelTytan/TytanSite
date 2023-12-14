function tabuada () {
    let num = parseInt(document.getElementById("num").value);
    let resposta = document.getElementById("resposta");
    let tabuada = "";
    
    for (let index=0; index<=10; index++) {
        tabuada += num + " x " + index + " = " + num*index + "<br/>";
        resposta.innerHTML = tabuada;
    }
}

