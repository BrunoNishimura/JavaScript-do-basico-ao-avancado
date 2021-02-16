//Aula 259: Async Functions

/*
- Podemos criar funções assíncronas com palavra reservada async;
- Elas retornam uma Promise;
- Se retornar algo, a promessa é resolvida, se der alguma exception a promessa é rejeitada;
*/
//Exemplo 1:
async function somar (a, b) {
    return a + b;
}

somar(2,4).then(value => console.log(value));

console.log(somar(2,4));