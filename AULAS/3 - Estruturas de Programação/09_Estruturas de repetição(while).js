//-----Aula 58: O que são estruturas de repetição?

//A ideia é repetir uma ação até atingir uma condição;
//Ao invés de repetirmos o mesmo código várias vezes, 
//criamos um statement que fará uma checagem em cada loop;
//Também chamada de loop;

//Bastante útil para repetir o código inúmeras vezes e somente tê-lo digitado uma única vez.
//Ganhando em produtividade e também em leitura de código!
//Precisa ler somente uma instrução e já sabemos que ela vai repetir um determinado números de vezes,
//evitando assim ter que ficar digitando códigos imenso,

//-----Aula 59: Estrutura de repetição: while

//Fará uma ação, até que a condição seja atingida
//Precisamos realmente 'definir um fim' para o loop, para não termos...
//... o PROBLEMA de LOOP INFINITO;

//Contagem do 1 ao 10, parando no 10.
let x = 10; //Stop no 10.

while (x > 0) {
    console.log('O "x" é ' + x);
    x = x -1;
}

//Contagem regressiva do 10 ao 0.
let y = 0;

while( y <= 10){
    console.log(y);
    y = y + 1;
}

//-----Aula 60: Estrutura de repetição: do while 
//Esta é  pouco utilizada.

let z = 0;

do {
    console.log(z);
    z = z + 1;
} while (z < 5);

let w = 100;
    
do {
    console.log(w/2);
    w = w - 5;
} while (w >= 0) //Condição para sair do while, ou seja, para sair do loop!
