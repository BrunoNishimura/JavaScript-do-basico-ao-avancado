
//-----Aula 65: Incrementando a variável: forma fácil

//Podemos incrementar uma variável de forma mais fácil: x+=1;
//Ou até mesmo x++;

//Exemplo 1:

// for(let numero = 0; numero < 10; numero += 1 ){
//     console.log("O numero é: " + numero);
// }

//Exemplo 2:

let numero = 5;

while(numero<50){
    console.log(numero)
    numero += 10; //Esta forma resumida é a mais utilizada no mercado de trabalho!
    // numero = numero + 10; É a mesma coisa que o de cima, mas de forma resumida!
}

//Exemplo 3:
for(let i = 0; i < 10; i++){
    console.log("O i é: " + i);
}

for(let i = 10; i > 0; i--){
    console.log("O i é: " + i);
}