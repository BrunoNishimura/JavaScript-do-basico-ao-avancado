//-----Aula 100: Arrow Function

/*
Uma outra forma de escrever funções;
Bem utilizada nos frameworks modernos;
Porém não deve substituir as functions por completo (veremos mais tarde os detalhes);
*/

//Exemplo 1:
const parOuImpar = (n) => {
    return n % 2;
};

console.log(parOuImpar(3)); //1; pois é 3 divido por 2, ou seja resto 1.
/*
Observação: A arrow function, não tem nome. Ela é uma função anônima, por isto atrelamos ela em uma variável!
*/

//Exemplo 2:
const consoleTeste = () => {
    console.log("Olá mundo!");
}
consoleTeste();

//Exemplo 2.1: sem o Arrow Function;
const semArrowFunction = function(){
    console.log("Olá mundo!");
}
semArrowFunction();

//Exemplo 3:
let soma = (a,b) => {
    return a + b;
}

console.log(soma(10,20));

//Exemplo 3.1: Sem o arrow function
let adicao = function (w,z){
    return w + z;
}
console.log(adicao(10,20));
