class Carro{
        constructor(marca,modelo,velocidade, valor){
                this.marcaCarro = marca;
                this.modeloCarro = modelo;
                this.velocidadeCarro = velocidade;
                this.valorCarro = valor;

        }
} 
let meuCarro = new Carro ("NISSAN -","GTR Skyline R34 -" , 340 , "R$ 2,9 milhões");
let meuCarro1 = new Carro ("Audi -", "Rs Etron Gt -", 250 , "R$ 1,104 milhão");

console.log(meuCarro.marcaCarro,meuCarro.modeloCarro,meuCarro.velocidadeCarro,meuCarro.valorCarro);
console.log(meuCarro1.marcaCarro,meuCarro1.modeloCarro,meuCarro1.velocidadeCarro,meuCarro1.valorCarro);

function corridinha(X,Y) {
    if (meuCarro.velocidadeCarro > meuCarro1.velocidadeCarro) {
        console.log("O NISSAN GTR é mais rapido meu amiguinho.")
    }else{
        console.log("O Audi é mais raipido meu amiguinho.")
    }
        
}

corridinha(meuCarro, meuCarro1);

let carro = {marca:"toyota", cor:"preto"};


/*let frutas = ["maçã","uva", "pera", "melancia","kiwi", "melão","goiaba","jaca","caqui","maracujá"];

frutas.splice(1,2, "BANIDO NO MAMES")

console.log(frutas);

for (let index = 0; index < frutas.length; index++) {
   console.log = (frutas);
    
}





for (let inde 0; index < frutas.length; index++) {
    console.log(frutas[index]);
    
}

let alunos = ["Carol","Lucas","Janio","Lucia","Maria Da Dores","Karine","Alanna","Pedro","Fernando","Arthur","Maicon kister","Jenivaldo","Periquito"];
let notas = [10, 8, 3, 7, 8, 9, 10, 7, 6, 5, 10, 0, 9];

for (let index = 0; index < alunos.length; index++) {
    console.log(alunos[index]);
    console.log(notas[index]);    

}

let var2 = 3 % 10;
let var3 = 5 % 10;



for (let index = 0; index <= 100; index++) {
    console.log(var2[index]);
    if (index % 3 == 0) {
        console.log("fizz");
    }
     else if (index % 5 == 0) {
        console.log("buzz");
     } else if (index % 3 == 0 && index % 57,2 == 0) {
        console.log("fizzbuzz");
        
     }
}
*/






