// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let lines = gets().split("\n");
let line = lines.shift().split(" ");
let X = parseInt(line[0]);
let Y = parseInt(line[1]);

//TODO: Complete os espaços em branco com uma possível solução para o desafio
 
var price = 0;
    if (X ==  1) {
      price  = 4.00;
    }
    else if (X == 2) {
      price  = 4.50;
    }
    else if (X == 3 ) {
      price  = 5.00;
    }
    else if (X == 4) {
      price  = 2.00;
    }
    else if (X == 5) {
      price  = 1.50;
    }
    
    let total = price * Y;
    console.log( "Total: R$  " + total.toFixed(2));