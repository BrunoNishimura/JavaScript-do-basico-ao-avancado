//Aula 261: Generators

/*
- Generators funcionam semelhantes as Promises;
- Onde ações podem ser pausadas e continuadas depois;
- Caracterizados pelo function* e yield, veja:
- O yield pode salvar o estado da variável;
*/
//Exemplo 1:
function* generatorTest(){
    let id = 0;
    while(true) {
        yield id++;
    }
}

let criarId = generatorTest();

console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);

//Para ver as propriedades dele, é só dar o console.log no método .next().
console.log(criarId.next());
