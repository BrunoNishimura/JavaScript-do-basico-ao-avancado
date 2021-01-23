//-----Aula 92: Funções

/*Até o momento só foram utilizadas funções prontas do JS, mas nesta seção vamos criar e executar as nossas funções,
aprender e se aprofundar mais nos tópicos avançados de funções!

-----Aula 93: O que são funções?
Funções são estruturas de códigos menores que são reaproveitadas durante a execução/construção de um programa;
Principal objetivo: poupar repetição de código;
Podem ser consideradas 'subprogramas';

-----Aula 94: Definindo uma função: teoria;
Uma função tem uma estrutura um pouco mais complexa;
Devemos declarar a função sempre com a palavra function;
Uma função deve ter um nome;
Pode conter argumentos/parâmetros, definidos entre();
O corpo da função é definido entre {};
Geralmente uma função retorna um valor;
É possível declarar funções em variáveis;
*/

//-----Aula 95: Definindo uma função na prática;
//Exemplo 1:
function imprimirTexto(){
    console.log("Olá mundo!")//Nada aparece porque é necessário chamar a função
}

imprimirTexto();//Estamos chamando a função, dentro dos parênteses ficam os valores dos argumentos/parâmetros.

//Exemplo 2:
function imprimirNumero(num){
    console.log("O número é:" + num);
}

imprimirNumero(2);
imprimirNumero(4);
imprimirNumero(6);
imprimirNumero(8);

//Exemplo 3: Declarar a função em uma variável.
const numeroAleatorio = function(){
    console.log(Math.random())
}

numeroAleatorio();//Print: Um número qualquer.
numeroAleatorio();

//-----Aula 96: Mais sobre funções:

//Exemplo 1: Uma função simples para somar qualquer dois valores desejados. 
const soma = function(a, b){
    return a + b;
}

console.log(soma(3, 5));

//Exemplo 2: Uma função um pouco mais complexa para saudar os nomes!
const saudacao = function (nome){
    if(nome == "Matheus"){
        return "Olá Matheus";
    }
}

console.log(saudacao("Matheus"));

//Exemplo 3:
function multiplicarTresNumeros(x, y, z){
    return x * y * z
}
console.log(multiplicarTresNumeros(2,3,4));//24.  Já é possível utilizar a função!

const mult = multiplicarTresNumeros(5, 4, 8);
console.log("O valor de mult é " + mult);// O valor de mult é 160. Aqui é possível observar que a função criada foi atribuida em uma variável!

//Exemplo 4:
function podeDirigir(idade, cnh){
    if (idade >= 18 && cnh == true){
        console.log("Pode dirigir");
    } else {
        console.log("Não pode dirigir");
    }
}
console.log(podeDirigir (19, true));
console.log(podeDirigir (11, true));
console.log(podeDirigir (19, 1));// O JavaScript interpreta o 1 como true e o 0 como false
console.log(podeDirigir (19, 0));
console.log(podeDirigir (19, false));



