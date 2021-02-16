//Aula 253: O que é programação assíncrona?

/*
- Até agora programamos de uma maneira que uma ação acontecia após a outra;
- A programação assíncrona trabalha nesta questão, ações podem ser executadas ao tempo todo sem uma 'fila';

- Um exemplo: usuário está no checkout, manda salvar seu endereço na conta, mas pode prosseguir para a finalização sem recarregar a página,
pois adicionar endereço ocorre de forma assíncrona;
*/

//Aula 254: Callback
/*
- Uma das vertentes a programação Assíncrona é fazer ações que aconteçam depois de um tempo por meio de callbacks;
- Callback é uma função que faz uma ação após algum acontecimento no código;
- Podemos realizar um callback com a função setTimeout, veja:
*/
//Exemplo 1:
console.log("Ainda não chamou o callback");

setTimeout(function () {
    console.log("Chamou callback")
}, 5000);


console.log("Ainda não chamou callback 2");

