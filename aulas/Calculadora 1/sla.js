function soma(x , y){
   return x + y;
}

function subtracao(x , y){
    return x - y;
}

 function diviso(x,y) {
   return x / y
}

function mult(x,y) {
   return x * y
}




function calculadora(){
   let operação = prompt ("escreva o calculo");  

   if (operação == "soma") {
      let x =  prompt ("escreva o valor x");
      let y = prompt ("escreva o valor y");
      soma(x,y);
      console.log(soma(parseInt(x),parseInt(y)));
      
 }else if (operação == "mult") {
      let x =  prompt ("escreva o valor x");
      let y = prompt ("escreva o valor y");
      mult(x,y);
      console.log(mult(parseInt(x),parseInt(y)));
 }else if (operação == "diviso") {
      let x =  prompt ("escreva o valor x");
      let y = prompt ("escreva o valor y");
      diviso(x,y);
      console.log(diviso(parseInt(x),parseInt(y)));
   
 } else if(operação == "subtracao") {
   let x =  prompt ("escreva o valor x");
   let y = prompt ("escreva o valor y");
   subtracao(x,y);
   console.log(subtracao(parseInt(x),parseInt(y)));

}
}

calculadora();

