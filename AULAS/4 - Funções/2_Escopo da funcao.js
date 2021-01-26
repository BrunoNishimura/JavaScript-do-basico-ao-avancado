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
Atualmente com let e const, qualquer bloco de código pode separar seu escopo (um if por exemplo);
Isso é muito bom pois separa os contextos, com var isso não acontecia!
Ou seja, podemos ter escopos diferentes não só com funções;
*/
let x = 10;

if(true){
    let x = 20;
    x++;
    console.log(x); //Este é o escopo do if. Só foi somado o x que estava dentro do escopo if.
}
console.log(x)

//print: 21; 10;

//-----Aula 99: Escopo aninhado (Nested Scopes)

/*Por causa da possibilidade de criar um escopo, podemos ter mais níveis de escopo;
*/

//Exemplo 1:
let a = 10;

function multiplicar(x,y) {
    let a = x * y;

    if(a>10){
        let a = 0;
        a++;
        
        console.log(a);//Este a++ será 1, mas não vai alterar os valores de outros escopos;
    }
    console.log(a)// 10; pois esta depois do if então é considerado o let do escopo global!;
}
console.log(a);// 21; pois esta pegando o console.log da função 

multiplicar (3,7);