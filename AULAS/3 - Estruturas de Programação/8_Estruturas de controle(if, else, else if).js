//-----Aula 54: O que são estruturas de controle?

//Um programa é executado de cima para baixo;
//Com as estruturas podemos modelar o fluxo do programa;
//Ou seja, dependendo dos valores de statements e expressions, ele tomará um caminho diferente;


//-----Aula 55: Estrutura condicional: if
//O programa vai executar um bloco de código, SE algo acontecer;
//Onde algo é a condição imposta por um statement;
//Que resultar em um boolean (true or false);

let idade = 25;
let nome = "Matheus"

if (idade == 25){
    console.log('A idade é igual a 25 anos!');
}

if (idade >18){
    console.log('A idade é maior que 18 anos!');
}

if (nome == "Matheus" && idade > 18){
    console.log("liberado!");
}

if ((nome == "Matheus" && idade > 18) || passaporte == true){
    console.log("liberado de verdade!");
}

//-----Aula 56: Estrutura condicional: else

//Podemos executar um outro bloco de código, 
//caso a instrução do if não seja atendida;

//Ou seja, se NÃO EXECUTAR O bloco if, EXECUTE o bloco else!

if (nome == "Bruno"){
    console.log('O seu nome é Bruno');
} else {
    console.log('O seu nome não é Bruno');
}

//Outro exemplo:
let vel = 50;

if(vel <= 45){
    console.log('Não foi multado')
} else {
    console.log('Multa')
}

//-----Aula 57: Estrutura condicional: else if

//Ainda podemos encadear mais condiçoes com o else if;
//Ou seja, antes de executar um else, ou até mesmo sem ele,
//podemos verificar mais uma condição;

let a = 5;
let b =3

if(a+b==3){
    console.log('O resultado é 3')
} else if(a == 4) {
    console.log('O valor de a é 4')
} else if (b == 3) {
    console.log ('O valor de b é 3') //Sim, b é exatamente igual a 3.
} else {
    console.log ('Nenhuma das condições acima!')
}

//Outros exemplos:

let nick = "Sabrina";

if (nick != undefined) {
    console.log("Nome está definido") //Aceitou, o nome está definido.
} else if (nome == "Sabrina" && nome.length > 5){ 
    console.log("O nome é Sabrina")// este ELSE IF, só será aceito, caso o IF seja invalidado. 
} else {
    console.log("Não é a Sabrina!")
}
//propriedade length checa quantos caracteres a palavra possui. 

//Não precisa necessariamente apresentar o ELSE no final.
if (1 > 2) {
    console.log("Teste");
} else if (1 == 1) { 
    console.log("Testando");
}


