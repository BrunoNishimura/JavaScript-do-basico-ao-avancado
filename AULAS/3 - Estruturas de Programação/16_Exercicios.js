//-----Aula 70-91: Exercícios

/* Exercício 06: Armazene os valores em variáveis com cada um dos tipos de dados vistos;
String, Number e Boolean;
*/
//Resposta:
var x = "Hello World!";
console.log(typeof x);

let y = 25;
console.log(typeof y);

const z = true;
console.log(typeof z);

/* Exercício 07: 
Criar uma estrutura if que verifica a entrada na balada, se tiver mais de 18 anos pode entrar;
Armazenar a idade em uma variável com let;
Insira uma instrução console.log("Pode entrar"), caso a pessoa tenha mais que 18 anos;
*/
//Resposta:
let idade = 18;

if (idade >= 18){
    console.log("Pode entrar.")
} else {
    console.log("Não pode entrar.")
}

/* Exercício 08:
Criar uma constante com o seu nome como valor;
Depois uma estrutura if que verifica se o seu nome é o que está na constante;
Se estiver, emita uma mensagem de saudação com o console.log()
*/
//Resposta:
const nome = "Bruno"

if (nome == "Bruno"){
    console.log("Bem vindo, Bruno!")
    // console.log(`Olá ${nome}!`)
} else {
    console.log("Qual é o seu número celular de trás para frente?")
}

/*Exercício 09
A função Math.pow() exibe a potência de um número;
Teste a função com console.log() e as seguintes bases: 2, 3, 18 e o expoente deve ser 2;
Recebe 2 argumentos, base e expoente;
Exemplo: Math.pow(5,3) Significa: 5 ao cubo;
*/
//Resposta
let base = 1
let expoente = 2

while (base < 20){
    if (base == 2 ||base == 3||base == 18) {
        console.log(Math.pow(base,expoente)) //4, 9, 324
    }
    base ++
}

//Resposta do professor:
const numero = 18;

console.log(Math.pow(2,2));
console.log(Math.pow(3,2));
console.log(Math.pow(numero,2));

/* Exercício 10
Armazene a velocidade de um carro em uma variável, com o número que desejar;
Faça uma estrutura if/else que verifica se ele está acima da velocidade;
80 é a velocidade máxima permitida;
Se estiver acima ou abaixo exiba mensagens com console.log;
*/
//Resposta:
let vel = 45;

if (vel < 80){
    console.log("Você não é Cobre, mas é um excelente condutor!")
} else {
    console.log("what a shame!")
}

/* Exercício 11
Faça uma estrutura if/else para verificar se um usuário pode dirigir;
Armazene em variáveis algumas informações sobre o usuário: idade, se tem CNH;
Se a idade for maior que 18 e não possuir CNH, exiba uma mensagem;
Se a idade for maior que 18 e tem CNH, exiba uma mensagem;
Se não tiver 18 nem CNH. exiba outra mensagem;
*/
//Resposta:
let age = 18;
let CNH = true;

if (age >= 18 && CNH == true){
    console.log("Dirija com cuidado!");
} else if (age >= 18 && CNH == false){
    console.log("Você precisa do CNH");
} else {
    console.log("Você não pode dirigir!")
}

/* Exercício 12
Escreva um loop while que exibe números de 0 a 10 no console;
*/
//Resposta:
let e = 0;

while(e<=10){
    console.log(e);
    e++;
}

/* Exercício 13
Escreva um loop for que exibe números de 100 a 50 no console;
*/
//Resposta:
for(let w = 100; w>= 50; w--){
    console.log(w);
}

/* Exercício 14
Escreva um loop for ou while que exiba qual número é par e qual número é ímpar;
O contador deve iniciar em 0 e ir até 50;
*/
//Resposta:
for(let n=0; n<=50; n++){
    if(n % 2 == 0){
        console.log(`O número ${n} é par.`);
    } else{
        console.log(`O número ${n} é ímpar.`)
    }
}

/* Exercício 15
Verifique se o número é primo
Um número primo, é um número natural; 
Maior que o número 1;
E apenas divisível por 1 e por si próprio;
*/
//Resposta:
let limite = 1000

for(let a=1; a<=limite; a++){
    let divisoes = 0;
    
    for(let i=1; i<=a; i++){
        if(a % i == 0){
            divisoes ++;
        }
    }

    if(divisoes==2){
        console.log(`O número ${a} é um número primo`);
    } else { 
        console.log (`O ${a} não é um número primo`);
    }
}

//Resposta do Professor:
// let num= 73;
// let divisoes = 0;

// for(let i=1; i<=num; i++){
//     if(num % i == 0){
//         divisoes ++;
//     }
// }

// if(divisoes==2){
//     console.log(`O número ${num} é um número primo`);
// } else { 
//     console.log (`O ${num} não é um número primo`);
// }