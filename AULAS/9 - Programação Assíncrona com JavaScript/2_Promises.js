//Aula 255: Promises

/*
- As promises são ações assíncronas que podem produzir um valor em algum momento no código;
- Uma forma de dizer a linguagem que um valor pode estar presente em um ponto futuro do código;
- O objeto das promises é Promise, resolve é o método que resolve um Promise, o then é o que faz ela poder ser executada em um ponto futuro;
*/
//Exemplo 1:
let promessa = Promise.resolve(4 + 8);

console.log('Algum código');

promessa.then((value) => console.log(`A soma é ${value}`));

//Exemplo 2:
let p = Promise.resolve(5);

console.log("Outros códigos");
console.log(p);

p.then((value) => {console.log(`O valor é ${value}`)});

//Exemplo 3: Pegando o value do Exemplo 2 e usando novamente o Then.
p.then((value) => {return value + 5})
    .then((value) => {console.log(value)});

//Aula 256: Falha nas Promises
/*
- Uma Promise pode falhar, podemos reter esse erro com um método chamado catch;
- Com ele podemos exebir o erro no console, por exemplo, e fazer o debug no código;
*/
//Exemplo 1:
let promiseErrada = Promise.resolve(new Error("Algo deu errado"));

promiseErrada
    .then((value) => console.log(value))
    .catch(reason => console.log("Erro: " + reason));

//Exemplo 2:
let p = Promise.resolve(new Error ("Não deu certo"));

console.log("Outros códigos");

//Então decidimos usar a Promise futuramente.
p.then ((value) => console.log(value))
    .catch(reason => console.log("Falhou: " + reason));

//Aula 257: Rejeitando Promises
/* 
- Além do resolve, há o método reject;
- Que é quando determinada lógica não satisfaz o nosso programa, então podemos ir para outra com o reject, em vez do resolve;
- Resolve e Reject terminam a Promise, ou seja, não podemos mais chamar o then, por exemplo:
*/
//Exemplo 1: Emiter o error, serve para detectar quando a Promise falhou para depois corrigir este erro.

function verificarAlgo(num) {
    return new Promise((resolve, reject) => {
        if(num == 2) {
            resolve(console.log(`O número é ${num}`));
        } else {
            reject(new Error("Falhou"));
        }
    })
}

verificarAlgo(3);
verificarAlgo(2);

//Aula 258: Resolvendo várias Promises
/*
- Com o método all, podemos resolver várias promessas de uma vez só;
- Ou seja passamos elas por array e quando a última for resolvida, receberemos a resposta; 
*/

const promise1 = new Promise (function(resolve, reject) {
    setTimeout (function () {
        resolve(1);
    }, 5000);
});

const promise2 = Promise.resolve(2)

const promise3 = new Promise ((resolve, reject) => {
    resolve(3);
})

Promise.all([promise1, promise2, promise3]).then((values) => console.log(values));



