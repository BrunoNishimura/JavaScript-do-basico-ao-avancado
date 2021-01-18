
//-----Aula 61: Estrutura de repetição: for
//Semelhante ao while, porém amplamente utilizado;

//Na opnião do professor: 
//é a estrutura de repetição mais fácil de compreender!

//Exemplo 1:
//Primeiro declara o valor, depois até quando vai repetir (a condição) e por último o incremento!
for(let numero= 2; numero < 100; numero = numero *2) {
    console.log("O numero é: " + numero);
}

//Exemplo 2:
for (let i = 0; i < 100; i = i + 3){
    console.log(`A soma de i com 3 é: ${i + 2}`);
}

//Comparação com as variáveis let, var ou const:
let x = 2;

while (x<100){
    console.log(`o número é ${x}`)
    x = x * 2;
}
