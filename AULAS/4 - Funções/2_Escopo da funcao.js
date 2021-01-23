//-----Aula 97: Escopo de uma função

/*
O que acontece dentro de uma função fica separado do escopo global;
O escopo global seria todo o arquivo de JavaScript;
*/

//Exemplo 1:
let n = 10

const numero = function (){
    let n = 25
    console.log(n);//25
}

numero()
console.log(n);//10

/*Observação: Neste exemplo é possível observar que existe duas variáveis com o mesmo nome,
porém a variável que está dentro da função não tem nada a ver com o escopo global;
Portanto é possível declarar duas variáveis com o nome igual usando o let, pois eles não fazem parte do mesmo escopo!

Os escopos não o valor de uma ou outra variável!
*/

//-----Aula 98: Mais sobre escopo

/*
Atualmente com let e const, qualquer bloco de código pode separar seu escopo (um if por exemplo)